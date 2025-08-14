import { createContext, useState, useEffect } from "react";

// 1️⃣ إنشاء الـ Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // 2️⃣ دالة التبديل
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // 3️⃣ إضافة/إزالة كلاس الـ dark على الـ body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    // 4️⃣ تمرير القيم لجميع الكومبوننتات
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
