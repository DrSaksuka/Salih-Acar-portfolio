import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/data/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => {
                // fallback: import from src/data if fetch blocked (dev)
                import("../data/projects.json").then(m => setProjects(m.default || m));
            });
    }, []);

    return (
        <div className="container" style={{ paddingTop: 28 }}>
            <h2>Projeler</h2>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>Bazı örnek projelerim:</p>

            <motion.div layout style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
                gap: 16,
                marginTop: 16
            }}>
                <AnimatePresence>
                    {projects.map(p => (
                        <ProjectCard key={p.id} {...p} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
