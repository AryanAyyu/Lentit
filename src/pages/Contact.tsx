import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-coffee mb-4">Contact Us</h1>
            <p className="text-foreground/80">
              We're here to help with any questions about our rental services. Reach out and we'll respond as soon as we can.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="bg-muted/30 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center bg-vanilla/10 p-4 rounded-full mb-4">
                <MapPin className="text-vanilla h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Our Location</h3>
              <p className="text-foreground/70">
                123 Fashion Avenue<br />
                New York, NY 10001
              </p>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center bg-vanilla/10 p-4 rounded-full mb-4">
                <Phone className="text-vanilla h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Call Us</h3>
              <p className="text-foreground/70">
                +1 (555) 123-4567<br />
                Mon-Fri, 9am-6pm
              </p>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center bg-vanilla/10 p-4 rounded-full mb-4">
                <Mail className="text-vanilla h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email Us</h3>
              <p className="text-foreground/70">
                support@lent-it.com<br />
                info@lent-it.com
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-coffee mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-coffee hover:bg-coffee/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-coffee mb-6">Business Hours</h2>
              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <div className="flex items-center mb-4">
                  <Clock className="text-vanilla h-5 w-5 mr-2" />
                  <h3 className="font-medium">When We're Available</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573368716!2d-73.9910086!3d40.7513565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4f1246fed%3A0xce9983ceb4462ea5!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1650480723980!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LENT-IT Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer would go here */}
      <footer className="bg-teal-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">LENT-IT</h3>
              <p className="text-white/80 mb-4">
                Premium fashion rentals for the discerning individual.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Bestsellers</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© {new Date().getFullYear()} LENT-IT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
