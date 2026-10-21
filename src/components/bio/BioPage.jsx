import { motion } from "framer-motion";
import { contact, links, profile, socials } from "@/data/links";
import {
  ContactButton, Header, LinkButton, PortraitArch, SocialLinks, StatusLabel, TechMarquee, ease,
} from "./parts";

function NameDesktop() {
  return (
    <h1 className="font-display text-[96px] font-extrabold leading-[0.92] tracking-[-0.04em]">
      {profile.name.map((word, i) => (
        <span key={word} className="block overflow-hidden pb-1">
          <motion.span
            className={`block ${i === 1 ? "text-outline" : ""}`}
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.08 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

export default function BioPage() {
  const linkDelay = (i) => 0.3 + i * 0.07;
  return (
    <div className="sky flex min-h-screen min-h-[100svh] flex-col">
      <main className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col px-5 pt-4 lg:px-10 lg:pt-8">
        <Header />

        {/* Mobile */}
        <div className="flex flex-1 flex-col justify-center gap-4 py-4 lg:hidden">
          <div className="flex flex-col items-center text-center">
            <PortraitArch className="h-[clamp(96px,17svh,150px)] w-[clamp(78px,14svh,122px)] text-[clamp(30px,5.4svh,44px)]" />
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="mt-3 whitespace-nowrap font-display text-[clamp(26px,8.6vw,34px)] font-extrabold tracking-[-0.04em]"
            >
              Ryan <span className="text-accent">Cimardi</span> Iuchi
            </motion.h1>
            <motion.div {...{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.2 } }} className="mt-1.5 flex flex-col items-center gap-1.5">
              <StatusLabel />
              <p className="max-w-[30ch] text-sm text-text-2">{profile.bio}</p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-2.5">
            {links.map((l, i) => (
              <LinkButton key={l.id} {...l} delay={linkDelay(i)} />
            ))}
            <ContactButton {...contact} delay={linkDelay(3)} />
          </div>
          <div className="flex justify-center">
            <SocialLinks items={socials} delay={0.65} />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden flex-1 items-center gap-16 py-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
          <div className="min-w-0">
            <NameDesktop />
            <div className="mt-8 flex items-end gap-7">
              <PortraitArch className="h-[164px] w-[132px] text-[48px]" />
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-col gap-4">
                <StatusLabel />
                <p className="max-w-[30ch] text-[17px] leading-relaxed text-text-2">{profile.bio}</p>
                <SocialLinks items={socials} delay={0.65} />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {links.map((l, i) => (
              <LinkButton key={l.id} {...l} delay={linkDelay(i)} />
            ))}
            <ContactButton {...contact} delay={linkDelay(3)} />
          </div>
        </div>
      </main>
      <TechMarquee />
    </div>
  );
}
