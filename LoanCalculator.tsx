import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface LoanCalculatorProps {
  className?: string;
  id?: string;
}

const LoanCalculator = ({ className, id }: LoanCalculatorProps) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(500_000);
  const [months, setMonths] = useState(12);
  // Процентная ставка в месяц: от 6% до 8% с шагом 0.5%
  const [rate, setRate] = useState(6);

  const { monthly, probability } = useMemo(() => {
    const monthlyRate = rate / 100;
    const m = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    return { monthly: Math.round(m), probability: 95 };
  }, [amount, months, rate]);

  const fmt = (n: number) => n.toLocaleString("ru-RU");

  return (
    <div id={id} className={`neon-card rounded-2xl p-8 ${className ?? ""}`}>
      <h3 className="text-3xl lg:text-4xl font-heading font-extrabold leading-tight mb-6 neon-text">
        Калькулятор займа под залог авто
      </h3>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium mb-1 block">Желаемая сумма займа</label>
          <p className="text-xl font-heading font-bold mb-2">{fmt(amount)} ₽</p>
          <Slider value={[amount]} onValueChange={(v) => setAmount(v[0])} min={50_000} max={5_000_000} step={50_000} />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Желаемый срок займа</label>
          <p className="text-xl font-heading font-bold mb-2">{months} месяцев</p>
          <Slider value={[months]} onValueChange={(v) => setMonths(v[0])} min={1} max={12} step={1} />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Процентная ставка</label>
          <p className="text-xl font-heading font-bold mb-2 text-primary">{rate.toLocaleString("ru-RU")}% в месяц</p>
          <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={6} max={8} step={0.5} />
        </div>

        <div className="flex items-center justify-between border-t border-border/50 pt-4">
          <div>
            <p className="text-sm text-muted-foreground">Ежемесячный платеж</p>
            <p className="text-2xl font-heading font-bold">{fmt(monthly)} ₽</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Одобрение</p>
            <p className="text-2xl font-heading font-bold">{probability}%</p>
          </div>
        </div>
      </div>

      <Button size="lg" className="w-full neon-glow-pulse mt-6" onClick={() => navigate("/register?role=borrower")}>
        Подать заявку на заём
      </Button>
    </div>
  );
};

export default LoanCalculator;
