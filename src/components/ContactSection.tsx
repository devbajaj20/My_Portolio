import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: { name: form.name, email: form.email, message: form.message },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          <span className="text-primary text-glow-purple">Get in</span> Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Chennai, India" },
                { icon: Phone, text: "+91 9466232133" },
                { icon: Mail, text: "devbajaj2004@gmail.com" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <a href="https://www.linkedin.com/in/dev-bajaj-a9a586250" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/devbajaj20" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Github size={18} />
              </a>
            </div>

            <div className="mt-8 p-6 bg-card border border-border rounded-xl">
              <h4 className="text-foreground font-semibold mb-2">Let's Collaborate!</h4>
              <p className="text-muted-foreground text-sm">
                Open to internship opportunities, collaborative projects, and research in AI/ML and full-stack development.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Send Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button type="submit" disabled={sending} className="w-full glow-purple bg-primary hover:bg-primary/80">
                {sending ? (
                  <><Loader2 size={18} className="animate-spin mr-2" /> Sending...</>
                ) : (
                  <><Send size={18} className="mr-2" /> Send Message</>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
