import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Your message has been sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-[#74070E]">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-left font-">
              CONTACT US
            </h1>
            <p className="text-[#74070E]/80 text-left">
              We’re here to help with any questions about our rental services.
              Reach out and we’ll respond as soon as we can.
            </p>
          </div>

          {/* Contact Info Boxes */}
          <div className="grid grid-cols-1 grid-col md:grid-cols-3 gap-10 mb-16">
            {[
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Our Location",
                content: "123 Fashion Avenue\nGreater Noida, UP 201310",
              },
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Call Us",
                content: "+91 82623XXXXX\nMon-Fri, 9am-6pm",
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email Us",
                content: "support@lent-it.com\ninfo@lent-it.com",
              },
            ].map((box, idx) => (
              <div
                key={idx}
                className="bg-[#fff1c7] p-6 rounded-lg text-center shadow-md text-sm flex items-center justify-between"
              >
                <div className="inline-flex items-center justify-center bg-[#74070E]/20 p-4 rounded-full mb-4 text-[#74070E] ">
                  {box.icon}
                </div>
                <h3 className="text-md font-semibold mb-2">{box.title}</h3>
                <p className="whitespace-pre-line text-[#74070E]/80 text-sm">
                  {box.content}
                </p>
              </div>
            ))}
          </div>

          {/* Form & Business Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {/* Form Section */}
            <div className="inline-flex flex-col text-left">
              <h2 className="text-2xl font-bold ml-3">Need more support?</h2>
              <p className="m-3">
                Our dedicated Customer Service Team are here to help! Chat with
                our Virtual assistant 24/7 for answers to frequently asked
                questions or speak with a live agent if you need more support
                during our opening hours.
              </p>
              <p className="text-left ml-2">
                Lent-It never sends payment links via WhatsApp, SMS or email.
                Pay only via Lent-It Website/App or at doorstep on delivery and
                disregard unusual payment requests.
              </p>
            </div>
            {/* Business Hours + Map */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
              <div className="bg-[#fff1c7] p-6 rounded-lg mb-6 shadow">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">When We're Available</h3>
                </div>
                <div className="space-y-2 text-[#74070E]/80">
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
                  src="https://www.google.com/maps/embed?pb=..."
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

      <Footer />
    </div>
  );
};

export default Contact;
