"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Crown, Sparkles, Hotel, Quote, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="aurora"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grandeur Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Discover unparalleled elegance and exceptional service at Grandeur Hotel, where every moment becomes a cherished memory"
          tag="Welcome"
          tagIcon={Crown}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://pixabay.com/get/g848c2c5e77138e5d726de28b555a4d0f8dcb60813f58e81fdbd5c3f7b463c288fb419d513fc3821c86e213811bee210631c02a3ae89f09e670219019ed7bcc30_1280.jpg"
          imageAlt="Luxury hotel lobby with elegant interior design"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Grandeur Hotel, we believe luxury is not just about opulent surroundings, but about creating extraordinary experiences that touch the soul. Since our founding, we have been dedicated to providing unmatched hospitality, where attention to detail meets genuine care, ensuring every guest feels truly special."
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardSix
          title="World-Class Amenities"
          description="Experience the finest facilities and services designed for your comfort and enjoyment"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              id: 1,
              title: "Spa & Wellness Center",
              description: "Rejuvenate your body and mind in our award-winning spa featuring therapeutic treatments and state-of-the-art wellness facilities",
              imageSrc: "https://pixabay.com/get/g5fe8a458d771ac7ecd768515580bc126a2a8415d5f480981ef159d5286da1e45669973defabbd695bbed76b6e60382c63ad5de066b5fab06d1fc75e37018a7c5_1280.jpg",
              imageAlt: "Luxury spa and wellness center"
            },
            {
              id: 2,
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by renowned chefs using the finest local and international ingredients",
              imageSrc: "https://pixabay.com/get/g9c9e11dce747f4614ae20297770a941bc85764044151f29c74faa31fecbe7f11339188f8430beae706407d9c751b8d22977e96692ba9f77f181b891781249cb2_1280.jpg",
              imageAlt: "Elegant hotel restaurant"
            },
            {
              id: 3,
              title: "Infinity Pool & Terrace",
              description: "Relax in our stunning infinity pool with panoramic city views and luxurious poolside service",
              imageSrc: "https://pixabay.com/get/g88a4a06b7f44ea1cb42c85b6b993f14eae91283d4a9e243f9ca5f38195b2bcd01aa9bce409b8fe6bd86a0c3ae74bf11098adf8800b30cba2fb898f70294cd1eb_1280.jpg",
              imageAlt: "Luxury hotel swimming pool"
            },
            {
              id: 4,
              title: "Fitness & Recreation",
              description: "Stay active with our fully equipped fitness center and recreational facilities available 24/7",
              imageSrc: "https://pixabay.com/get/geae38ed1f58902b828d6e5480a86b8dd2b16804a50703a03c0b3f4142c185a9d19d83d8d1d31751eeb6f26ed4a6104353b9054440a501a2956199c7f2ef386a4_1280.jpg",
              imageAlt: "Modern hotel fitness center"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxurious Accommodations"
          description="Choose from our carefully designed rooms and suites, each offering comfort and elegance"
          tag="Our Rooms"
          tagIcon={Hotel}
          products={[
            {
              id: "deluxe-room",
              name: "Deluxe Room",
              price: "From $299/night",
              imageSrc: "https://pixabay.com/get/ge35b46d4d7f13c96339a7a6f1aee6bc2f879d601ac55a9896e235d3e025a07f2f32852aebd01efe01368013c122aec2b819abc65d7a0d1eff0fdfa436bb0e74d_1280.jpg",
              imageAlt: "Luxury deluxe hotel room"
            },
            {
              id: "executive-suite",
              name: "Executive Suite",
              price: "From $599/night",
              imageSrc: "https://pixabay.com/get/gd10d31a94ccb64e4b190a5d01fb6b829978246a63b0faf81e6bcd1d120d6cb601bedc85fee8d143b8bb163d823b2e35b793057d63a9a1e206c746d857efc7848_1280.jpg",
              imageAlt: "Presidential hotel suite"
            },
            {
              id: "standard-room",
              name: "Standard Room",
              price: "From $199/night",
              imageSrc: "https://pixabay.com/get/g4e6b49d4408a06bf35abea71de00204642536c395e7454756df27e03c71f80c51fa52cdd389d48f3b2007c9c59faee120b1f8aafd39f0eabc184e1c7ac40bf42_1280.jpg",
              imageAlt: "Comfortable standard hotel room"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Read testimonials from our valued guests who experienced the Grandeur difference"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "James Harrison",
              role: "CEO, Harrison Industries",
              testimonial: "Absolutely exceptional service and attention to detail. The staff went above and beyond to make our stay memorable. The luxury amenities exceeded all expectations.",
              imageSrc: "https://pixabay.com/get/g3708ac3878f60fa66f204601dc97726b629768fdfb3e5304639fd3bd34c707542a229940da8225f6b77141735cb1c4ed6c5f8115f907f6b0977ea53d58a731da_1280.jpg",
              imageAlt: "Portrait of James Harrison"
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "Travel Blogger",
              testimonial: "Grandeur Hotel redefined luxury for me. From the elegant rooms to the world-class spa, every moment was perfect. I can't wait to return.",
              imageSrc: "https://pixabay.com/get/g6c3fa7ab38e6a7f3c73d17007601a6ea1821ddc30e25b7668769d1d0a958fd0c6629453288d7335fe0487282f0097f8856cb1836702b8193446632e4e46284de_1280.jpg",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Event Planner",
              testimonial: "We hosted our corporate retreat here and it was flawless. The event facilities are top-notch and the staff's professionalism is unmatched.",
              imageSrc: "https://pixabay.com/get/g4ead72698ab77ca895b55519a8cb9164d641f822427eaf018a54d423b52907abf8c34e52cc2a04a10838c93fa255e1c282c42161d5ceeb984cd14571d96758a4_1280.jpg",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "Michael Chen",
              role: "Investment Director",
              testimonial: "The perfect blend of luxury and comfort. Every detail has been thoughtfully considered to create an unforgettable experience.",
              imageSrc: "https://pixabay.com/get/gfe811ef183356b83ae0e29c0d0e1b84f68f47a8f4239622e5d96f2231bf1dab7b812846858fc07cc172215802de50a20b23b98b298564beeff7802a99f556881_1280.jpg",
              imageAlt: "Portrait of Michael Chen"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Plan Your Perfect Stay"
          description="Ready to experience luxury? Contact us to make a reservation or learn more about our exclusive packages and special offers"
          tagIcon={MessageCircle}
          inputPlaceholder="Enter your email address"
          buttonText="Contact Us"
          termsText="By submitting your email, you agree to receive updates about our services and special offers."
          imageSrc="https://pixabay.com/get/g6d13814aeb0e0ee2479fe2bef7c6aaccfb4c6effdbc4c29427fd843e9d663478320016ae4f5a923d1ecf1d843c554720569bd314da87c90a165a0c9040020068_1280.jpg"
          imageAlt="Elegant hotel reception desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Grandeur Hotel"
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "About Us", href: "about" },
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Special Offers", href: "offers" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Spa & Wellness", href: "spa" },
                { label: "Dining", href: "dining" },
                { label: "Events", href: "events" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact", href: "contact" },
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "FAQ", href: "faq" },
                { label: "Guest Services", href: "services" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/grandeurhotel",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/grandeurhotel",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/grandeurhotel",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
          copyrightText="© 2025 Grandeur Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}