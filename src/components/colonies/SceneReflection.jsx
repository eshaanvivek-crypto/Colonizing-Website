import { RotateCcw, BookOpen } from "lucide-react";
import SceneShell from "@/components/colonies/SceneShell";

const FACTORS = [
  {
    title: "Geography",
    text: "Rocky soil and harsh winters made large farms impossible, so New England turned to fishing, lumber, and shipbuilding — a coastal economy unlike the plantation South or grain Middle Colonies.",
  },
  {
    title: "Resources",
    text: "Timber, fish, whales, and furs drove trade. Access to these resources — and to Wampanoag knowledge — decided whether a colony survived its first years.",
  },
  {
    title: "Beliefs",
    text: "Puritan faith and the “city upon a hill” ideal bound the community together and shaped its laws, worship, and sense of mission.",
  },
  {
    title: "Government",
    text: "The Mayflower Compact and town meetings planted seeds of self-rule and representative government that would grow into American democracy.",
  },
  {
    title: "Relationships",
    text: "The Wampanoag alliance, Squanto’s teaching, and the harvest of 1621 made survival possible — yet expanding settlement led to King Philip’s War, a tragic collision of nations.",
  },
];

export default function SceneReflection({ restart, choices }) {
  return (
    <SceneShell
      scene="reflection"
      eyebrow="Scene 6 · Final Reflection"
      title="Answering the Driving Question"
      footer={
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <p className="font-serif text-[#3a5a3a] text-sm font-semibold">
            Simulation complete.
          </p>
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 rounded-lg bg-[#2b2117] text-[#f6efdd] px-5 py-2.5 font-semibold text-sm hover:bg-[#3f3526] transition-colors"
          >
            <RotateCcw size={16} /> Run the simulation again
          </button>
        </div>
      }
    >
      <p className="font-semibold text-[#2b2117]">
        How did geography, resources, beliefs, government, and relationships
        shape the Thirteen Colonies?
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {FACTORS.map((f) => (
          <div key={f.title} className="rounded-lg border border-[#cdb892] bg-[#fbf6e9] px-4 py-3">
            <p className="font-serif font-semibold text-[#8b2e2e] mb-1">{f.title}</p>
            <p className="text-[13px] sm:text-sm text-[#3f3526] leading-relaxed">
              {f.text}
            </p>
          </div>
        ))}
      </div>
      <p>
        Together these forces made each colonial region distinct — and made the
        relationship between colonists and Native nations the single most
        consequential factor in whether a colony survived, prospered, or
        descended into war.
      </p>
      <div className="rounded-lg border border-[#cdb892] bg-[#efe3c8] px-4 py-3 text-[13px] sm:text-sm">
        <p className="flex items-center gap-2 font-semibold text-[#3a5a3a] mb-1">
          <BookOpen size={15} /> Fact vs. invention
        </p>
        <p>
          The Mayflower Compact, Massasoit’s 1621 treaty, Squanto and Samoset,
          the harvest of 1621, town meetings, and King Philip’s War (1675–76) are
          historical facts from Chapter 3. The player’s specific dialogue, the
          variable scores, and the branching outcomes are game mechanics built to
          teach — not a record of what any one person said or did.
        </p>
      </div>
      <p className="text-[13px] text-[#8a6d3b] italic">
        You chose: {choices.geography || "—"} settlement · {choices.life || "—"} farming · {choices.decision || "—"} alliance. Try a different path to see how the consequences change.
      </p>
    </SceneShell>
  );
}