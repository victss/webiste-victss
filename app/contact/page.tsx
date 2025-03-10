"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";


// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <motion.div
        className="grid gap-6 lg:grid-cols-2 lg:gap-12"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Left Section */}
        <motion.div className="space-y-4" variants={fadeInUp}>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
            <p className="text-muted-foreground mt-2">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="grid gap-6">
            {/* Ranchi Office */}
            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium">Ranchi Office (Head Office)</h3>
                <p className="text-sm text-muted-foreground">
                  Airport Road
                  <br />
                  Ranchi, Jharkhand
                </p>
              </div>
            </motion.div>
            {/* Dehradun Office */}
            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium">Dehradun Office</h3>
                <p className="text-sm text-muted-foreground">
                  Monal Enclave, Near Banjarawala
                  <br />
                  Dehradun, Uttarakhand - 248001
                </p>
              </div>
            </motion.div>
            {/* Haldwani Office */}
            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium">Haldwani Office</h3>
                <p className="text-sm text-muted-foreground">
                  Kathgodam, Haldwani
                  <br />
                  Nainital, Uttarakhand - 263126
                </p>
              </div>
            </motion.div>
            {/* Phone */}
            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <Phone className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 83939 45644</p>
              </div>
            </motion.div>
            {/* Email */}
            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <Mail className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">info@victss.com</p>
              </div>
            </motion.div>
            {/* Hours */}
            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <Clock className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9am - 5pm
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div variants={fadeInUp}>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide as much detail as possible..."
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}