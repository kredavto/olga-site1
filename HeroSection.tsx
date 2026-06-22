import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import LoanCalculator from "@/components/landing/LoanCalculator";

const HeroSection = () => {
  const [inn, setInn] = useState("");
  const navigate = useNavigate();
  const tiltRef = useRef<HTMLDivElement>(null);

  // Pointer-driven 3D parallax tilt for the registration card
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${px * 12}deg) rotateX(${-py * 12}deg) translateZ(20px)`;
  };
  const handleLeave = () => {
    const el = tiltRef.current;
    if (el) el.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(0)";
  };

  const submit = () => navigate("/register?role=borrower");

  return (
    <section id="hero" className="relative overflow-hidden py-16 lg:py-28">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/findrive-hero-logo.png"
            alt="«ФИНДРАЙВ» — займы под залог автомобилей"
            className="w-56 sm:w-64 lg:w-80 h-auto mb-6 drop-shadow-[0_0_24px_rgba(217,169,59,0.45)]"
          />
          <h1 className="text-4xl lg:text-6xl font-heading font-extrabold leading-tight mb-6 gold-shimmer">
            <span className="uppercase tracking-wide">«ФИНДРАЙВ»</span>
            <br />
            займы под залог автомобиля
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Получите деньги под залог автомобиля со ставкой от 6% в месяц.
            Авто остаётся у вас, ПТС не забираем. Предварительное решение
            за 10 минут онлайн.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Input
              placeholder="Ваш телефон"
              value={inn}
              onChange={(e) => setInn(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              className="max-w-xs neon-border bg-card/60"
            />
            <Button size="lg" onClick={submit} className="neon-glow-pulse">
              Подать заявку
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <button
              onClick={() => navigate("/projects")}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-6 h-6 rounded bg-accent flex items-center justify-center text-accent-foreground font-bold text-xs">₽</div>
              <span>Работаем по СПБ и Ленинградской области</span>
            </button>
            <button
              onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-6 h-6 rounded bg-accent flex items-center justify-center text-accent-foreground font-bold text-xs">1</div>
              <span>Первое место среди автоломбардов</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="scene-3d"
        >
          <div
            ref={tiltRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="tilt-3d"
          >
            <LoanCalculator id="calculator" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
