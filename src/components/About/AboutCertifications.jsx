import { CERTS } from "./constants";
import { ShieldCheck } from "lucide-react";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function AboutCertifications({ index = 1 }) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full rounded-2xl bg-gray-800/30 p-6 shadow-xl transition-all hover:border-indigo-200 hover:shadow-2xl"
    >
      <h3 className="mb-6 flex items-center text-xl font-semibold tracking-tight text-white">
        <ShieldCheck size={40} className="mr-3 text-teal-300" />
        Certifications
      </h3>

      <div className="space-y-3 divide-y divide-gray-800 px-6">
        {CERTS.map((cert, idx) => (
          <div
            key={`${cert.year}:${idx}`}
            className="flex flex-col justify-between pt-2 first:pt-0 sm:flex-row sm:items-center"
          >
            <span className="text-base font-medium text-white">
              {cert.name}
            </span>
            <span className="text-sm text-gray-300">{cert.year}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
