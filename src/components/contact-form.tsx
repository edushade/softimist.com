"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

type Props = {};

export default function ContactForm({}: Props) {
  const [submitting, setSubmitting] = useState(false);

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    form.reset();
  }

  return (
    <>
      <form onSubmit={handleContactSubmit} className="space-y-4" aria-label="Contact form">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" placeholder="Jane Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company or School</Label>
          <Input id="company" name="company" placeholder="Acme Inc." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea id="message" name="message" placeholder="Share your goals, timeline, and any questions." rows={5} required />
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" disabled={submitting}>
            {submitting ? "Sending…" : "Send message"}
            {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
            {!submitting && <Send className="w-4 h-4" />}
          </Button>
        </div>
        <p className="text-sm text-gray-500">We’ll never share your information.</p>
      </form>
    </>
  );
}
