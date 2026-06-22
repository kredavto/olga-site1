import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/#" + id);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container flex items-center justify-between h-20">
        <div className="w-10 md:w-40" aria-hidden="true" />

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("features")} className="text-lg font-semibold text-muted-foreground hover:text-primary hover:neon-text transition-colors">
            Заёмщикам
          </button>
          <button onClick={() => navigate("/projects")} className="text-lg font-semibold text-muted-foreground hover:text-primary hover:neon-text transition-colors">
            Инвесторам
          </button>
          <button onClick={() => scrollTo("faq")} className="text-lg font-semibold text-muted-foreground hover:text-primary hover:neon-text transition-colors">
            О компании
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" onClick={() => navigate("/login")}>
            Войти
          </Button>
          <Button onClick={() => navigate("/register")}>
            Зарегистрироваться
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-3">
          <button onClick={() => scrollTo("features")} className="block text-sm font-medium py-2 w-full text-left">Заёмщикам</button>
          <button onClick={() => scrollTo("stats")} className="block text-sm font-medium py-2 w-full text-left">Инвесторам</button>
          <button onClick={() => scrollTo("faq")} className="block text-sm font-medium py-2 w-full text-left">О компании</button>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1" onClick={() => navigate("/login")}>Войти</Button>
            <Button className="flex-1" onClick={() => navigate("/register")}>Регистрация</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
