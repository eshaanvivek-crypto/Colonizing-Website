import { motion } from "framer-motion";

export default function ChoiceButton({ label, hint, onSelect, disabled }) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.015, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      disabled={disabled}
      onClick={onSelect}
      className="group w-full text-left rounded-xl border border-[#cdb892] bg-[#fbf6e9] hover:bg-[#f3e8cc] hover:border-[#8a6d3b] px-5 py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="flex items-start gap-3">
        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#8b2e2e] group-hover:bg-[#a83232] transition-colors flex-shrink-0" />
        <div>
          <p className="font-serif text-[#2b2117] font-semibold text-[15px] sm:text-base leading-snug">
            {label}
          </p>
          {hint && (
            <p className="font-serif text-[#6f5a3e] text-[13px] sm:text-sm mt-1 leading-snug">
              {hint}
            </p>
          )}
        </div>
      </div>
    </motion.button>
  );
}