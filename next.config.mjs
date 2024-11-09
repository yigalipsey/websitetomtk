/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // מאפשר לדלג על בדיקות ה-ESLint בזמן הבנייה
    ignoreDuringBuilds: true,
  },
  // הוסף שאר ההגדרות הנדרשות כאן
};

export default nextConfig;
