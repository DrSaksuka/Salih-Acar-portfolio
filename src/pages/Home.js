import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';
export default function Home() {

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

                <div className="logo-wrapper">
                    <img
                        src={theme === 'dark' ? logoLight : logoDark}
                        alt="Salih Acar Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>

            </section>
        </motion.div>
    );
}