import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckIcon, StarIcon, BookOpenIcon, CodeIcon, BrainIcon, TrophyIcon, ZapIcon, ShieldIcon, ClockIcon, FlameIcon } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <BookOpenIcon className="w-8 h-8" />,
      title: "67 Core JavaScript Theory Questions",
      description: "From the most asked to the trickiest — covering hoisting, closures, promises, event loops, data types, and more."
    },
    {
      icon: <CodeIcon className="w-8 h-8" />,
      title: "52 ReactJS Interview Questions", 
      description: "Component lifecycle, hooks, state management, JSX, performance optimization — all in one place."
    },
    {
      icon: <BrainIcon className="w-8 h-8" />,
      title: "28 Output-Based JavaScript Puzzles",
      description: "Designed to test and enhance your practical debugging and logical skills."
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: "27 Real-World Coding Problems",
      description: "Perfect for whiteboard rounds, take-home assignments, and online assessments."
    }
  ];

  const benefits = [
    "Covers Real Interview Scenarios",
    "Interview Tips From a Real SDE2",
    "Easy To Follow Structure",
    "Polyfills & Deep Concepts Explained",
    "Built for Modern JS Interviews"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Frontend Developer at Zomato",
      content: "This guide helped me crack my React interview at Zomato. The output questions were exactly what they asked!",
      rating: 5
    },
    {
      name: "Priya Sharma", 
      role: "SDE at Flipkart",
      content: "Best investment for interview prep. Got selected at Flipkart after studying this guide for just 2 weeks.",
      rating: 5
    },
    {
      name: "Ankit Verma",
      role: "Full Stack Developer",
      content: "The real-world coding problems section is gold. It's like having a mentor guide you through interviews.",
      rating: 5
    }
  ];

  const topics = [
    { js: "Hoisting & TDZ", react: "Class vs Functional Components" },
    { js: "Closures & Scope", react: "useState, useEffect, useMemo" },
    { js: "Promises, Async/Await", react: "Props vs State" },
    { js: "Data Types & Comparison", react: "Component Lifecycle" },
    { js: "Array & Object Operations", react: "Controlled vs Uncontrolled Components" },
    { js: "Local vs Session Storage", react: "Lifting State Up" },
    { js: "Event Loop & Call Stack", react: "Context API & Redux Basics" },
    { js: "Output-Based MCQs", react: "Conditional Rendering" }
  ];

  const outputExamples = [
    {
      title: "Async/Await & Event Loop",
      code: `async function foo() {
 console.log("A");
 await Promise.resolve();
 console.log("B");
 await new Promise(resolve => {
    return setTimeout(resolve, 0)
 });
 console.log("C");
}
console.log("D");
foo();
console.log("E");`,
      explanation: "Tests understanding of microtasks, macrotasks, and event loop execution order."
    },
    {
      title: "Arrow Functions & 'this' Binding",
      code: `function getName1(){
 console.log(this.name);
}
Object.prototype.getName2 = () =>{
 console.log(this.name)
}
let personObj = {
 name:"Tony",
 print:getName1
}
personObj.print();
personObj.getName2();`,
      explanation: "Demonstrates the difference between regular functions and arrow functions in context binding."
    },
    {
      title: "Hoisting & Variable Declaration",
      code: `console.log(a);
console.log(b);
console.log(c);
var a = 1;
let b = 2;
const c = 3;`,
      explanation: "Tests knowledge of hoisting behavior with var, let, and const declarations."
    }
  ];

  const faqItems = [
    {
      question: "What exactly do I get when I purchase?",
      answer: "You'll receive an instant PDF download containing 175+ interview questions and answers, including 67 core JavaScript theory questions, 52 ReactJS questions, 28 output-based puzzles, and 27 real-world coding problems. The guide also includes pro tips from an SDE2 and detailed explanations."
    },
    {
      question: "Is this a one-time payment or subscription?",
      answer: "It's a one-time payment of ₹349 only. No recurring charges, no hidden fees. Once you purchase, you own the content forever and can access it anytime."
    },
    {
      question: "How will I receive the PDF?",
      answer: "After successful payment, you'll be redirected to the page for downloading PDF."
    },
    {
      question: "Is there a refund policy?",
      answer: "No, Due to the digital nature of this product, all sales are final.Once the PDF has been downloaded, we cannot offer cancellations, exchanges, or refunds. If you encounter any issues with your download, please contact us and we'll be happy to assist."
    },
    {
      question: "How current is the content?",
      answer: "All questions are based on 2025's latest interview trends and modern JavaScript/React practices. The content is regularly updated to reflect current industry standards and popular interview formats."
    },
    {
      question: "Can I use this for multiple interviews?",
      answer: "Absolutely! This is your personal copy to use for as many interviews as you want. Practice unlimited times, refer back whenever needed - it's yours for life."
    },
    {
      question: "What if I'm a beginner?",
      answer: "The guide is structured to help both beginners and experienced developers. Each question includes detailed explanations, and concepts are explained from basics to advanced levels."
    },
    {
      question: "Do you provide interview tips beyond questions?",
      answer: "Yes! The guide includes pro tips on how to approach interviews, what buzzwords to use, how to explain concepts during screen sharing, and strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-premium-gradient text-white overflow-hidden relative">
      {/* Hero Section */}
      <section className="relative px-5 py-12 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-premium-orange/20 to-premium-yellow/20 blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="bg-orange-gradient text-black font-semibold px-4 py-2 mb-6 text-sm">
              🔖 175+ Interview Question & Example
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight capitalize">
              The Only <span className="bg-orange-gradient bg-clip-text text-transparent">JavaScript </span> Guide You Need To Crack<span className="bg-orange-gradient bg-clip-text text-transparent"> next interview! </span>
            </h1>
            {/* <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Crack <span className="bg-orange-gradient bg-clip-text text-transparent">JavaScript & ReactJS</span> Interviews Like a Pro!
            </h1> */}
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                This isn't just another PDF — it's a power-packed, battle-tested toolkit built to help you crack even the toughest JavaScript and React interviews.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-5">
              <Button size="lg" className="bg-orange-gradient hover:scale-105 transition-transform text-black font-bold px-8 py-4 text-md w-full sm:w-auto max-w-sm">
                Download PDF - ₹349 Only
              </Button>
              <p className="text-sm text-gray-400">✨ Instant PDF Download</p>
            </div>
            {/* <div className="mt-8 p-1 rounded-[12px] bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 shadow-orange-400/60 shadow-lg"> */}
              {/* <div className="rounded-[12px] overflow-hidden bg-white"> */}
              <div className="mt-10 flex justify-center">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0643/0084/3087/files/1751120311.png?v=1751120380" 
                  alt="Example" 
                  className="w-[220px] h-auto block transition-transform duration-300 hover:scale-105"
                />
              </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="px-5 pt-0 md:py-10 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              ✅ What's Inside the <span className="bg-orange-gradient bg-clip-text text-transparent">Guide?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-glass-gradient backdrop-blur-xl border-white/10 p-6 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="text-premium-orange group-hover:animate-float">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Output-Based Questions Examples */}
      <section className="px-5 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              🧩 <span className="bg-orange-gradient bg-clip-text text-transparent">Output-Based Questions</span> Examples
            </h2>
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-gray-300 text-sm">
                Real interview scenarios that test your understanding of JavaScript fundamentals
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {outputExamples.map((example, index) => (
              <Card key={index} className="bg-glass-gradient backdrop-blur-xl border-white/10 p-6">
                <h3 className="text-lg font-semibold text-premium-orange mb-3">{example.title}</h3>
                <div className="bg-grey-gradient rounded-lg p-4 mb-4 border border-white/10">
                  <pre className="text-sm text-gray-200 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
                <p className="text-gray-300 text-sm">{example.explanation}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Guide Section */}
      <section className="px-5 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              💼 Why This Guide Is Your <span className="bg-orange-gradient bg-clip-text text-transparent">Secret Weapon</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-glass-gradient backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-premium-orange/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-premium-orange flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered Section */}
      <section className="px-5 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              🔥 Most Common <span className="bg-orange-gradient bg-clip-text text-transparent">Interview Topics</span> Covered
            </h2>
          </div>
          <div className="bg-glass-gradient backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-premium-orange flex items-center">
                  <CodeIcon className="w-6 h-6 mr-2" />
                  📂 JavaScript Topics
                </h3>
                <div className="space-y-2">
                  {topics.map((topic, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                      <span className="text-white text-sm">{topic.js}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-premium-yellow flex items-center">
                  <BrainIcon className="w-6 h-6 mr-2" />
                  ⚛️ React Topics
                </h3>
                <div className="space-y-2">
                  {topics.map((topic, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                      <span className="text-white text-sm">{topic.react}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Get This Section */}
      <section className="px-5 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            👨‍💻 Who Should <span className="bg-orange-gradient bg-clip-text text-transparent">Get This?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "🎓 Students preparing for campus placements",
              "💼 Developers aiming for startup or FAANG-level roles", 
              "🔄 Anyone switching to frontend or full-stack roles",
              "📈 Professionals wanting to refresh core JS/React concepts"
            ].map((item, index) => (
              <div key={index} className="bg-glass-gradient backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:scale-105 transition-transform">
                <p className="text-sm text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-5 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              🌟 What Our <span className="bg-orange-gradient bg-clip-text text-transparent">Students Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-glass-gradient backdrop-blur-xl border-white/10 p-5 hover:scale-105 transition-transform">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-premium-yellow fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-3 text-sm italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-premium-orange text-xs">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Questions Section */}
      <section className="px-5 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            🧠 <span className="bg-orange-gradient bg-clip-text text-transparent">Advanced Questions</span> Also Included
          </h2>
          <div className="bg-glass-gradient backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <p className="text-lg mb-6 text-gray-300">Differences between:</p>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {[
                "== vs ===", "map vs forEach", "splice vs slice", "call, apply, bind",
                "Object.freeze() vs Object.seal()", "localStorage vs sessionStorage vs indexedDB",
                "Polyfill writing (for map, forEach)", "Generator functions",
                "Axios vs Fetch", "Tree shaking, Babel, Web Workers"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <ZapIcon className="w-4 h-4 text-premium-orange flex-shrink-0" />
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="px-5 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            💡 Pro <span className="bg-orange-gradient bg-clip-text text-transparent">Interview Tips</span> Included
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "🔑 Add buzzwords like 'temporal dead zone', 'lexical environment'",
              "💻 Share screen and explain with real code during interviews",
              "📦 Bonus section on package.json versioning: ^ vs ~",
              "🛡️ Concepts on Authentication vs Authorization (JWT included!)"
            ].map((tip, index) => (
              <div key={index} className="bg-glass-gradient backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <p className="text-white text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-5 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              ❓ Frequently Asked <span className="bg-orange-gradient bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-300 text-sm">
              Everything you need to know before making your purchase
            </p>
          </div>
          <div className="bg-glass-gradient backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/10 rounded-lg px-4 bg-white/5"
                >
                  <AccordionTrigger className="hover:no-underline text-left">
                    <span className="text-white font-medium text-sm">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300 text-sm leading-relaxed pt-2">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-5 py-12 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-glass-gradient backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              📥 Ready to Land Your <span className="bg-orange-gradient bg-clip-text text-transparent">Dream Role?</span>
            </h2>
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-lg text-gray-300 mb-6">
                Download the Guide Today and Start Preparing Smarter — Not Harder!
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Button size="lg" className="bg-orange-gradient hover:scale-110 transition-transform text-black font-bold px-12 py-6 text-md animate-glow w-full sm:w-auto max-w-md">
                🚀 Download PDF - ₹349 Only
              </Button>
              <div className="flex flex-col sm:flex-row gap-4 text-premium-yellow">
                <span className="flex items-center text-sm"><ShieldIcon className="w-4 h-4 mr-2" />✨ Stand out in interviews</span>
                <span className="flex items-center text-sm"><BookOpenIcon className="w-4 h-4 mr-2" />✨ Learn from real-world examples</span>
                <span className="flex items-center text-sm"><TrophyIcon className="w-4 h-4 mr-2" />✨ Land the job you deserve</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Purchase Container */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="max-w-md mx-auto bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <FlameIcon className="w-5 h-5 text-premium-orange animate-pulse" />
              <span className="text-sm font-bold text-premium-orange">LIMITED OFFER</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-4 h-4 text-premium-yellow" />
              <span className="text-xs text-premium-yellow font-mono">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
          {/* <div className="text-center mb-3">
            <p className="text-white text-sm font-semibold">JavaScript Interview Guide</p>
            <p className="text-gray-300 text-xs">175 Questions & Answers</p>
          </div> */}
          <Button className="w-full bg-orange-gradient hover:scale-105 transition-transform text-black font-bold py-3 text-sm animate-pulse">
            💳 Download PDF - ₹349 Only
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-premium-orange/20 rounded-full blur-xl animate-float hidden lg:block"></div>
      <div className="fixed bottom-20 right-10 w-32 h-32 bg-premium-yellow/20 rounded-full blur-xl animate-float hidden lg:block" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default Index;
