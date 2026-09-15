import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import VariableBar from "@/components/colonies/VariableBar";
import SceneWelcome from "@/components/colonies/SceneWelcome";
import SceneGeography from "@/components/colonies/SceneGeography";
import SceneColonialLife from "@/components/colonies/SceneColonialLife";
import SceneDecision from "@/components/colonies/SceneDecision";
import SceneConsequences from "@/components/colonies/SceneConsequences";
import SceneReflection from "@/components/colonies/SceneReflection";

const INITIAL = { supplies: 50, food: 40, health: 65, trust: 50, population: 30 };
const SCENE_ORDER = ["welcome", "geography", "colonialLife", "decision", "consequences", "reflection"];

export default function Home() {
  const [scene, setScene] = useState("welcome");
  const [vars, setVars] = useState(INITIAL);
  const [choices, setChoices] = useState({});

  const apply = (changes) =>
    setVars((v) => {
      const next = { ...v };
      for (const [k, val] of Object.entries(changes)) {
        next[k] = Math.max(0, Math.min(100, Math.round(v[k] + val)));
      }
      return next;
    });

  const choose = (key, value) => setChoices((c) => ({ ...c, [key]: value }));
  const goTo = (s) => setScene(s);
  const restart = () => {
    setVars(INITIAL);
    setChoices({});
    setScene("welcome");
  };

  const props = { vars, apply, choose, choices, goTo };

  return (
    <div className="min-h-screen bg-[#e9dcc0] bg-[radial-gradient(circle_at_50%_0%,#f0e4ca_0,#e9dcc0_45%,#ddcda9_100%)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <header className="text-center mb-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a6d3b] font-semibold">
            Chapter 3 · U.S. History: American Stories
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2b2117] mt-1">
            Survive the Thirteen Colonies
          </h1>
          <p className="font-serif text-[#6f5a3e] text-sm sm:text-base mt-1">
            An interactive simulation · Plymouth Colony & the Wampanoag, 1620–1676
          </p>
        </header>

        <div className="mb-6">
          <VariableBar vars={vars} scene={scene} order={SCENE_ORDER} />
        </div>

        <main className="min-h-[420px]">
          <AnimatePresence mode="wait">
            {scene === "welcome" && <SceneWelcome key="welcome" {...props} />}
            {scene === "geography" && <SceneGeography key="geography" {...props} />}
            {scene === "colonialLife" && <SceneColonialLife key="colonialLife" {...props} />}
            {scene === "decision" && <SceneDecision key="decision" {...props} />}
            {scene === "consequences" && <SceneConsequences key="consequences" {...props} />}
            {scene === "reflection" && <SceneReflection key="reflection" restart={restart} choices={choices} />}
          </AnimatePresence>
        </main>

        <footer className="mt-8 text-center font-serif text-[12px] text-[#8a6d3b]">
          Historical facts from Chapter 3 · Invented dialogue and game mechanics
          are clearly labeled · Built as a web simulation fulfilling the Scratch
          project requirements.
        </footer>
      </div>
    </div>
  );
}