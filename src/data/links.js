import ryanCutout from "@/assets/ryan-cutout.png";

// Substitua os "#" pelos endereços reais.
export const profile = {
  name: ["Ryan", "Cimardi", "Iuchi"],
  role: "Dev. de Software & IA",
  location: "Lages, SC",
  bio: "Transformando ideias em soluções digitais. Criando soluções que fazem a diferença.",
  photo: ryanCutout,
};

export const links = [
  { id: "portfolio", icon: "folder", title: "Portfólio", description: "Projetos, habilidades e o que construí", href: "https://ryancimardiiuchi.vercel.app", variant: "primary", external: true },
  { id: "lavo", icon: "droplet", title: "Lavô+", description: "Lavanderia online com coleta e agendamento", href: "https://lavomais.vercel.app", variant: "outline", tag: "Em destaque", external: true },
  { id: "cv", icon: "file", title: "Currículo", description: "Trajetória profissional · PDF", href: "/__l5e/assets-v1/9615ae3e-1ace-4a83-a124-73937392afac/Curriculo_Ryan_Cimardi_Iuchi.pdf", variant: "outline", download: "Curriculo_Ryan_Cimardi_Iuchi.pdf" },
];

export const contact = { label: "Falar comigo", href: "#https://api.whatsapp.com/send/?phone=5549999471251&text&type=phone_number&app_absent=0" };

export const socials = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ryan_cimardi" },
  { id: "github", label: "GitHub", href: "https://github.com/ryancimardiiuchi" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ryan-cimardi-iuchi-4aa2a93b6" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@ryan_cimardi" },
];
