import { Truck, ShieldCheck, HeadphonesIcon, CreditCard, IndianRupee } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "Above all Orders over 200rs.",
    },
    {
      icon: <IndianRupee className="h-8 w-8" />,
      title: "Money Guarantee",
      description: "45 days for Exchange",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Online Support",
      description: "24/7 Customer Care",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Flexible Payment",
      description: "Pay with multiple Credit Card",
    },
  ];

  return (
    <section className="lg:p-20 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center p-4 border rounded-lg">
              <div className="mr-4 text-black">{benefit.icon}</div>
              <div>
                <h3 className="font-medium">{benefit.title}</h3>
                <p className="text-sm text-gray-500">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
