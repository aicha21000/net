'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 rounded-full text-gray-500 bg-gray-100">
                <Sun size={20} className="invisible" />
            </button>
        ); // Avoid hydration mismatch
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full text-foreground hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? (
                    <Moon size={20} className="text-blue-400" />
                ) : (
                    <Sun size={20} className="text-yellow-500" />
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
