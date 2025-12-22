"use client";
import { supabase } from "@/lib/supabase";
import { NavbarMain } from "@/components/ui/header";
import { Button } from "@/components/ui/button"
import HeroSectionOne from "@/components/hero-section-demo-1";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react"
import Link from "next/link"
export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("global_properties").select("*");
      if (error) {
        console.error(error);
      } else {
        setData(data);
      }
    };
    fetchData();
  }, []);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]; // ← this is the file
    console.log(file);
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavbarMain className="fixed top-0" />
      <HeroSectionOne />
      {/* 
      <Input type="file" className="hidden" ref={fileInput} onChange={handleFile} />
      */}
      <Button asChild><Link href="/explore">
        Explore <ArrowRight />
      </Link></Button>
    </div>
  );
}
