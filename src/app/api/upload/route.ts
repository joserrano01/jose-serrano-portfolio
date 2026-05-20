import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_SIZE = 5 * 1024 * 1024;
const SAFE_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png":  "png",
  "image/webp": "webp",
  "image/gif":  "gif",
};

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.UPLOAD_SECRET;
  if (!secret) return false;
  const header = request.headers.get("x-upload-secret");
  return header === secret;
}

async function uploadToCloudinary(buffer: Buffer, mimeType: string): Promise<string> {
  const { v2: cloudinary } = await import("cloudinary");
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const base64 = `data:${mimeType};base64,${buffer.toString("base64")}`;
  const result = await cloudinary.uploader.upload(base64, {
    folder: "jose-serrano-portfolio",
    transformation: [{ width: 1200, crop: "limit", quality: "auto:good" }],
  });
  return result.secure_url;
}

async function uploadToLocal(buffer: Buffer, mimeType: string): Promise<string> {
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }
  const ext = SAFE_EXT[mimeType] ?? "jpg";
  const safeName = `project_${Date.now()}.${ext}`;
  await writeFile(path.join(uploadDir, safeName), buffer);
  return `/uploads/${safeName}`;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });
  if (!ALLOWED_TYPES.includes(file.type)) return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
  if (file.size > MAX_SIZE) return NextResponse.json({ error: "File too large (max 5MB)" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());

  const useCloudinary = process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET;
  const url = useCloudinary
    ? await uploadToCloudinary(buffer, file.type)
    : await uploadToLocal(buffer, file.type);

  return NextResponse.json({ url });
}
