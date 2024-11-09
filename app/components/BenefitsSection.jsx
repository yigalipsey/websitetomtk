import { FaHeadset, FaMedal, FaTag } from "react-icons/fa";

export default function BenefitsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Availability */}
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="border border-black p-6 rounded-full flex items-center justify-center flex-shrink-0">
              <FaHeadset className="text-black text-3xl" />
            </div>
            <div className="ml-4 mt-4 md:mt-0">
              <h3 className="text-xl font-bold text-gray-600">
                24/7 Availability
              </h3>
              <p className="text-gray-600 text-lg">
                To meet all your furniture needs.
              </p>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="border border-black p-6 rounded-full flex items-center justify-center flex-shrink-0">
              <FaMedal className="text-black text-3xl" />
            </div>
            <div className="ml-4 mt-4 md:mt-0">
              <h3 className="text-xl font-bold text-gray-600">
                Quality Assurance
              </h3>
              <p className="text-gray-600 text-lg ">
                We are committed to high-quality materials.
              </p>
            </div>
          </div>

          {/* Affordable Pricing */}
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="border border-black p-6 rounded-full flex items-center justify-center flex-shrink-0">
              <FaTag className="text-black text-3xl" />
            </div>
            <div className="ml-4 mt-4 md:mt-0">
              <h3 className="text-xl font-bold text-gray-600">
                Affordable Pricing
              </h3>
              <p className="text-gray-600 text-lg ">
                For unquestionable furniture quality. Just for you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
