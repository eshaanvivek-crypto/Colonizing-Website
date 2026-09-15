import { motion } from "framer-motion";
import SceneBackdrop from "@/components/colonies/SceneBackdrop";

export default function SceneShell({ scene, eyebrow, title, children, footer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full"
    >
      <div className="relative rounded-2xl border border-[#cdb892] bg-[#f6efdd] shadow-[0_18px_50px_-20px_rgba(59,47,28,0.55)] overflow-hidden">
        <SceneBackdrop scene={scene} />
        <div className="pointer-events-none absolute inset-0 bg-[#f6efdd]/55" />
        <div className="relative px-6 sm:px-10 py-8 sm:py-10">
          {eyebrow && (
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#8a6d3b] font-semibold mb-3">
              {eyebrow}
            </p>
          )}
          {title && (
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2b2117] leading-tight mb-5">
              {title}
            </h1>
          )}
          <div className="font-serif text-[#3f3526] text-[15px] sm:text-base leading-relaxed space-y-4">
            {children}
          </div>
          {footer && <div className="mt-7">{footer}</div>}
        </div>
      </div>
    </motion.div>
  );
}