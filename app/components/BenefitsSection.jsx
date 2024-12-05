import { FaTools, FaTruck, FaMedal, FaTag } from "react-icons/fa";

export default function BenefitsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tailor-made solutions */}
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="border border-black p-6 rounded-full flex items-center justify-center flex-shrink-0">
              <FaTools className="text-black text-3xl" />
            </div>
            <div className="ml-4 mt-4 md:mt-0">
              <h3 className="text-xl font-bold text-black">
                Tailor-made solutions
              </h3>
              <p className="text-black text-lg">
                Furniture that fits to your projects needs.
              </p>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="border border-black p-6 rounded-full flex items-center justify-center flex-shrink-0">
              <FaMedal className="text-black text-3xl" />
            </div>
            <div className="ml-4 mt-4 md:mt-0">
              <h3 className="text-xl font-bold text-black">
                Quality Assurance
              </h3>
              <p className="text-black text-lg">
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
              <h3 className="text-xl font-bold text-black">
                Affordable Pricing
              </h3>
              <p className="text-black text-lg">
                For unquestionable furniture quality. Just for you!
              </p>
            </div>
          </div>

          {/* All logistics are included */}
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="border border-black p-6 rounded-full flex items-center justify-center flex-shrink-0">
              <FaTruck className="text-black text-3xl" />
            </div>
            <div className="ml-4 mt-4 md:mt-0">
              <h3 className="text-xl font-bold text-black">
                All logistics are included
              </h3>
              <p className="text-black text-lg">
                From factory to your project location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
