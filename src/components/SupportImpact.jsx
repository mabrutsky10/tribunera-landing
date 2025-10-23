import React from "react";
import { motion } from "framer-motion";
import { Check, Info, ArrowRight } from "lucide-react";

export default function SupportImpact() {
  const plans = [
    { name: "Plan 5", packages: "5 kg / mes", id: "5" },
    { name: "Plan 20", packages: "20 kg / mes", id: "20" },
    { name: "Más volumen", packages: "¿Necesitás otro número?", id: "custom" }
  ];

  const handlePlanClick = (planId) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.track) {
      window.track('subscribe_click', { plan: planId });
    }
    
    if (planId === 'custom') {
      window.location.href = '/contacto?topic=suscripciones';
    } else {
      window.location.href = `/suscripcion?plan=${planId}`;
    }
  };


  const handleInvestorClick = () => {
    if (typeof window !== 'undefined' && window.track) {
      window.track('investor_contact_click');
    }
    window.location.href = '/contacto?topic=inversion';
  };

  return (
    <section id="support-impact" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] mb-4">
            Tres formas de apoyar el impacto
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Elegí cómo sumarte a Yerba Tribunera para potenciar al fútbol amateur.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-8">
          {/* Card 1 - Suscripción */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border shadow-sm p-8 hover:shadow-md transition-shadow"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left side - Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1C1C1C] mb-4">
                  Suscribite a Yerba Tribunera
                </h3>
                <p className="text-lg text-neutral-600 mb-6">
                  Recibí paquetes todos los meses y ayudá a que el aporte sea constante.
                </p>
                
                <ul className="space-y-3 text-sm text-neutral-600 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2F6D3A] mt-0.5 flex-shrink-0" />
                    <span>Modelo de suscripción: elegí tu plan y acordá la entrega con tu <strong className="text-[#2F6D3A] font-bold">distribuidor Tribunera</strong> cada mes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2F6D3A] mt-0.5 flex-shrink-0" />
                    <span>Impacto transparente: cada paquete contribuye a equipos amateurs de tu comunidad.</span>
                  </li>
                </ul>
              </div>

              {/* Right side - Plans */}
              <div>
                <h4 className="text-lg font-semibold text-[#1C1C1C] mb-4">Planes disponibles</h4>
                <div className="space-y-3 mb-6">
                  {plans.map((plan) => (
                    <div key={plan.id} className="border rounded-xl p-4 hover:border-[#2F6D3A] transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-[#1C1C1C]">{plan.name}</div>
                          <div className="text-sm text-neutral-600">{plan.packages}</div>
                        </div>
                        <button
                          onClick={() => handlePlanClick(plan.id)}
                          data-tally-open="mBPjNe"
                          data-tally-layout="modal"
                          data-tally-emoji-text=""
                          data-tally-emoji-animation="wave"
                          className="px-4 py-2 bg-[#2F6D3A] text-white text-sm font-medium rounded-lg hover:bg-[#2F6D3A]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2F6D3A] focus:ring-offset-2"
                          aria-label={`Elegir ${plan.name}`}
                        >
                          {plan.id === 'custom' ? 'Contactar' : `Elegir ${plan.name}`}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 font-semibold py-3 px-4 rounded-xl cursor-not-allowed"
                >
                  Ver puntos de entrega
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Revender */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border shadow-sm p-8 hover:shadow-md transition-shadow"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left side - Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1C1C1C] mb-4">
                  Red de catálogo (equipos)
                </h3>
                <p className="text-lg text-neutral-600 mb-6">
                  Equipos no profesionales ganan comisión por entrega de paquetes de Yerba Tribunera en su comunidad.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <strong>Elegibilidad:</strong> Disponible solo para equipos de fútbol no profesional que estén dados de alta en <strong className="text-[#2F6D3A] font-bold">+10</strong>. Al aprobarse, quedan habilitados como <strong className="text-[#2F6D3A] font-bold">distribuidores oficiales</strong> y comisionan por cada paquete.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="flex flex-col justify-center">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-[#1C1C1C] mb-4">¿Tu equipo está listo?</h4>
                  <a
                    href="https://mas10.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-[#2F6D3A] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#2F6D3A]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2F6D3A] focus:ring-offset-2 text-lg"
                  >
                    Dar de alta mi equipo en +10
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Invertir */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border shadow-sm p-8 hover:shadow-md transition-shadow"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1C1C1C] mb-4">
                  Quiero invertir y ser parte del impacto
                </h3>
                <p className="text-lg text-neutral-600 mb-6">
                  Sumate como inversor para escalar la red y multiplicar los aportes al fútbol amateur.
                </p>
                <div className="bg-[#E2B100]/10 border border-[#E2B100]/20 rounded-lg p-4">
                  <p className="text-sm text-neutral-700">
                    <strong>Oportunidad única:</strong> Sé parte del crecimiento de un modelo de negocio que combina impacto social con sostenibilidad económica, apoyando directamente al fútbol amateur argentino.
                  </p>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="flex flex-col justify-center">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-[#1C1C1C] mb-4">¿Listo para invertir?</h4>
                  <button
                    data-tally-open="mBPjNe" 
                    data-tally-layout="modal" 
                    data-tally-emoji-text="" 
                    data-tally-emoji-animation="wave"
                    className="inline-flex items-center justify-center gap-3 w-full bg-[#E2B100] text-[#1C1C1C] font-semibold py-4 px-6 rounded-xl hover:bg-[#E2B100]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2B100] focus:ring-offset-2 text-lg"
                  >
                    Contactar
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
