"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Bed, Bath, Ruler, Phone, TrendingUp } from "lucide-react";
import { CookingPot } from "lucide-react";
type Props = {
  name: string;
  location: string;
  financeType: string;
  price: string | number;
  beds: number;
  baths: number;
  sqft: number;
  agentName: string;
  agentPhone: string;
  kitchens: number;
  newListing?: boolean;
  youtubeVideoUrl?: string;
  imageUrl: string;
  trending?: Boolean;
};
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function View() {
  return <Card className="">Hello World</Card>;
}
