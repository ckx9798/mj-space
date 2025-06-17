import { EDUCATION } from "./constants";
import { GraduationCap } from "lucide-react";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function AboutEducation({ index = 0 }) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full rounded-2xl bg-gray-800/30 p-6 shadow-xl transition-all hover:border-indigo-200 hover:shadow-2xl"
    >
      <h3 className="mb-6 flex items-center text-xl font-semibold tracking-tight text-white">
        <GraduationCap size={40} className="mr-3 text-teal-300" />
        Education
      </h3>

      <div className="space-y-3 divide-y divide-gray-800 px-6">
        {EDUCATION.map((edu, idx) => (
          <div
            key={`${edu.year}:${idx}`}
            className="flex flex-col justify-between pt-2 first:pt-0 sm:flex-row sm:items-center"
          >
            <span className="text-base font-medium text-white">{edu.name}</span>
            <span className="text-sm text-gray-300">{edu.year}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
