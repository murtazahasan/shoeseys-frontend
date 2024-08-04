import React from "react";

function Benefits() {
  const benefits = [
    {
      icon: "free64.png",
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders within Karachi.",
    },
    {
      icon: "free64.png",
      title: "Exchange Available",
      description: "Easy exchange for faulty products.",
    },
    {
      icon: "free64.png",
      title: "Online Support",
      description: "Serving you 7 days a week.",
    },
    {
      icon: "free64.png",
      title: "Fast Delivery",
      description: "Rapid and reliable delivery.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
