import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SceneShell from "@/components/colonies/SceneShell";
import ChoiceButton from "@/components/colonies/ChoiceButton";

export default function SceneColonialLife({ apply, choose, goTo, choices }) {
  const [picked, setPicked] = useState(!!choices.life);

  const handle = (value, changes) => {
    if (picked) return;
    setPicked(true);
    choose("life", value);
    apply(changes);
  };

  return (
    <SceneShell
      scene="colonialLife"
      eyebrow="Scene 3 · Colonial Life"
      title="Faith, Town Meetings, and a Teacher Named Squanto"
      footer={
        picked && (
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <p className="font-serif text-[#3a5a3a] text-sm font-semibold">
              Your harvest approach is set.
            </p>
            <button
              onClick={() => goTo("decision")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#2b2117] text-[#f6efdd] px-5 py-2.5 font-semibold text-sm hover:bg-[#3f3526] transition-colors"
            >
              Face the historical decision <ArrowRight size={16} />
            </button>
          </div>
        )
      }
    >
      <p>
        Life is hard and communal. Families work small plots, fish, and cut
        timber. Puritan belief shapes every day: the community worships together,
        and Governor John Winthrop calls the colony a <strong>“city upon a
        hill”</strong> — a model for the world to watch.
      </p>
      <p>
        <strong>Town meetings</strong> let male church members debate and vote on
        local laws — a seed of American <strong>representative
        government</strong>. This is the colonial economy and politics of Chapter
        3, Section 3.
      </p>
      <div className="rounded-lg border border-[#cdb892] bg-[#fbf6e9] px-4 py-3 text-[13px] sm:text-sm">
        <p className="font-semibold text-[#3a5a3a] mb-1">A Wampanoag teacher</p>
        <p>
          In March 1621, a Wampanoag man named <strong>Samoset</strong> walked
          into the settlement and greeted the colonists in English. Soon after,
          <strong> Tisquantum</strong> (“Squanto”) — a Patuxet man who had been
          kidnapped to Europe and returned home to find his people gone — stayed
          with the colony. He taught the colonists to plant <strong>corn using
          fish as fertilizer</strong>, and where to fish and trap. This knowledge
          helped many survive.
        </p>
      </div>
      <p className="font-semibold text-[#2b2117] pt-1">
        How will you feed your people?
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <ChoiceButton
          label="Learn Wampanoag methods — corn with fish fertilizer"
          hint="Adopt Indigenous knowledge. (+Food, +Trust)"
          disabled={picked}
          onSelect={() => handle("wampanoag", { food: 14, trust: 12 })}
        />
        <ChoiceButton
          label="Rely only on English wheat and tools"
          hint="Refuse the new methods. (−Food, −Trust)"
          disabled={picked}
          onSelect={() => handle("english", { food: -10, trust: -10 })}
        />
      </div>
    </SceneShell>
  );
}