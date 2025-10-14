import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: 40, padding: "20px 0" }}>
            <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} Salih Acar</div>
                <div style={{ display: "flex", gap: 12 }}>
                    <a href="#" aria-label="Github"><FaGithub style={{ color: "var(--muted)" }} /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedin style={{ color: "var(--muted)" }} /></a>
                </div>
            </div>
        </footer>
    );
}
