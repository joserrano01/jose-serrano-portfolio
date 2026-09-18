"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

interface Props {
  className: string;
  style: React.CSSProperties;
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function MagneticButton({ className, style, href, children, target, rel, onClick }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.25;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => { el.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)"; el.style.transform = ""; };
    const onEnter = () => { el.style.transition = "transform 0.1s ease"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseenter", onEnter);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (href.startsWith("/")) {
    return (
      <Link ref={ref} href={href} className={className} style={style} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a ref={ref} href={href} className={className} style={style} target={target} rel={rel} onClick={onClick}>
      {children}
    </a>
  );
}
