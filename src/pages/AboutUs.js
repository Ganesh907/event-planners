import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20 text-gray-700">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#9c27b0] italic animate-fadeIn"
          style={{ fontFamily: "Playfair Display" }}
        >
          About HiFi Creations
        </h1>
        <p className="text-md md:text-lg mt-4 animate-fadeIn delay-200">
          At <span className="font-bold text-[#9c27b0]">HiFi Creations</span>, we transform dreams into reality. 
          Whether it's a joyous birthday, a stunning wedding, or a cozy baby shower, 
          we handle everything with creativity and care.
        </p>
      </div>

      {/* Categories Section */}
      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-[#9c27b0] mb-10 animate-fadeIn">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Birthday",
            "Baby Shower",
            "Ganapati Decoration",
            "Wedding Decoration",
            "Anniversary Celebration",
          ].map((category, index) => (
            <div
              key={category}
              className={`bg-white shadow-lg rounded-lg p-6 text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-slideUp delay-${index * 100}`}
            >
              <h3 className="text-lg font-semibold text-[#9c27b0]">
                {category}
              </h3>
              <p className="mt-2 text-sm">
                Creating memorable {category.toLowerCase()} experiences that last a lifetime.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-[#9c27b0] mb-10 animate-fadeIn">
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-10">
          {[
            {
              title: "Tailored Planning",
              description:
                "We design every event with your unique story and style in mind.",
            },
            {
              title: "Hassle-Free Coordination",
              description:
                "From start to finish, we ensure seamless coordination for a stress-free experience.",
            },
            {
              title: "Creative Designs",
              description:
                "Our team brings fresh, innovative ideas to bring your vision to life.",
            },
            {
              title: "Customer Satisfaction",
              description:
                "We prioritize your happiness and deliver beyond expectations every time.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`bg-white rounded-lg shadow-md p-6 flex-1 md:max-w-[48%] transform hover:scale-105 transition-transform duration-300 animate-slideUp delay-${
                100 + index * 100
              }`}
            >
              <h3 className="font-bold text-xl text-[#9c27b0]">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-10 rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Let Us Plan Your Next Event!
        </h2>
        <p className="text-md mt-3">
          Connect with us to start planning the event of your dreams.
        </p>
        <button className="bg-white text-[#9c27b0] font-semibold py-2 px-5 rounded-full mt-5 shadow-md hover:bg-gray-100 transition-all duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
