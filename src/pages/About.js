import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="container" style={{ paddingTop: 28 }}>
            <h2>Hakkımda</h2>
            <p style={{ color: "var(--muted)", marginTop: 8, lineHeight: '1.6' }}>Merhabalar Ben Salih Acar, 2003 yılında Konya'da doğdum, Anadolu lisesi çıkışlı olup, Konya Teknik Üniversitesi Bilgisayar Programcılığı mezunuyum. React, Flutter gibi frameworklar'da üst düzey bilgi sahibi olmakla birlikte PHP ve C# form ile yapmış olduğum projeler de vardır. Daha fazla bilgi için benimle iletişime geçmen gerekir dostum.</p>
            <section style={{ marginTop: 20 }}>
                <h3>Yetenekler</h3>
                <ul style={{ color: "var(--muted)", marginTop: 8 }}>
                    <li>React, Flutter, JavaScript, HTML, CSS</li>
                    <li>C# ve MSSQL</li>
                    <li>Responsive Tasarım, Git</li>
                </ul>
            </section>
        </motion.div>
    );
}
