import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("(Demo) Form gönderildi:\n" + JSON.stringify(form, null, 2));
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ paddingTop: 28 }}
        >
            <h2>İletişim</h2>
            <form
                onSubmit={handleSubmit}
                style={{
                    marginTop: 12,
                    maxWidth: 600,
                    display: "grid",
                    gap: 12,
                }}
            >
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Adınız"
                    style={{
                        padding: 10,
                        borderRadius: 8,
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "transparent",
                        color: "var(--text)",
                    }}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="E-posta"
                    style={{
                        padding: 10,
                        borderRadius: 8,
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "transparent",
                        color: "var(--text)",
                    }}
                    required
                />
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Mesajınız"
                    rows={6}
                    style={{
                        padding: 10,
                        borderRadius: 8,
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "transparent",
                        color: "var(--text)",
                    }}
                    required
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px 14px",
                        borderRadius: 8,
                        background: "var(--accent)",
                        color: "#061018",
                        fontWeight: 700,
                        cursor: "pointer",
                    }}
                >
                    Gönder (demo)
                </button>
            </form>
        </motion.div>
    );
}
