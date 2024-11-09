"use client";
import TypingImageSource from "@/components/TypingImageSource";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [imgSrc, setImgSrc] = useState<string|null>(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"><TypingImageSource onChange={setImgSrc} defaultSrc={imgSrc} />
    </main>
  );
}