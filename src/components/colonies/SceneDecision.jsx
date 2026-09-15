// @ts-nocheck
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SceneShell from "@/components/colonies/SceneShell";
import ChoiceButton from "@/components/colonies/ChoiceButton";

export default function SceneDecision({ apply, choose, goTo, choices }) {
  const [picked, setPicked] = useState(!!choices.decision);

  const handle = (value, changes) => {
    if (picked) return;
    setPicked(true);
    choose("decision", value);
    apply(changes);
  };

  return (
    <SceneShell
      scene="decision"
      eyebrow="Scene 4 · Historical Decision"
      title="Massasoit’s Offer, 1621"
      footer={
        picked && (
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <p className="font-serif text-[#3a5a3a] text-sm font-semibold">
              Your decision is made. The consequences follow.
            </p>
            <button
              onClick={() => goTo("consequences")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#2b2117] text-[#f6efdd] px-5 py-2.5 font-semibold text-sm hover:bg-[#3f3526] transition-colors"
            >
              See the consequences <ArrowRight size={16} />
            </button>
          </div>
        )
      }
    >
      <p>
        It is spring 1621. <strong>Massasoit</strong>, the Wampanoag paramount
        chief, arrives with warriors. The Wampanoag have their own reasons to seek
        an ally — rival nations and the losses from the recent epidemic have left
        them exposed. Massasoit offers a <strong>treaty of mutual defense and
        trade</strong>.
      </p>
      <p>
        You are few, weakened by the winter that killed half the colony. This
        single relationship will shape the colony’s future — and foreshadow the
        conflicts to come.
      </p>
      <div className="rounded-lg border border-[#cdb892] bg-[#fbf6e9] px-4 py-3 text-[13px] sm:text-sm">
        <p className="text-[#8a6d3b] italic">
          Historical fact: the 1621 treaty between Plymouth and the Wampanoag
          lasted over 50 years. The dialogue below is invented for the simulation.
        </p>
      </div>
      <p className="font-semibold text-[#2b2117] pt-1">
        What will you decide?
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <ChoiceButton
          label="Honor the alliance — trade fairly, respect Wampanoag territory"
          hint="Peace, trade, and the harvest feast of 1621. (+Trust, +Food, +People)"
          disabled={picked}
          onSelect={() => handle("alliance", { trust: 18, food: 10, population: 10 })}
        />
        <ChoiceButton
          label="Push inland and claim Wampanoag land for more settlers"
          hint="More land now — but rising tension. (+Supplies, −Trust, −Health)"
          disabled={picked}
          onSelect={() => handle("expansion", { supplies: 14, trust: -22, health: -8 })}
        />
      </div>
    </SceneShell>
  );
}