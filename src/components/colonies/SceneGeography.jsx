import { useState } from "react";
// @ts-ignore
import { Mountain, Waves, ArrowRight } from "lucide-react";
import SceneShell from "@/components/colonies/SceneShell";
import ChoiceButton from "@/components/colonies/ChoiceButton";

// @ts-ignore
export default function SceneGeography({ apply, choose, goTo, choices }) {
  const [picked, setPicked] = useState(!!choices.geography);

  // @ts-ignore
  const handle = (value, changes) => {
    if (picked) return;
    setPicked(true);
    choose("geography", value);
    apply(changes);
  };

  return (
    <SceneShell
      scene="geography"
      eyebrow="Scene 2 · Geography"
      title="A Land That Shapes Every Choice"
      footer={
        picked && (
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <p className="font-serif text-[#3a5a3a] text-sm font-semibold">
              Your choice is recorded. Geography now shapes how you survive.
            </p>
            <button
              onClick={() => goTo("colonialLife")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#2b2117] text-[#f6efdd] px-5 py-2.5 font-semibold text-sm hover:bg-[#3f3526] transition-colors"
            >
              Continue to colonial life <ArrowRight size={16} />
            </button>
          </div>
        )
      }
    >
      <p>
        New England’s geography differs sharply from the other colonial regions.
        Thin, rocky soil and long, bitter winters make large plantation farming
        nearly impossible — unlike the fertile, mild <strong>Southern
        colonies</strong>, ideal for tobacco, or the broad rivers and moderate
        climate of the <strong>Middle Colonies</strong>, ideal for grain.
      </p>
      <p>
        But New England has its own wealth: <strong>dense forests</strong> for
        timber and shipbuilding, and a <strong>rocky Atlantic coast</strong> rich
        with fish and whales. Rivers power sawmills. The land pushes the colony
        toward the sea.
      </p>
      <p className="font-semibold text-[#2b2117] pt-1">
        Where will you build your village?
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <ChoiceButton
          label="Near the harbor and coast"
          hint="Fish, whales, and trade — but an exposed, wind-bitten shore. (+Food, +Supplies, −Health)"
          disabled={picked}
          onSelect={() => handle("coast", { food: 12, supplies: 8, health: -6 })}
        />
        <ChoiceButton
          label="Inland, by forest and fresh water"
          hint="Timber and shelter — but harder to reach the fishery. (+Supplies, +Health, −Food)"
          disabled={picked}
          onSelect={() => handle("inland", { supplies: 10, health: 8, food: -6 })}
        />
      </div>
      <p className="text-[13px] text-[#8a6d3b] italic flex items-center gap-2">
        <Mountain size={14} /> <Waves size={14} /> Region comparison is drawn from
        Chapter 3, Section 2.
      </p>
    </SceneShell>
  );
}