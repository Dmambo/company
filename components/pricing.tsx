import { Check } from "lucide-react";

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Basic",
            price: "$500",
            features: [
                "Custom Design",
                "Up to 5 Pages",
                "Responsive Layout",
                "Basic SEO",
                "1 Revision",
            ],
        },
        {
            title: "Standard",
            price: "$1,000",
            features: [
                "Custom Design",
                "Up to 10 Pages",
                "Responsive Layout",
                "Advanced SEO",
                "3 Revisions",
                "1 Year Free Maintenance",
            ],
        },
        {
            title: "Custom",
            price: "Contact Us",
            features: [
                "Tailored to Your Needs",
                "Unlimited Pages",
                "Responsive Layout",
                "Advanced SEO",
                "Unlimited Revisions",
                "Dedicated Support",
                "Advanced Integrations",
            ],
        },
        {
            title: "Premium",
            price: "$2,000",
            features: [
                "Custom Design",
                "Unlimited Pages",
                "Responsive Layout",
                "Advanced SEO",
                "Unlimited Revisions",
                "1 Year Free Maintenance",
                "E-commerce Integration",
            ],
        },
    ];

    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:bg-teal-50"
                        >
                            <div className="text-center">
                                <h3
                                    className={`text-xl font-semibold mb-4 ${
                                        plan.title === "Custom"
                                            ? "bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-green-700"
                                            : "text-green-700"
                                    }`}
                                >
                                    {plan.title}
                                </h3>
                                <div
                                    className={`text-gray-800 text-4xl font-bold mb-6 ${
                                        plan.title === "Custom" ? "text-3xl" : ""
                                    }`}
                                >
                                    {plan.price}
                                </div>
                            </div>
                            <ul className="text-gray-600 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="mb-2">
                                        <Check className="inline-block w-6 h-6 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-2 px-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors duration-300">
                                {plan.title === "Custom" ? "Contact Us" : "Get Started"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
