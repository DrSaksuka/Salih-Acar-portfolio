import { motion } from "framer-motion";

export default function Blog() {
    const posts = [
        { id: 1, title: "React ile Başlarken", excerpt: "React projesi oluşturmak için gerekenler ve ipuçları." },
        { id: 2, title: "C# - Temel Kavramlar", excerpt: "Nesne tabanlı programlamanın temelleri." }
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="container" style={{ paddingTop: 28 }}>
                <h2>Blog</h2>

                <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
                    {posts.map(p => (
                        <article key={p.id} style={{ background: "var(--card)", padding: 12, borderRadius: 8 }}>
                            <h4>{p.title}</h4>
                            <p style={{ color: "var(--muted)" }}>{p.excerpt}</p>
                        </article>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
