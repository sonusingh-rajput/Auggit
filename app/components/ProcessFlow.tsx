import { motion } from "framer-motion";

export type FlowStep = { title: string; detail?: string };
export type FlowTrack = { label: string; note?: string; steps: FlowStep[] };
export type FlowInputs = { heading: string; groups: { title: string; items: string }[] };

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  inputs?: FlowInputs;
  tracks: FlowTrack[];
  outcome?: string;
};

export default function ProcessFlow({ eyebrow = "Process Flow", heading, subheading, inputs, tracks, outcome }: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest uppercase text-[#41a0c8]">{eyebrow}</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062039] mt-1">{heading}</h2>
        {subheading && <p className="mt-3 text-sm text-slate-600">{subheading}</p>}
      </div>

      {inputs && (
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#062039] mb-4">{inputs.heading}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inputs.groups.map((g) => (
              <div key={g.title} className="p-4 rounded-xl bg-[#9eddf7]/15 border border-[#41a0c8]/20">
                <div className="text-sm font-bold text-[#062039] mb-1">{g.title}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{g.items}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tracks.map((track) => (
        <div key={track.label} className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-[#062039]">{track.label}</h3>
            {track.note && <p className="text-xs text-slate-500 mt-0.5">{track.note}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {track.steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="text-xl font-black text-[#41a0c8] mb-1">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-sm font-bold text-[#062039] leading-snug">{s.title}</div>
                {s.detail && <p className="mt-1 text-xs text-slate-500 leading-relaxed">{s.detail}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {outcome && (
        <div className="text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-[#062039] text-[#f7c037] text-xs font-bold uppercase tracking-wider">
            {outcome}
          </span>
        </div>
      )}
    </div>
  );
}
