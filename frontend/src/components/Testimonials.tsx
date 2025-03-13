import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Shreya Ghosh",
    role: "Psychology Professor",
    content:
      "One of the biggest issue as a psychologist is to get people to open up. Sometimes, building a rapport may even take a year. This AI companion has been able to do that in a matter of weeks.",
    rating: 5,
  },
  {
    name: "Dr. Sampurna",
    role: "Doctor",
    content:
      "I have seen a lot of cases where a matter of a week's gap between appointments can be the difference between life and death. This AI companion has been able to provide immediate support to those in need.",
    rating: 5,
  },
  {
    name: "Shivani",
    role: "Student",
    content:
      "Being a person who has personally gone through mental health issues, I can say one of the biggest issue is not finding a compatible therapist. This AI companion has been able to provide me with the support I need and also provided me with a list of therapists who I can reach out to.",
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
