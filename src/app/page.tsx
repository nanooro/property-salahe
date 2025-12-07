"use client";
import { supabase } from "@/lib/supabase";
import { NavbarMain } from "@/components/ui/header";
import HeroSectionOne from "@/components/hero-section-demo-1";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {useRef} from "react"
export default async function Home() {
  const { data, error } = await supabase.from("global_properties").select("*");

  if (error) {
    console.error("", error);
  }
  function handleFile(e) {
    const file = e.target.files?.[0]; // ← this is the file
    console.log(file);
  }
  const fileInput = useRef()
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavbarMain className="fixed top-0" />

      <HeroSectionOne />
      <div className="p-4 w-full h-auto">
        {data.map((item) => (
          <Card className="p-2" key={item.id}>
            {item.id + " :"}
            {item.property_name}
          </Card>
        ))}
        <Card className="p-2">{JSON.stringify(data)}</Card>
      </div>
      <Input type="file" className="hidden" ref={fileInput} onChange={handleFile} />
    </div>
  );
}
