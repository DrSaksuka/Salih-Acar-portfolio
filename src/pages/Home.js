import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 1. Gerekli kütüphaneleri ve logoları import ediyoruz
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logoDark from '../assets/logo-dark.png'; // Siyah logo
import logoLight from '../assets/logo-light.png'; // Beyaz logo

export default function Home() {
    // 2. Context'ten mevcut tema durumunu alıyoruz
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="container" style={{ paddingTop: 28 }}>
            <section style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 260 }}>
                    <h1 style={{ fontSize: 34, marginBottom: 8 }}>Merhaba, ben Salih Acar</h1>
                    <p style={{ color: "var(--muted)", marginBottom: 16 }}>Frontend geliştiricisiyim. React ile modern, hızlı ve erişilebilir arayüzler geliştiriyorum.</p>
                    <Link to="/projects" style={{ padding: "10px 14px", background: "var(--accent)", color: "#061018", borderRadius: 8, fontWeight: 800 }}>Projelerimi Gör</Link>
                </div>

                {/* 3. Temaya göre hangi logonun gösterileceğini belirliyoruz */}
                <img
                    src={theme === 'dark' ? logoLight : logoDark}
                    alt="Salih Acar Logo"
                    style={{ width: 220, height: 220, objectFit: 'contain' }}
                />

            </section>
        </motion.div>
    );
}