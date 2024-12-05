/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // מאפשר לדלג על בדיקות ה-ESLint בזמן הבנייה
    ignoreDuringBuilds: true,
  },
  output: "export", // מאפשר יצירת אתר סטטי
  images: {
    unoptimized: true, // מבטל אופטימיזציית תמונות
  },
};

export default nextConfig;
