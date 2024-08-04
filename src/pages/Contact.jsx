import React, { useState } from "react";

function Contact() {
  const [accordionData, setAccordionData] = useState([
    {
      title: "Refund Policy",
      content:
        "We're committed to your satisfaction. While we don't offer cash refunds, we're happy to exchange products if there's an issue. For example, if you receive the wrong size, we'll happily exchange it for the correct one.  If you encounter a problem with your order, such as incorrect size or damaged items, please immediately inspect your package upon delivery. If there's an issue, capture clear photos of the problem and message us at our whatsapp number right away. Don't accept the package if it's significantly damaged or missing items. We'll work with you to find a suitable solution, which may include a replacement or exchange.",
    },
    {
      title: "How to Contact Us?",
      content: (
        <div className="flex flex-col space-y-2">
          <p>
            We're here to help! You can reach us through the following methods:
          </p>
          <ul className="list-disc pl-4">
            <li className="text-gray-700">WhatsApp: 12344567</li>
            <li className="text-gray-700">Email: abc@gmail.com</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Do You Deliver All Over pakistan?",
      content:
        "We currently offer delivery services within Karachi, Pakistan. However, we are excited to announce that we are actively working on expanding our delivery network to other cities across Pakistan. Stay tuned for updates on our progress!",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (index) => {
    setIsOpen(isOpen === index ? -1 : index);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
        <p className="text-xl text-center text-gray-700 mb-10">
          Have any questions or need assistance? Reach out to us through your
          preferred channel:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center p-4 border rounded-md shadow-md hover:shadow-lg">
            <img
              className="w-8 h-8 mr-4"
              src="/whatsapp36.png"
              alt="WhatsApp us"
            />
            <div className="flex-grow">
              <span className="text-lg font-semibold">WhatsApp us at:</span>
              <a
                href="https://wa.me/12345678911"
                className="text-blue-500 ml-1 hover:underline"
              >
                123-45678911
              </a>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-md shadow-md hover:shadow-lg">
            <img
              className="w-8 h-8 mr-4"
              src="/instagram36.png"
              alt="DM us on Instagram"
            />
            <div className="flex-grow">
              <span className="text-lg font-semibold">DM us on Instagram:</span>
              <a
                href="https://www.instagram.com/shoeseys/"
                className="text-blue-500 ml-1 hover:underline"
              >
                Shoeseys
              </a>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-md shadow-md hover:shadow-lg">
            <img
              className="w-8 h-8 mr-4"
              src="/gmail36.png"
              alt="Email us at"
            />
            <div className="flex-grow">
              <span className="text-lg font-semibold">Email us at:</span>
              <a
                href="mailto:abc@gmail.com"
                className="text-blue-500 ml-1 hover:underline"
              >
                abc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-36">
        <h1 className="font-bold text-center text-3xl mt-16 mb-10">
          Frequently Asked Questions
        </h1>
        {accordionData.map((item, index) => (
          <div key={item.title} className="border-b border-gray-200">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full p-4 focus:outline-none"
            >
              <span>{item.title}</span>
              <svg
                className={`w-4 h-4 transition transform duration-300 ${
                  index === isOpen ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 1.414L10 10.586l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {index === isOpen && (
              <div className="p-4 bg-gray-100">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Contact;
