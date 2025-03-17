import React from "react";
import NewsLetter from "../assets/IMG/NewsLetter.webp";
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-3xl font-semibold text-center pt-8 border-t border-gray-300">
        <h3 className="text-gray-900">About Us</h3>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] mx-auto"
          src={NewsLetter}
          alt="Newsletter Image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>
            Welcome! Your ultimate destination for the latest in tech
            innovation. We offer a wide range of high-quality gadgets, electronics,
            and accessories designed to enhance your lifestyle. Shop with confidence
            and stay ahead with cutting-edge products at unbeatable prices.
          </p>
          <p>
            At E-Commerce, we are passionate about bringing you the best in
            technology. From smartphones to smart home devices, we provide a
            seamless shopping experience with top-notch customer service. Explore
            our collection and discover the future of tech, delivered to your door.
          </p>
          <b className="text-gray-900">Our Mission</b>
          <p>
            Our passion lies in bringing the latest and most innovative technology
            to your fingertips. We believe in the power of technology to transform
            everyday life, making it more efficient, enjoyable, and connected. From
            cutting-edge gadgets to essential accessories, we’re dedicated to
            offering products that enhance your lifestyle. Our team is committed to
            providing an exceptional shopping experience, ensuring quality, value,
            and customer satisfaction with every purchase. We’re here to help you
            stay ahead of the curve and discover the future of technology today.
          </p>
        </div>
      </div>

      <div className="text-2xl font-semibold text-center py-4 text-gray-900">
        <h3>Choose Us</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="border border-gray-300 rounded-lg px-6 py-6 flex flex-col gap-5 shadow-md hover:shadow-lg transition-all duration-300">
          <b className="text-gray-900">Security Policy:</b>
          <p className="text-gray-600">
            We prioritize the security of your personal data with industry-standard
            encryption and regular system updates. Your privacy and safety are our
            top concern.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg px-6 py-6 flex flex-col gap-5 shadow-md hover:shadow-lg transition-all duration-300">
          <b className="text-gray-900">Maintenance Policy:</b>
          <p className="text-gray-600">
            Our website undergoes regular maintenance to improve performance and
            security. We will notify you in advance about any planned downtime.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg px-6 py-6 flex flex-col gap-5 shadow-md hover:shadow-lg transition-all duration-300">
          <b className="text-gray-900">Pricing Policy:</b>
          <p className="text-gray-600">
            We offer transparent pricing with no hidden fees. Prices may change
            based on stock, location, or promotions.
          </p>
        </div>
      </div>
      
      <NewsLetterBox />
    </div>
  );
};

export default About;
