import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Download, Droplet, FileText, Folder,
  Github, Instagram, Linkedin, Moon, Sun, Youtube,
} from "lucide-react";
import { profile } from "@/data/links";

export const ease = [0.22, 1, 0.36, 1];
export const rise = (delay = 0, y = 16) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

const icons = { folder: Folder, droplet: Droplet, file: FileText };
const socialIcons = { instagram: Instagram, github: Github, linkedin: Linkedin, youtube: Youtube };

export function Star({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
    </svg>
  );
}

export function useTheme() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setTheme("light");
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const btn = (value, Icon, label) => (
    <button
      type="button"
      aria-label={label}
      aria-pressed={theme === value}
      onClick={() => setTheme(value)}
      className={`grid h-8 w-8 place-items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
        theme === value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon size={15} />
    </button>
  );
  return (
    <div className="flex gap-1 rounded-full border border-line bg-surface p-1">
      {btn("light", Sun, "Tema claro")}
      {btn("dark", Moon, "Tema escuro")}
    </div>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <span className="font-display text-2xl font-extrabold tracking-tight">
        Rc<span className="text-accent">.</span>
      </span>
      <ThemeToggle />
    </header>
  );
}

export function PortraitArch({ className = "" }) {
  const [ok, setOk] = useState(Boolean(profile.photo));
  return (
    <motion.div {...rise(0, 20)} className={`relative shrink-0 ${className}`}>
      <div className="h-full w-full overflow-hidden rounded-t-full rounded-b-lg bg-primary">
        {ok ? (
          <img src={profile.photo} alt="Ryan Cimardi Iuchi" width={132} height={164} className="h-full w-full object-cover" onError={() => setOk(false)} />
        ) : (
          <span className="flex h-full items-end justify-center font-display text-[3.4em] font-extrabold leading-[0.78] tracking-tighter text-ink">RC</span>
        )}
      </div>
      <span className="absolute -right-3 bottom-3 grid h-[0.95em] w-[0.95em] place-items-center rounded-full border border-line bg-ink text-primary">
        <Star className="spin-slow h-1/2 w-1/2" />
      </span>
    </motion.div>
  );
}

export function StatusLabel() {
  return (
    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-text-2">
      <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
      {profile.role} · {profile.location}
    </p>
  );
}

export function LinkButton({ icon, title, description, href, variant = "outline", tag, download, delay = 0 }) {
  const Icon = icons[icon] || Folder;
  const primary = variant === "primary";
  return (
    <motion.a
      {...rise(delay)}
      href={href}
      {...(download ? { download: true } : {})}
      className={`group flex items-center gap-3 rounded-lg border p-3 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:gap-4 lg:p-5 ${
        primary ? "border-primary bg-primary text-primary-foreground" : "border-line bg-surface text-foreground hover:border-primary"
      }`}
    >
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl lg:h-13 lg:w-13 ${primary ? "bg-ink text-primary-foreground" : "bg-surface-2 text-accent"}`}>
        <Icon size={20} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="font-display text-[21px] font-bold leading-tight tracking-tight lg:text-[30px]">{title}</span>
          {tag && (
            <span className="rounded-full border border-line-strong px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-accent">{tag}</span>
          )}
        </span>
        <span className={`block truncate text-[13px] lg:text-[15px] ${primary ? "text-primary-foreground" : "text-text-2"}`}>{description}</span>
      </span>
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full lg:h-13 lg:w-13 ${primary ? "bg-ink text-primary-foreground" : "border border-line-strong"}`}>
        {download ? <Download size={18} /> : <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />}
      </span>
    </motion.a>
  );
}

export function ContactButton({ label, href, delay }) {
  return (
    <motion.a
      {...rise(delay)}
      href={href}
      className="flex h-13 items-center justify-center gap-2 rounded-full bg-pill font-medium text-pill-foreground transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:h-15"
    >
      {label} <ArrowUpRight size={18} />
    </motion.a>
  );
}

export function SocialLinks({ items, delay }) {
  return (
    <motion.ul {...rise(delay, 10)} className="flex gap-3">
      {items.map((s) => {
        const Icon = socialIcons[s.id];
        return (
          <li key={s.id}>
            <a
              href={s.href}
              aria-label={s.label}
              className="grid h-12 w-12 place-items-center rounded-full border border-line text-text-2 transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-accent lg:h-11 lg:w-11"
            >
              <Icon size={18} />
            </a>
          </li>
        );
      })}
    </motion.ul>
  );
}

export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="depth absolute inset-0" />
      <div className="aurora aurora-breathe absolute -inset-[12%]" />
      <div className="band absolute -inset-[25%]" />
      <div className="stars-1 absolute inset-0" />
      <div className="stars-2 absolute inset-0" />
      <div className="stars-3 absolute inset-0" />
      <div className="hero-stars absolute inset-0" />
      <div className="vignette absolute inset-0" />
      <div className="shoot shoot-a" />
      <div className="shoot shoot-b" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
