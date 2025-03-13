import { MessageSquare, LineChart, Users, Heart } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Chat with AI Companion",
    description:
      "Start a conversation with our empathetic AI companion anytime, anywhere.",
  },
  {
    icon: LineChart,
    title: "Track Your Progress",
    description:
      "Monitor your mood patterns and receive personalized insights.",
  },
  {
    icon: Users,
    title: "Professional Support",
    description: "Get connected with licensed therapists when needed.",
  },
  {
    icon: Heart,
    title: "Continue Your Journey",
    description:
      "Build healthy mental habits with ongoing support and guidance.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to better mental health is just four simple steps away.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="p-6 rounded-xl bg-gradient-to-b from-blue-50 to-green-50 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
