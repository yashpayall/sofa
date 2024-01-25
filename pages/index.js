import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import Section from "@/components/common/Section";
import Sofafoter from "@/components/common/Sofafoter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Footer /> */}
      <Hero />
      <Section/>
      <Sofafoter/>
    </>
  );
}
