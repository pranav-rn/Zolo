import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your AI Companion for
            <span className="text-blue-600"> Mental Wellness</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Private. Secure. Always here for you. Experience compassionate
            support through our AI-powered mental health companion.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-green-100/20 rounded-2xl"></div>
          <img
            src="/public/Zolo.png"
            alt="Mental wellness illustration"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
