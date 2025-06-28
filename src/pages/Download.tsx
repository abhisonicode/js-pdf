import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckIcon, StarIcon, BookOpenIcon, CodeIcon, BrainIcon, TrophyIcon, ZapIcon, ShieldIcon, ClockIcon, FlameIcon } from "lucide-react";

const Download = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-premium-gradient text-white overflow-hidden relative">
      {/* Hero Section */}
      <section className="relative px-5 py-12 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-premium-orange/20 to-premium-yellow/20 blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="bg-orange-gradient text-black font-semibold px-4 py-2 mb-6 text-xs">
              Thank you for purchasing!
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Download your <span className="bg-orange-gradient bg-clip-text text-transparent">PDF</span> Instantly!
            </h1>
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-sm md:text-xl text-gray-300 mb-8">
               I truly appreciate your interest. I hope you find it valuable and packed with insights. Stay tuned for more helpful resources coming your way! 😊
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-5">
              <Button size="lg" className="bg-orange-gradient hover:scale-105 transition-transform text-black font-bold px-8 py-4 text-md w-full sm:w-auto max-w-sm">
                Download My PDF ❤️
              </Button>
              <p className="text-sm text-gray-400">✨ Instant PDF Download</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
