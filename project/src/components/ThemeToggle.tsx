import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <motion.button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-2 rounded-full transition-colors duration-300 z-50
          ${theme === 'light' 
            ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' 
            : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
          }
          shadow-lg hover:shadow-xl`}
        aria-label="Toggle theme"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'light' ? 0 : 180 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          {theme === 'light' ? (
            <Moon className="w-6 h-6" />
          ) : (
            <Sun className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        <motion.div
          key={theme}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 100, opacity: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'fixed',
            top: '28px',
            right: '28px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: theme === 'light' ? '#f8fafc' : '#1e293b',
            zIndex: 40,
          }}
        />
      </AnimatePresence>
    </>
  );
}