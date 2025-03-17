import React from "react";
import ContactIMG from "../assets/IMG/ContactIMG.jpg";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Başlık */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-800">
          Get in Touch
        </h1>
        <p className="text-gray-600 mt-4 text-lg">We'd love to hear from you!</p>
      </div>

      {/* İçerik ve Görsel */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        {/* Görsel */}
        <div className="flex-1 max-w-lg mx-auto">
          <img
            src={ContactIMG}
            alt="Contact"
            className="w-full h-auto rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300"
          />
        </div>

        {/* İletişim Bilgileri */}
        <div className="flex-1 max-w-xl mx-auto space-y-8">
          <div>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-700">Our Store</p>
            <p className="text-gray-700 mt-2">
              We are located in the heart of the city, providing the best products and services.
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-700">Contact Information</p>
            <p className="text-gray-700 mt-2">
              <strong>Phone:</strong> (999) 555-5555
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> lorem@example.com
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-700">Operating Hours</p>
            <p className="text-gray-700 mt-2">Services are available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
