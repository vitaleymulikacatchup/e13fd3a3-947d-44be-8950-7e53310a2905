"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { CheckCircle, Star, Zap, Heart, Share2 } from 'lucide-react';

const assetMap = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/34297248/pexels-photo-34297248.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "biscuits" },
  { "id": "product1", "url": "https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A woman working at a desk using a laptop and smartphone, exemplifying remote work." },
  { "id": "product2", "url": "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A person uses a digital tablet with a stylus indoors in a warm, cozy setting." },
  { "id": "product3", "url": "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A diverse group of young professionals collaborating around a laptop in a modern office setting. Perfect for business or tech concepts." },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/32781741/pexels-photo-32781741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Modern Apple store pickup counter featuring a sleek wooden interior design" },
  { "id": "feature1", "url": "https://images.pexels.com/photos/32781741/pexels-photo-32781741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Modern Apple store pickup counter featuring a sleek wooden interior design" },
  { "id": "feature2", "url": "https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A customer exchanges an apple with a vendor at a vibrant farmers market." },
  { "id": "feature3", "url": "https://images.pexels.com/photos/5945597/pexels-photo-5945597.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of assorted fresh fruits including apples and berries in a rustic bowl, highlighting natural nutrition." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Your Store"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Discover the Latest Apple Devices"
            description="Explore our selection of iPhones, iPads, and MacBooks."
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url}
            buttons={[
              { text: "Shop Now", href: "products" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Expert Support", description: "Our team is here to help you with any need.", icon: CheckCircle },
              { title: "Genuine Products", description: "Certified Apple devices directly from the source.", icon: Star }
            ]}
            imageSrc={assetMap.find(a => a.id === "aboutImage")?.url}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Innovative Technology", description: "Experience the cutting-edge technology of Apple devices.", icon: Zap },
              { title: "Customer First", description: "We prioritize our customers in every decision we make.", icon: Heart },
              { title: "Seamless Integration", description: "Apple products work together flawlessly for a cohesive experience.", icon: Share2 }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "iphone", name: "iPhone 14", price: "$799", imageSrc: assetMap.find(a => a.id === "product1")?.url },
              { id: "ipad", name: "iPad Pro", price: "$999", imageSrc: assetMap.find(a => a.id === "product2")?.url },
              { id: "macbook", name: "MacBook Air", price: "$1199", imageSrc: assetMap.find(a => a.id === "product3")?.url }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Connected"
            description="Sign up to receive the latest updates on Apple products."
            imageSrc={assetMap.find(a => a.id === "aboutImage")?.url}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Shop", items: [
                { label: "iPhones", href: "products" },
                { label: "iPads", href: "products" },
                { label: "MacBooks", href: "products" }
              ] },
              { title: "Support", items: [
                { label: "Customer Service", href: "contact" },
                { label: "Warranty", href: "contact" }
              ] }
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
