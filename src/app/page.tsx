"use client";
import AirQuality from "@/components/AirQuality";
import TMD from "@/components/TMD";
import TypingImageSource from "@/components/TypingImageSource";
import { TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TypingImageSource onChange={setImgSrc} defaultSrc={imgSrc} />
      <TMD />
      <AirQuality />
    </main>
  );
} //
