// src/components/Footer.js dosyasının yeni hali

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Phone } from "lucide-react"; // Telefon ikonu için

export default function Footer() {
    // Senin linklerin ve telefon numaran
    const githubUrl = "https://github.com/DrSaksuka/Flutter-projelerim";
    const linkedinUrl = "https://www.linkedin.com/in/salih-acar-ab178a383/";
    const phoneNumber = "+90 531 331 8228";

    return (
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: 40, padding: "20px 0" }}>
            <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
                {/* Telif Hakkı */}
                <div style={{ color: "var(--muted)", fontSize: "14px" }}>© {new Date().getFullYear()} Salih Acar</div>

                {/* Telefon Numarası */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--muted)", fontSize: "14px" }}>
                    <Phone size={16} />
                    <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} style={{ color: "var(--muted)", textDecoration: 'none' }}>{phoneNumber}</a>
                </div>

                {/* Sosyal Medya İkonları */}
                <div style={{ display: "flex", gap: 16 }}> {/* İkonlar arası boşluğu biraz artırdık */}
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <FaGithub style={{ color: "var(--muted)", fontSize: "22px", display: 'block' }} /> {/* Boyutu biraz artırdık ve display block */}
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin style={{ color: "var(--muted)", fontSize: "22px", display: 'block' }} /> {/* Boyutu biraz artırdık ve display block */}
                    </a>
                </div>
            </div>
        </footer>
    );
}