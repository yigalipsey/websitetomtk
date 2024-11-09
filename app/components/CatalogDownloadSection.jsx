"use client";
import React, { useState } from "react";
import catalogImage1 from "../../public/images/rt1.jpg"; // עדכן את הנתיב של התמונה הראשונה
import catalogImage2 from "../../public/images/rt2.jpg"; // עדכן את הנתיב של התמונה השנייה
import Image from "next/image";

const CatalogDownloadSection = () => {
  const [loadingCatalog, setLoadingCatalog] = useState(null);

  const handleDownloadClick = (url, catalogNumber) => {
    if (loadingCatalog === null) {
      setLoadingCatalog(catalogNumber);
    }
    setTimeout(() => {
      window.location.href = url;
      setLoadingCatalog(null);
    }, 6500); // הזמן שבו ה-loader מוצג
  };

  return (
    <section
      id="catalogs"
      className="relative p-10 w-4/5 z-20 mx-auto text-center scroll-mt-20 rounded-lg mt-10 shadow-2xl"
    >
      {/* שכבת הרקע עם שקיפות */}
      <div className="absolute inset-0 bg-[url('/images/shaish.svg')] bg-cover bg-center opacity-10"></div>

      {/* תוכן הקומפוננטה */}
      <div className="relative z-10">
        <div className="max-w-96 mx-auto">
          <div>
            <h2 className="text-4xl font-extrabold text-center  text-[#9e795c] -mb-6 font-faculty">
              Our
            </h2>
          </div>
          <div className="mt-2">
            <h2 className="text-4xl font-extrabold text-center text-black mb-6 font-faculty">
              Catalogs
            </h2>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-6 font-libre">
          Discover our high-quality furniture solutions. Download our full
          catalog to explore more.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* תמונה וכפתור הורדה לקטלוג 1 */}
          <div className="flex flex-col items-center">
            <Image
              src={catalogImage1}
              alt="Catalog 1"
              className="w-[250px] h-[250px] rounded-xl"
            />
            <button
              onClick={() =>
                handleDownloadClick(
                  "https://drive.google.com/uc?export=download&id=1ju7NBFfFGkLKCGBlKb5D3JucgaKqaIuq",
                  1
                )
              }
              className={`mt-4 px-8 py-3 rounded-lg transition duration-300 flex items-center border-2 ${
                loadingCatalog === 1
                  ? "border-[#9e795c] text-[#9e795c] bg-white"
                  : "border-[#9e795c] text-[#9e795c] bg-white hover:bg-[#f5f5f5]"
              }`}
              disabled={loadingCatalog !== null && loadingCatalog !== 1}
            >
              {loadingCatalog === 1 && (
                <div className="w-4 h-4 border-4 border-t-[#9e795c] border-[#e0c4b2] rounded-full animate-spin mr-2"></div>
              )}
              Download Catalog 1
            </button>
          </div>

          {/* תמונה וכפתור הורדה לקטלוג 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={catalogImage2}
              alt="Catalog 2"
              className="w-[250px] h-[250px] rounded-xl"
            />
            <button
              onClick={() =>
                handleDownloadClick(
                  "https://drive.google.com/uc?export=download&id=1Bmgb_NCxF3vT62nwtYtdsXymkEbe7rxW",
                  2
                )
              }
              className={`mt-4 px-8 py-3 rounded-lg transition duration-300 flex items-center border-2 ${
                loadingCatalog === 2
                  ? "border-[#9e795c] text-[#9e795c] bg-white"
                  : "border-[#9e795c] text-[#9e795c] bg-white hover:bg-[#f5f5f5]"
              }`}
              disabled={loadingCatalog !== null && loadingCatalog !== 2}
            >
              {loadingCatalog === 2 && (
                <div className="w-4 h-4 border-4 border-t-[#9e795c] border-[#e0c4b2] rounded-full animate-spin mr-2"></div>
              )}
              Download Catalog 2
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogDownloadSection;
