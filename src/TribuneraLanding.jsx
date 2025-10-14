import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Package, Users, Trophy, QrCode, HeartHandshake, CupSoda } from "lucide-react";
import logoImg from "./img/logotribunera-slogan.jpeg";
import packA from "./img/tribunera1kg.png";
import packB from "./img/tribunera1kg2.png";
import packC from "./img/tribunera10kg.png";
import packD from "./img/tribunera10kg2.png";
import SupportImpact from "./components/SupportImpact";

// Tailwind palette reference (from brand exploration)
// Verde Cancha: #2F6D3A  | Negro Tribuna: #1C1C1C | Dorado Gol: #E2B100
// Blanco Cal: #F7F7F7   | Rojo Pasión: #D32F2F   | Gris Cemento: #9E9E9E

export default function TribuneraLanding() {
  const [email, setEmail] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const features = [
    {
      icon: <HeartHandshake className="w-8 h-8" />, 
      title: "Apoya al fútbol no profesional",
      desc: "Yerba oficial del fútbol amateur, aportando a que cada equipo sea más visible, conectado y fondeable",
    },
  ];

  const carouselPhrases = [
    "que apoya el fútbol que vos jugás",
    "de los cracks que gambetean rivales, piedras y champas en la misma jugada",
    "de los cracks de estadios sin alambrados.",
    "de los que la llevan aunque la pelota pique distinto en cada metro.",
    "de los jugadores que se orientan con líneas de cal gastada.",
    "de los jugadores que cuentan los 12 pasos para el penal",
    "que comparte tus momentos."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => 
        (prevIndex + 1) % carouselPhrases.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselPhrases.length]);


  const faqs = [
    {
      q: "¿Cuánto se aporta por paquete?",
      a: "Referencia inicial: USD 0,50 por paquete al club/equipo vinculado. Puede variar por edición y canal.",
    },
    {
      q: "¿Cómo funciona la red de vendedores?",
      a: "Personas del ecosistema amateur (jugadores, DTs, familias) venden con su QR/código y reciben comisión por venta.",
    },
    {
      q: "¿Puedo elegir a qué club apoyar?",
      a: "Sí. En compras online elegís el club; en puntos físicos el QR del paquete te muestra el destino.",
    },
    {
      q: "¿Cuándo sale a la venta?",
      a: "Estamos en fase de producción y registro. Sumate para enterarte primero del lanzamiento.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#1C1C1C]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F6D3A] via-[#2F6D3A] to-[#1C1C1C] opacity-90" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <span className="inline-block text-xs tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full mb-4">Yerba Mate</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Tribunera<br />
                La yerba que comparte tu pasión
              </h1>
              <p className="mt-4 text-white/90 text-lg max-w-xl">
                Yerbas que apoyan a selecciones hay de a montones. Que apoye al fútbol que jugamos todos, sólo una… Yerba Mate Tribunera
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#sumate" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[#E2B100] text-[#1C1C1C] font-semibold shadow hover:brightness-95 transition">
                  Quiero enterarme del lanzamiento <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#support-impact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-white/10 text-white font-semibold hover:bg-white/20 transition">
                  ¿Cómo funciona?
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2"><Trophy className="w-4 h-4" /> Blend uruguayo premium. Sin palo. Con mucho aguante... como vos!</div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 text-white shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/20 aspect-[3/4] overflow-hidden">
                  <img src={packA} alt="Tribunera 1 kg - frente" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl bg-white/20 aspect-[3/4] overflow-hidden">
                  <img src={packB} alt="Tribunera 1 kg - dorso" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl bg-white/20 aspect-square overflow-hidden">
                  <img src={packC} alt="Tribunera 10 kg - frente" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl bg-white/20 aspect-square overflow-hidden">
                  <img src={packD} alt="Tribunera 10 kg - dorso" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="mt-4 text-sm text-white/80">*Imágenes de muestra. Diseño final en proceso.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="bg-white rounded-3xl p-8 shadow-lg border max-w-2xl text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#2F6D3A]/10 text-[#2F6D3A] mx-auto">
              {features[0].icon}
            </div>
            <h3 className="mt-6 font-bold text-2xl text-[#2F6D3A]">{features[0].title}</h3>
            <p className="text-lg text-neutral-700 mt-3 leading-relaxed">
              Yerba oficial del fútbol amateur, aportando a que cada equipo tenga su presencia y historia digital siendo más <strong className="text-[#2F6D3A] font-bold">visible</strong>, se <strong className="text-[#2F6D3A] font-bold">conecte</strong> con otros equipos, jugadores y seguidores, y así tener sus propios <strong className="text-[#2F6D3A] font-bold">ingresos</strong> por socios y sponsors (como Tribunera).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-[#2F6D3A] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-white">La yerba</span>
            <motion.span
              key={currentPhraseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="block text-[#E2B100] mt-2"
            >
              {carouselPhrases[currentPhraseIndex]}
            </motion.span>
          </div>
        </div>
      </section>

      {/* Support Impact */}
      <SupportImpact />

      {/* Sección catálogo/venta */}
      <section className="bg-gradient-to-br from-white to-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-extrabold">Venta por catálogo: puente digital–físico</h3>
              <p className="mt-3 text-neutral-700">Conectamos la comunidad online con la de potrero: QR personales para vendedores, ranking de clubes apoyados y seguimiento en tiempo real.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#2F6D3A] mt-1"/> Registro de vendedores vinculados al fútbol amateur.</li>
                <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#2F6D3A] mt-1"/> Catálogo online con códigos únicos por producto.</li>
                <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#2F6D3A] mt-1"/> Comisiones claras + tablero de impacto por club.</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#sumate" className="inline-flex items-center rounded-2xl px-5 py-3 bg-[#2F6D3A] text-white font-semibold shadow hover:brightness-110 transition">Quiero vender Tribunera</a>
                <a href="#sumate" className="inline-flex items-center rounded-2xl px-5 py-3 border font-semibold hover:bg-white">Quiero apoyar a mi club</a>
              </div>
            </div>
            <div className="rounded-3xl bg-white border p-6 shadow">
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square rounded-2xl bg-[#2F6D3A]/10 flex items-center justify-center"><CupSoda className="w-8 h-8 text-[#2F6D3A]"/></div>
                <div className="aspect-square rounded-2xl bg-[#2F6D3A]/10 flex items-center justify-center"><Package className="w-8 h-8 text-[#2F6D3A]"/></div>
                <div className="aspect-square rounded-2xl bg-[#2F6D3A]/10 flex items-center justify-center"><QrCode className="w-8 h-8 text-[#2F6D3A]"/></div>
                <div className="aspect-square rounded-2xl bg-[#2F6D3A]/10 flex items-center justify-center font-semibold">500 g</div>
                <div className="aspect-square rounded-2xl bg-[#2F6D3A]/10 flex items-center justify-center font-semibold">1 kg</div>
                <div className="aspect-square rounded-2xl bg-[#2F6D3A]/10 flex items-center justify-center font-semibold">Edición Club</div>
              </div>
              <p className="text-xs text-neutral-500 mt-3">Vista conceptual del catálogo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alegorías rotativas */}
      <section className="bg-[#1C1C1C] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-extrabold">El fútbol que jugamos todos</h3>
          <p className="mt-2 text-white/80">Frases que celebran el potrero, la tribuna sin rejas y las superficies mixtas.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {["La yerba de los cracks de estadios sin alambrados.", "La yerba de los que juegan en barro los sábados y en polvo los domingos.", "La yerba del potrero, donde la pelota pica distinto en cada metro."].map((t,i)=> (
              <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-extrabold text-center mb-12">Preguntas frecuentes</h3>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-2xl p-6">
                <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                <p className="text-neutral-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA de suscripción */}
      <section id="sumate" className="bg-white">
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <h3 className="text-2xl font-extrabold">Enterate primero</h3>
          <p className="mt-2 text-neutral-600">Lanzamiento, preventa y convocatoria a vendedores por catálogo.</p>
          <form onSubmit={(e)=>{e.preventDefault(); window.location.href = `mailto:hola@tribunera.ar?subject=Quiero%20sumarme%20a%20Tribunera&body=Mi%20email%20es%20${encodeURIComponent(email)}%20y%20quiero%20recibir%20novedades.`;}} className="mt-6 flex gap-2 justify-center">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="tu@email.com" className="w-full max-w-sm rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F6D3A]" />
            <button type="submit" className="rounded-2xl px-5 py-3 bg-[#E2B100] font-semibold text-[#1C1C1C] hover:brightness-95">Quiero sumarme</button>
          </form>
          <p className="text-xs text-neutral-500 mt-3">Al enviar tu email aceptás recibir novedades de Tribunera.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Logo Tribunera" className="w-10 h-10 rounded-lg object-cover" />
              <div className="text-xl font-extrabold">TRIBUNERA</div>
            </div>
            <p className="text-white/70 text-sm">Yerba mate que comparte tu pasión. Apoya al fútbol amateur con cada paquete.</p>
          </div>
          <div>
            <div className="font-semibold">Proyecto</div>
            <ul className="mt-2 space-y-2 text-sm text-white/80">
              <li><a href="#support-impact" className="hover:underline">Cómo funciona</a></li>
              <li><a href="#sumate" className="hover:underline">Sumate a la Red</a></li>
              <li><a href="#" className="hover:underline">Políticas y transparencia</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contacto</div>
            <ul className="mt-2 space-y-2 text-sm text-white/80">
              <li><a href="mailto:hola@tribunera.ar" className="hover:underline">hola@tribunera.ar</a></li>
              <li>Buenos Aires / Córdoba / Miami</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-white/60 text-xs">© {new Date().getFullYear()} Tribunera. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}

