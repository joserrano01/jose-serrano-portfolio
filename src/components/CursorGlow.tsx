"use client";
import { useEffect } from "react";
export default function CursorGlow() {
  useEffect(() => {
    const el = document.createElement('div');
    el.style.cssText = `position:fixed;pointer-events:none;z-index:1;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(37,99,235,0.05) 0%,transparent 65%);transform:translate(-50%,-50%);transition:left 0.15s ease,top 0.15s ease;will-change:left,top;`;
    document.body.appendChild(el);
    const move = (e: MouseEvent) => { el.style.left = e.clientX+'px'; el.style.top = e.clientY+'px'; };
    window.addEventListener('mousemove', move);
    return () => { window.removeEventListener('mousemove', move); el.remove(); };
  }, []);
  return null;
}
