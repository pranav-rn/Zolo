import { MessageCircle, LineChart, Shield, Brain } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Voice & Text Chat",
    description:
      "Feels like talking to a friend. Natural conversations that understand and support you.",
  },
  {
    icon: LineChart,
    title: "Mood Tracking & Check-ins",
    description:
      "Understand your emotional patterns with intelligent mood tracking and regular check-ins.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your conversations stay yours with end-to-end encryption and strict privacy measures.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Get personalized insights and coping strategies based on your conversations and patterns.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Features that make a difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI companion combines cutting-edge technology with compassionate
            support to help you on your mental wellness journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-b from-blue-50 to-green-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
