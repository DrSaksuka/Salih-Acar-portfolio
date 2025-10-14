import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

// 1. Gerekli kütüphaneleri ve logoları import ediyoruz
import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';
import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';
const linkStyle = isActive => ({
    marginRight: 12,
    padding: "8px 10px",
    borderRadius: 8,
    textDecoration: "none",
    background: isActive ? "var(--accent)" : "transparent",
    color: isActive ? "#061018" : "var(--text)",
    fontWeight: 700
});

export default function Navbar() {
    // 2. Context'ten mevcut tema durumunu alıyoruz ('dark' veya 'light')
    const { theme } = useContext(ThemeContext);

    return (
        <header style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>

                    {/* 3. Temaya göre hangi logonun gösterileceğini belirliyoruz */}
                    {/* Navbar.js'deki yeni logo yapısı */}
                    <div className="navbar-logo-wrapper">
                        <img
                            src={theme === 'dark' ? logoLight : logoDark}
                            alt="Site Logosu"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>

                    <div>
                        <div style={{ fontWeight: 800 }}>Salih Acar</div>
                        <div style={{ fontSize: 12, color: "var(--muted)" }}>Frontend Developer</div>
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <NavLink to="/" end style={({ isActive }) => linkStyle(isActive)}>Home</NavLink>
                    <NavLink to="/about" style={({ isActive }) => linkStyle(isActive)}>About</NavLink>
                    <NavLink to="/projects" style={({ isActive }) => linkStyle(isActive)}>Projects</NavLink>
                    <NavLink to="/blog" style={({ isActive }) => linkStyle(isActive)}>Blog</NavLink>
                    <NavLink to="/contact" style={({ isActive }) => linkStyle(isActive)}>Contact</NavLink>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}