import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "1 млрд ₽", label: "Выдано займов под залог авто" },
  { value: "3 520", label: "Автомобилей принято в залог" },
  { value: "60 минут", label: "Среднее время выдачи денег" },
  { value: "98%", label: "Заявок получают одобрение" },
  { value: "5 млн ₽", label: "Максимальная сумма займа" },
  { value: "6%", label: "Минимальная ставка в месяц" },
];

const StatsSection = () => {
  const navigate = useNavigate();
  return (
    <section id="stats" className="py-20 bg-stats">
      <div className="container">
        <motion.h2
          className="text-3xl lg:text-4xl font-heading font-bold text-center mb-14 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          «ФИНДРАЙВ» в цифрах
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.button
              key={s.label}
              type="button"
              onClick={() => navigate("/register?role=borrower")}
              className="text-center rounded-xl p-4 cursor-pointer transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-3xl lg:text-4xl font-heading font-bold text-primary neon-text mb-2">{s.value}</p>
              <p className="text-sm opacity-60">{s.label}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
