import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TribuneraStorySection() {
  const storyCards = [
    {
      title: "El Blend de la Tribuna",
      content: "Nuestro equipo de especialistas selecciona las mejores hierbas uruguayas, combinadas con cosechas nobles de Misiones. Un sabor que rinde homenaje al fútbol amateur: auténtico, intenso y colectivo."
    },
    {
      title: "De la Hacienda al Club",
      content: "Cada paquete representa una red de trabajo local, donde productores, tostadores y clubes comparten una misma misión: que el fútbol que jugamos todos también genere valor para todos."
    },
    {
      title: "El Espíritu Tribunero",
      content: "Más que una yerba, es una causa. Una manera de unir a la gente que alienta, juega y aporta. Pronto conocerás cada paso del proceso y las personas que lo hacen posible."
    }
  ];

  return (
    <section className="bg-[#1C1C1C] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Próximamente: conocé la historia detrás de Yerba Tribunera
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            El viaje desde el potrero hasta la hoja perfecta. Una mezcla nacida de la pasión por el fútbol y la tradición yerbatera.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {storyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#E2B100]">
                {card.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            disabled
            className="inline-flex items-center gap-2 bg-gray-300 text-gray-500 font-semibold px-6 py-3 rounded-xl cursor-not-allowed"
          >
            Proximamente la historia completa
          </motion.button>
        </div>
      </div>
    </section>
  );
}
