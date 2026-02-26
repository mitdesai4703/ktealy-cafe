"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, MapPin, Phone, Clock, Instagram, Star, Facebook } from "lucide-react";
import { Croissant } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};



export default function KtealyPremium() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen font-sans bg-[#f5e6d3] text-neutral-800 overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#e9dfd2] border-b border-[#d6c6b8]">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">

    {/* Left Desktop Menu */}
    <nav className="hidden md:flex gap-12 text-sm tracking-[3px] font-medium text-[#5a3e2b]">
      <a href="#">HOME</a>
      <a href="#menu">MENU</a>
    </nav>

    {/* Logo */}
    <h1 className="text-xl md:text-4xl font-bold tracking-[3px] text-[#7a4b2a] text-center">
      K'TEALY CAFE
    </h1>

    {/* Desktop Right Menu */}
    <nav className="hidden md:flex gap-12 text-sm tracking-[3px] font-medium text-[#5a3e2b]">
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden text-[#7a4b2a]"
    >
      {open ? <X /> : <Menu />}
    </button>
  </div>

  {/* Mobile Dropdown */}
  {open && (
    <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#e9dfd2] text-[#7a4b2a] tracking-widest">
      <a href="#">HOME</a>
      <a href="#menu">MENU</a>
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </div>
  )}
</header>

    {/* Hero Section */}
<section
  className="relative h-[90vh] md:h-screen flex items-center"
  style={{
    backgroundImage: "url('/main.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Warm overlay */}
  <div className="absolute inset-0 bg-[#b98b60]/30"></div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
   className="relative z-10 max-w-6xl mx-auto px-6 md:px-10"
  >
    <div className="max-w-2xl text-left text-white">
      
     <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-semibold leading-tight mb-6">
        Savor Sunshine Mornings with <br />
        Coffee & Golden Pastry!
      </h2>

      <p className="text-lg opacity-90 mb-8">
        Experience premium coffee, cozy ambience, and gourmet delights in Adajan.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <Button className="rounded-none px-8 py-6 bg-white text-[#7a4b2a] hover:bg-[#f3e8dd] transition">
          VIEW MENU
        </Button>

        <Button className="rounded-none px-8 py-6 border border-white bg-transparent text-white hover:bg-white hover:text-[#7a4b2a] transition">
          BOOK A TABLE
        </Button>
      </div>

    </div>
  </motion.div>
</section>

      {/* About Section */}
    <motion.section
  id="about"
  className="w-full bg-[#f5efe6] pt-16 md:pt-24"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  {/* Top Content */}
  <div className="relative max-w-5xl mx-auto px-6 text-center pb-16">

    {/* Left Decorative Icon */}
    <Croissant
      className="hidden md:block absolute left-0 top-10 w-20 h-20 text-brown-800 opacity-80"
      strokeWidth={1.5}
    />

    {/* Right Decorative Icon */}
    <Coffee
      className="hidden md:block absolute right-0 top-10 w-20 h-20 text-brown-800  opacity-80"
      strokeWidth={1.5}
    />

    <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-brown-800 mb-6">
      OUR STORY
    </h2>

    <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto mb-8">
      At K'tealy Cafe, we believe a great coffee experience is about more than
      just the brew. It's the cozy ambiance, warm hospitality, and delightful
      treats that accompany each sip. Our cafe is a sanctuary where you can
      escape the everyday hustle and indulge in simple pleasures.
    </p>

    <button className="border border-brown-800 px-8 py-3 rounded-md text-brown-800 font-medium hover:bg-brown-800 hover:text-white transition duration-300 cursor-pointer">
      ABOUT US
    </button>
  </div>

  {/* Full Width Image */}
  <div className="w-full">
    <motion.img
      src="/img1.webp"
      alt="Cafe Story"
      className="w-full h-[500px] object-fill"
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    />
  </div>
</motion.section>

      {/* Menu Section */}
      <motion.section
  id="menu"
  className="py-28 px-6 bg-[#e9d7bd]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6 tracking-wide">
      WHAT WE HAVE
    </h2>
    <p className="text-neutral-700 text-lg">
      Crafted with the finest ingredients and a passion for flavor, our menu
      offers a tantalizing array of coffee creations, freshly baked goods, and
      savory bites.
    </p>
  </div>

  {/* Menu Categories */}
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        title: "SANDWICHES",
        image: "/img2.webp",
      },
      {
        title: "COFFEE & DRINKS",
        image: "/img3.webp",
      },
      {
        title: "Nachos",
        image: "/img4.webp",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[380px] object-cover transition duration-500 hover:scale-110"
          />
        </div>

        {/* Button */}
        <button className="mt-6 border border-brown-800 text-brown-800 px-6 py-3 rounded-md font-medium hover:bg-brown-800 hover:text-white transition duration-300">
          {item.title}
        </button>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* Instagram Promo Bar */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="w-full bg-[#8b4a24] text-white py-4 overflow-hidden"
>
 <div className="flex w-max animate-marquee h-10">
  <div className="flex items-center gap-16 whitespace-nowrap px-8 text-md md:text-base tracking-wide font-medium">
    
    <span className="flex items-center gap-3">
      <Star className="w-4 h-4" />
      Instagram @ktealy.cafe
    </span>

    <span className="flex items-center gap-3">
      <Star className="w-4 h-4" />
      Use #ktealy.cafe to share your experience with us
    </span>

    <span className="flex items-center gap-3">
      <Star className="w-4 h-4" />
      Follow Us on Instagram
    </span>

  </div>

  {/* DUPLICATE BLOCK */}
  <div className="flex items-center gap-16 whitespace-nowrap px-8 text-md md:text-base tracking-wide font-medium">
    
    <span className="flex items-center gap-3">
      <Star className="w-4 h-4" />
      Instagram @ktealy.cafe
    </span>

    <span className="flex items-center gap-3">
      <Star className="w-4 h-4" />
      Use #ktealy.cafe to share your experience with us
    </span>

    <span className="flex items-center gap-3">
      <Star className="w-4 h-4" />
      Follow Us on Instagram
    </span>

  </div>
</div>
</motion.div>

      {/* Gallery Section */}
   <motion.section
  id="gallery"
  className="py-36 px-6 bg-[#f5e6d3]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-7xl mx-auto">
    
    {/* Section Title */}
    <div className="text-center mb-20">
      <h3 className="text-4xl text-brown-800 md:text-5xl font-bold mb-4">
        Our Gallery
      </h3>
      <p className="text-brown-800 max-w-xl mx-auto">
        A glimpse of our cozy space, handcrafted drinks, and warm moments.
      </p>
    </div>

    {/* Gallery Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        "/img5.webp",
        "/img6.webp",
        "/img7.webp",
        "/img8.webp",
        "/img9.webp",
        "/img10.webp",
      ].map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-3xl shadow-lg"
        >
          <img
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="w-full h-72 object-fill transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
        </motion.div>
      ))}
    </div>

  </div>
</motion.section>

      {/* Testimonials Section */}
   <motion.section
  id="testimonials"
  className="py-36 px-6 bg-[#f3e4d7]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  {/* Heading */}
  <div className="text-center mb-20 -mt-30">
    <h3 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
      What Our Customers Say
    </h3>
    <p className="text-brown-800/70 max-w-xl mx-auto">
      Real experiences from our lovely guests who enjoy every sip and bite.
    </p>
  </div>

  <motion.div
    className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: { staggerChildren: 0.2 },
      },
    }}
  >
    {[
      {
        name: "Alice",
        text: "Amazing ambiance and coffee. Totally love it!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Bob",
        text: "Great place to work and chill. Coffee is top-notch.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      },
      {
        name: "Clara",
        text: "Friendly staff and cozy environment. Highly recommend!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      },
    ].map((cust, i) => (
      <motion.div
        key={i}
        className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-[#e8d6c3] flex flex-col gap-4"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        {/* Avatar + Name */}
        <div className="flex items-center gap-4">
          <img
            src={cust.avatar}
            alt={cust.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-brown-800/40"
          />
          <div>
            <p className="font-semibold text-brown-800 text-lg">
              {cust.name}
            </p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, j) => (
               <Star
  key={j}
  className="w-4 h-4"
  fill={j < cust.rating ? "#6b3e26" : "transparent"}
  stroke="#6b3e26"
  strokeWidth={1.5}
/>
              ))}
            </div>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-neutral-700 leading-relaxed text-sm">
          “{cust.text}”
        </p>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

 {/* Contact Section */}
<motion.section
  id="contact"
  className="py-32 bg-[#efe3d6]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  {/* SECTION HEADING */}
  <div className="text-center mb-20">
    <h2 className="text-4xl md:text-5xl font-bold text-[#6b3e26] mb-4">
      Visit Us
    </h2>
    <p className="text-[#6b3e26]/70 max-w-xl mx-auto">
      We’d love to welcome you for a cozy tea experience.
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 px-6">

    {/* LEFT SIDE – GOOGLE MAP */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
    >
      <iframe
        src="https://www.google.com/maps?q=K'tealy,+Adajan,+Surat&output=embed"
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        title="K'tealy Location"
      ></iframe>
    </motion.div>

    {/* RIGHT SIDE – Info */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-10"
    >
      <h3 className="text-4xl font-bold text-[#6b3e26] mb-8">
        K'tealy
      </h3>

      {/* Location */}
      <div className="mb-8">
        <h4 className="font-semibold text-[#6b3e26] mb-2">
          Our Location:
        </h4>
        <p className="text-[#6b3e26]/80 leading-relaxed">
          Western Arena Co-Operative Housing Society,  
          Adajan Gam, Adajan,  
          Surat, Gujarat 395009
        </p>
      </div>

      {/* Opening Hours */}
      <div className="mb-10">
        <h4 className="font-semibold text-[#6b3e26] mb-3">
          Opening Hours:
        </h4>
        <p className="text-[#6b3e26]/80">
          Monday – Sunday: 12:30 PM – 11:00 PM
        </p>
      </div>
      {/* Instagram */}
<div className="mb-10">
  <h4 className="font-semibold text-[#6b3e26] mb-3">
    Follow Us:
  </h4>

  <a
    href="https://www.instagram.com/ktealy_cafe/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#6b3e26] font-medium hover:underline flex items-center gap-2"
  >
    {/* Instagram Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm4.25 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
    </svg>

    @ktealy_cafe
  </a>
</div>

      <button className="border-2 border-[#6b3e26] text-[#6b3e26] px-8 py-3 rounded-md font-semibold hover:bg-[#6b3e26] hover:text-white transition-all duration-300">
        CONTACT US
      </button>
    </motion.div>
  </div>
</motion.section>

      {/* Footer */}
     <footer className="bg-[#8B4A2B] text-white py-8">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Top Row */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        K'tealy Cafe
      </div>

      {/* Center Navigation */}
      <nav className="flex gap-8 text-sm tracking-widest uppercase">
        <a href="#home" className="hover:text-neutral-200 transition">Home</a>
        <a href="#menu" className="hover:text-neutral-200 transition">Menu</a>
        <a href="#about" className="hover:text-neutral-200 transition">About</a>
        <a href="#contact" className="hover:text-neutral-200 transition">Contact</a>
      </nav>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="#" className="border border-white p-2 rounded-md hover:bg-white hover:text-[#8B4A2B] transition">
          <Instagram size={18} />
        </a>
        <a href="#" className="border border-white p-2 rounded-md hover:bg-white hover:text-[#8B4A2B] transition">
          <Facebook size={18} />
        </a>
      </div>

    </div>

    {/* Bottom Copyright */}
    <div className="text-center text-sm mt-8 text-neutral-200">
      © {new Date().getFullYear()} K'tealy Cafe
    </div>

  </div>
</footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919999999999" className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
      </a>
    </div>
  );
}