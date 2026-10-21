import { createFileRoute } from "@tanstack/react-router";
import BioPage from "@/components/bio/BioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ryan Cimardi Iuchi — Dev back-end" },
      { name: "description", content: "Construo APIs, bancos de dados e apps em tempo real. Portfólio, Lavô+, currículo e contato." },
      { property: "og:title", content: "Ryan Cimardi Iuchi — Dev back-end" },
      { property: "og:description", content: "Construo APIs, bancos de dados e apps em tempo real." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BioPage,
});
