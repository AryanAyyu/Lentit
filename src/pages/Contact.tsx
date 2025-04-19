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
            <h1 className="text-4xl font-bold mb-4 text-left md:text-center font-">
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
            <div className=" flex-col text-left block md:hidden">
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
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-6 ">
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 w-[90%] md:w-[80%] bg-[#fff1c7] p-10 rounded-2xl"
              >
                {[
                  {
                    id: "name",
                    label: "Full Name",
                    type: "text",
                    value: formData.name,
                  },
                  {
                    id: "email",
                    label: "Email Address",
                    type: "email",
                    value: formData.email,
                  },
                  {
                    id: "subject",
                    label: "Subject",
                    type: "text",
                    value: formData.subject,
                  },
                ].map(({ id, label, type, value }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium mb-1"
                    >
                      {label}
                    </label>
                    <Input
                      id={id}
                      name={id}
                      type={type}
                      value={value}
                      onChange={handleChange}
                      required
                      placeholder={label}
                      className="w-full border-[#74070E] focus:ring-[#74070E]"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    className="w-full min-h-[150px] border-[#74070E] focus:ring-[#74070E]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#74070E] hover:bg-[#5e060b] text-[#F4E3B2]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-8 flex space-x-10 justify-center md:justify-start md:space-x-32 text-[#74070E]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5e060b]"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5e060b]"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5e060b]"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5e060b]"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
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
