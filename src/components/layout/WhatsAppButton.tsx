import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919790805532";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Alpho, I'd like to talk about a project.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Alpho on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
