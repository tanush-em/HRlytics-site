"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Calendar, FileText, FolderKanban, MessageSquareText, MicroscopeIcon as MicrophoneIcon, Users, CheckCircle, BarChart3, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Recruitment",
    description: "AI-powered candidate screening and intelligent interview scheduling to find the perfect match.",
    icon: Users,
  },
  {
    title: "Performance Analytics",
    description: "Real-time insights into employee performance with customizable KPI tracking.",
    icon: BarChart3,
  },
  {
    title: "Project Management",
    description: "Streamlined workflow management with automated task distribution.",
    icon: FolderKanban,
  },
  {
    title: "Secure Data Storage",
    description: "Enterprise-grade security for your sensitive HR data and documents.",
    icon: Shield,
  },
];

const benefits = [
  "Reduce hiring time by 60%",
  "Improve employee retention",
  "Automate HR workflows",
  "Ensure compliance",
  "Enhance team productivity",
  "Data-driven decisions"
];

const testimonials = [
  {
    quote: "This platform transformed our HR operations completely. We've reduced our hiring time by 50% and improved employee satisfaction.",
    author: "Sarah Johnson",
    role: "HR Director",
    company: "Tech Solutions Inc."
  },
  {
    quote: "The AI assistant is like having an extra team member. It handles routine queries efficiently, letting us focus on strategic tasks.",
    author: "Michael Chen",
    role: "People Operations Manager",
    company: "Global Innovations"
  },
  {
    quote: "Implementation was smooth, and the ROI has been remarkable. Our HR processes are now streamlined and data-driven.",
    author: "Emily Rodriguez",
    role: "Chief HR Officer",
    company: "Future Corp"
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for growing teams",
    features: [
      "Up to 50 employees",
      "Basic HR management",
      "Email support",
      "10GB storage",
      "Basic analytics"
    ],
  },
  {
    name: "Professional",
    price: "149",
    description: "For medium businesses",
    features: [
      "Up to 200 employees",
      "Advanced HR tools",
      "Priority support",
      "50GB storage",
      "Advanced analytics",
      "AI assistant basic"
    ],
  },
  {
    name: "Enterprise",
    price: "349",
    description: "For large organizations",
    features: [
      "Unlimited employees",
      "Full feature access",
      "24/7 dedicated support",
      "500GB storage",
      "Custom analytics",
      "AI assistant premium",
      "Custom integrations"
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-12 md:py-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Transform Your HR
              <br className="hidden sm:block" />
              With Intelligent Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your HR operations with our comprehensive management platform
              powered by advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-green-200 hover:bg-green-50">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies that have transformed their HR operations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-gray-700 p-2"
              >
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your HR operations efficiently
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-green-100">
                  <feature.icon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies worldwide
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-green-100">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                    <p className="text-green-600">{testimonial.company}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 md:p-8 h-full border-green-100 hover:border-green-300 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="text-4xl font-bold mb-6 text-gray-900">
                    ${plan.price}
                    <span className="text-lg text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Global Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by companies across 30+ countries
            </p>
            <div className="mt-8 flex justify-center">
              <Globe className="h-16 md:h-24 w-16 md:w-24 text-green-600" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-green-50 border-t border-green-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">HR Management Platform</h3>
              <p className="text-gray-600">
                Transform your HR operations with intelligent solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Features</li>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Updates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 HR Management Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}