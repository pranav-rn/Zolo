import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Student",
    content:
      "This AI companion has been a game-changer for managing my anxiety during exam periods. It's like having a supportive friend available 24/7.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Software Engineer",
    content:
      "The daily check-ins and mood tracking have helped me understand my stress patterns. The insights are surprisingly accurate and helpful.",
    rating: 5,
  },
  {
    name: "Emily T.",
    role: "Healthcare Professional",
    content:
      "As someone who helps others with mental health, I'm impressed by how this AI companion provides meaningful support while knowing when to escalate to human professionals.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who have found support and guidance
            through our AI companion.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
