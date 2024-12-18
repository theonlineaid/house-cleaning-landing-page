"use client";

// Component
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CompareImg from "./components/CompareImg";
import Footer from "./components/Footer";
import Team from "./components/Project";
import Feature from "./components/Feature";
import WhyChooseUs from "./components/WhyChooseUs";
import Counting from "./components/Counting";
import HeadingComponent from "./components/Heading";
import Pricing from "./components/Pricing";
import NewsLetter from "./components/NewsLetter";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />

      <Feature />

      <WhyChooseUs order="order-last" />

      <Counting />

      <WhyChooseUs order="order-first" />

      <div className="container mx-auto my-24">
        <CompareImg />
      </div>

      <div className="container mx-auto my-24">
        <HeadingComponent text="Recent Project" align="text-center" />
        <Team />
        <Pricing />

        <NewsLetter />
      </div>

      <Footer />
    </>
  );
}
