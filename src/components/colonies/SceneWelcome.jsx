import { Flag } from "lucide-react";
import SceneShell from "@/components/colonies/SceneShell";
import ChoiceButton from "@/components/colonies/ChoiceButton";

export default function SceneWelcome({ goTo }) {
  return (
    <SceneShell
      scene="welcome"
      eyebrow="Scene 1 · Welcome to the Colony"
      title="Plymouth, December 1620"
      footer={
        <ChoiceButton
          label="Go ashore and begin"
          hint="Raise the green flag — your simulation starts now."
          onSelect={() => goTo("geography")}
        />
      }
    >
      <p>
        You are among 102 passengers aboard the <em>Mayflower</em>, reaching land
        after a 66-day Atlantic crossing. About half are “Saints” — Puritan
        Separatists fleeing persecution in England — and half are “Strangers,”
        craftspeople and laborers hired for the voyage.
      </p>
      <p>
        Before anyone steps ashore, the men sign the <strong>Mayflower
        Compact</strong>, agreeing to make “just and equal laws” for the good of
        the whole community. It is one of the earliest acts of{" "}
        <strong>self-government</strong> in English America.
      </p>
      <div className="rounded-lg border border-[#cdb892] bg-[#fbf6e9] px-4 py-3 text-[13px] sm:text-sm">
        <p className="font-semibold text-[#3a5a3a] mb-1">The land was not empty.</p>
        <p>
          You are settling at <strong>Patuxet</strong>, a village of the{" "}
          <strong>Wampanoag people</strong>, led by the paramount chief{" "}
          <strong>Massasoit</strong>. A great epidemic (1616–1619) had emptied
          Patuxet shortly before your arrival, but the Wampanoag nation — its
          villages, fields, leaders, and laws — still governs the surrounding
          territory.
        </p>
      </div>
      <p className="text-[13px] text-[#8a6d3b] italic">
        Historical fact is set in plain text. Invented dialogue and game
        mechanics are dramatized for learning and are clearly separated from the
        history.
      </p>
      <div className="flex items-center gap-2 text-[#3a5a3a] text-sm font-semibold pt-1">
        <Flag size={16} /> Green flag raised — the simulation begins.
      </div>
    </SceneShell>
  );
}