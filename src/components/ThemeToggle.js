import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react"; // 1. useContext'i import edin
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext"; // 2. Context'i import edin

export default function ThemeToggle() {
    // 3. Kendi state'inizi silin ve context'ten gelenleri alın
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <button
            onClick={toggle} // 4. Butonun onClick event'ine context'ten gelen toggle fonksiyonunu verin
            style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? ( // 5. 'darkMode' state'i yerine 'theme' context değerini kontrol edin
                    <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Moon size={22} color="white" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Sun size={22} color="black" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}