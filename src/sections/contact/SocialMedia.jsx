import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function SocialMedia() {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-xl font-semibold mb-6">Urmărește-ne</h2>
      <div className="flex justify-center gap-6">
        <a
          href=""
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-[#1877F2] text-white transition"
        >
          <Facebook />
        </a>
        <a
          href=""
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white transition hover:bg-gradient-to-r hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#515bd4]"
        >
          <Instagram />
        </a>
        <a
          href=""
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-[#0A66C2] text-white transition"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
}
