import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="container" style={{ paddingTop: 28 }}>
            <h2>Hakkımda</h2>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>Bilgisayar programcılığı öğrencisiyim. C# ve React üzerinde çalışan projeler yapıyorum. Öğrenmeye ve yeni teknolojilere açığım.</p>
            <section style={{ marginTop: 20 }}>
                <h3>Yetenekler</h3>
                <ul style={{ color: "var(--muted)", marginTop: 8 }}>
                    <li>React, JavaScript, HTML, CSS</li>
                    <li>C# ve MSSQL</li>
                    <li>Responsive Tasarım, Git</li>
                </ul>
            </section>
        </motion.div>
    );
}
