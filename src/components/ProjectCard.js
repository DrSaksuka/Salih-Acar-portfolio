import { motion } from "framer-motion";

export default function ProjectCard({ title, description, stack, image, link }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            whileHover={{ scale: 1.02 }}
            style={{
                background: "var(--card)",
                padding: 14,
                borderRadius: 12,
                minHeight: 160,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 8px 30px rgba(2,6,23,0.6)"
            }}
        >
            {image ? (
                <div style={{ height: 110, borderRadius: 8, overflow: "hidden", marginBottom: 10 }}>
                    <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            ) : null}

            <div>
                <h3 style={{ marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14 }}>{description}</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>{stack.join(" • ")}</div>
                {link ? <a href={link} target="_blank" rel="noreferrer" style={{ padding: "6px 12px", background: "var(--accent)", color: "#061018", borderRadius: 8, fontWeight: 800 }}>View</a> : null}
            </div>
        </motion.article>
    );
}
