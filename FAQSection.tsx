import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Как получить заём под залог автомобиля?",
    a: "Всё просто: 1) Оставьте онлайн-заявку с телефоном. 2) Эксперт оценит автомобиль за 10 минут. 3) Подпишите договор. 4) Получите деньги на карту — обычно в течение часа. Автомобиль остаётся у вас.",
  },
  {
    q: "Заберёте ли вы мой автомобиль или ПТС?",
    a: "Нет. Вы продолжаете пользоваться автомобилем как обычно. ПТС остаётся у вас — мы оформляем залог, не изымая транспортное средство.",
  },
  {
    q: "Какая процентная ставка по займу?",
    a: "Ставка начинается от 6% в месяц и зависит от суммы, срока и состояния автомобиля. Досрочное погашение — без штрафов и переплат.",
  },
  {
    q: "Какую максимальную сумму можно получить?",
    a: "До 5 000 000 ₽ — итоговая сумма зависит от рыночной стоимости и состояния вашего автомобиля по результатам оценки.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-section-alt">
    <div className="container max-w-3xl">
      <motion.h2
        className="text-3xl lg:text-4xl font-heading font-bold text-center mb-14 neon-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Часто задаваемые вопросы
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="neon-card rounded-xl px-6">
            <AccordionTrigger className="font-heading font-semibold text-left">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
