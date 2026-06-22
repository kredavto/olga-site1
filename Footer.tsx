import { useNavigate, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/#" + id);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-stats border-t border-primary/20 py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <Logo size="md" />
          </div>
          <p className="text-sm text-muted-foreground">
            «ФИНДРАЙВ» — быстрые займы под залог автомобилей. Деньги за час,
            авто остаётся у вас.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-primary neon-text">Заёмщикам</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><button onClick={() => scrollTo("features")} className="hover:text-primary transition-colors">Займы под залог авто</button></li>
            <li><button onClick={() => scrollTo("requirements")} className="hover:text-primary transition-colors">Условия</button></li>
            <li><button onClick={() => scrollTo("calculator")} className="hover:text-primary transition-colors">Калькулятор</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-primary neon-text">О компании</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><button onClick={() => navigate("/register?role=borrower")} className="hover:text-primary transition-colors">Подать заявку</button></li>
            <li><button onClick={() => scrollTo("stats")} className="hover:text-primary transition-colors">«ФИНДРАЙВ» в цифрах</button></li>
            <li><button onClick={() => scrollTo("faq")} className="hover:text-primary transition-colors">Вопросы и ответы</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-primary neon-text">Контакты</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:findrive78@yandex.ru" className="hover:text-primary transition-colors">findrive78@yandex.ru</a></li>
            <li><a href="tel:+79219888880" className="hover:text-primary transition-colors">8 (921) 988-88-80</a></li>
            <li>Санкт-Петербург, Россия</li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-primary/10 text-sm text-muted-foreground/60 text-center">
        © {new Date().getFullYear()} «ФИНДРАЙВ». Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
