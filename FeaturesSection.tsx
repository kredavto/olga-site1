import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Shield, Zap, Percent, FileText, RotateCcw } from "lucide-react";

const features = [
  { icon: TrendingUp, title: "Сумма займа", value: "до 5 млн ₽", desc: "В зависимости от стоимости автомобиля" },
  { icon: Shield, title: "Авто остаётся у вас", value: "ПТС не забираем", desc: "Продолжайте пользоваться машиной" },
  { icon: Zap, title: "Моментальное решение", value: "10 минут", desc: "Предварительное решение онлайн" },
  { icon: Percent, title: "Низкая ставка", value: "от 6%/мес", desc: "Выгоднее, чем в большинстве МФО" },
  { icon: FileText, title: "Минимум документов", value: "3 документа", desc: "Паспорт, ПТС, СТС — больше ничего не нужно" },
  { icon: RotateCcw, title: "Досрочное погашение", value: "Без штрафов", desc: "Закрывайте заём в любой момент" },
];

const FeaturesSection = () => {
  const navigate = useNavigate();
  return (
    <section id="features" className="py-20 bg-section-alt">
      <div className="container">
        <motion.h2
          className="text-3xl lg:text-4xl font-heading font-bold text-center mb-14 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Получите лучшие условия по займам под залог авто
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.button
              key={f.title}
              type="button"
              onClick={() => navigate("/register?role=borrower")}
              className="neon-card rounded-xl p-6 text-left cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <f.icon className="text-primary mb-4 drop-shadow-[0_0_8px_hsla(43,90%,60%,0.7)]" size={28} />
              <p className="text-sm text-muted-foreground mb-1">{f.title}</p>
              <p className="text-2xl font-heading font-bold text-primary neon-text mb-2">{f.value}</p>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
