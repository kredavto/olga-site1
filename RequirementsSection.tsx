import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const requirements = [
  { label: "Кому выдаём", value: "Гражданам РФ от 18 лет" },
  { label: "Что принимаем в залог", value: "Легковые авто, не старше 20 лет" },
  { label: "Документы", value: "Паспорт, ПТС, СТС" },
  { label: "Состояние авто", value: "На ходу, без серьёзных повреждений" },
  { label: "Регистрация авто", value: "Любой регион РФ" },
  { label: "Кредитная история", value: "Не имеет значения" },
];

const RequirementsSection = () => {
  const navigate = useNavigate();
  return (
    <section id="requirements" className="py-20">
      <div className="container max-w-4xl">
        <motion.h2
          className="text-3xl lg:text-4xl font-heading font-bold text-center mb-14 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Условия и требования
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {requirements.map((r, i) => (
            <motion.button
              key={r.label}
              type="button"
              onClick={() => navigate("/register?role=borrower")}
              className="neon-card rounded-xl p-5 text-left cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p className="text-sm text-muted-foreground mb-1">{r.label}</p>
              <p className="font-heading font-semibold text-primary">{r.value}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
