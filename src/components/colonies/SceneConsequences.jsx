// @ts-nocheck
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import SceneShell from "@/components/colonies/SceneShell";

export default function SceneConsequences({ vars, choices, goTo }) {
  const allied = choices.decision === "alliance";
  const adopted = choices.life === "wampanoag";
  const coast = choices.geography === "coast";

  return (
    <SceneShell
      scene="consequences"
      eyebrow="Scene 5 · Consequences"
      title="The Years That Followed"
      footer={
        <div className="flex justify-end">
          <button
            onClick={() => goTo("reflection")}
            className="inline-flex items-center gap-2 rounded-lg bg-[#2b2117] text-[#f6efdd] px-5 py-2.5 font-semibold text-sm hover:bg-[#3f3526] transition-colors"
          >
            Reflect on the driving question <ArrowRight size={16} />
          </button>
        </div>
      }
    >
      <p>
        Your choices set the colony’s path. Here is what followed — drawn from the
        real history of Plymouth and the Wampanoag, with your decisions woven in.
      </p>

      {allied ? (
        <div className="rounded-lg border border-[#3a5a3a] bg-[#eef3e8] px-4 py-3">
          <p className="flex items-center gap-2 font-semibold text-[#3a5a3a] mb-1">
            <CheckCircle2 size={16} /> Alliance honored
          </p>
          <p>
            The treaty holds. Trade in furs and the shared
            harvest of 1621 becomes the peace we remember. {adopted
              ? "Because you adopted Wampanoag farming, the cornfields thrive and hunger fades."
              : "But because you refused Wampanoag farming, the colony stays hungry and depends more on trade."}{" "}
            {coast
              ? "Your harbor village becomes a busy fishing and trading post."
              : "Your inland village stays small but sheltered through the winters."}
          </p>
        </div>
      ) : (
        <div className="rounded-lg border border-[#8b2e2e] bg-[#f6e6e0] px-4 py-3">
          <p className="flex items-center gap-2 font-semibold text-[#8b2e2e] mb-1">
            <AlertTriangle size={16} /> Land taken, trust broken
          </p>
          <p>
            More settlers arrive and claim Wampanoag fields. Massasoit keeps the
            peace for now, but Wampanoag leaders warn the land is not yours to
            take. Fear and raids grow. {adopted
              ? "Even Squanto’s farming lessons cannot undo the damage of broken trust."
              : "Without Wampanoag farming or friendship, the colony struggles to feed itself."}
          </p>
        </div>
      )}

      <div className="rounded-lg border border-[#cdb892] bg-[#fbf6e9] px-4 py-3 text-[13px] sm:text-sm">
        <p className="font-semibold text-[#2b2117] mb-1">The longer arc of history</p>
        <p>
          Either path leads toward the same hard truth. As Plymouth’s population
          grew over the decades, English settlers pressed deeper into Wampanoag
          territory. In <strong>1675–1676</strong>, tensions exploded into{" "}
          <strong>King Philip’s War</strong>, named for Massasoit’s son Metacom
          (King Philip). It was one of the deadliest conflicts in colonial
          America recking devastation upon the Wampanoag, Narragansett, and English communities
          alike. The alliance of 1621 could not hold from the pressure
          of land and numbers.
        </p>
      </div>

      <p className="font-semibold text-[#2b2117]">
        Final standing of your colony:
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm">
        {Object.entries(vars).map(([k, v]) => (
          <li key={k} className="rounded-md bg-[#efe3c8] border border-[#cdb892] px-3 py-2 capitalize">
            <span className="block text-[11px] text-[#8a6d3b]">{k}</span>
            <span className="font-mono font-semibold text-[#2b2117]">{v}</span>
          </li>
        ))}
      </ul>
    </SceneShell>
  );
}