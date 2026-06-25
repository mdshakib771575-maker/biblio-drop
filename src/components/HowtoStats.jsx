//     "use client";

// import { Card } from "@heroui/react";
// import { Search, Truck, CheckCircle2 } from "lucide-react";

// const steps = [
//   {
//     number: "01",
//     title: "Browse & Select",
//     description:
//       "Search across 200K+ titles from libraries near you. Filter by genre, author, or availability.",
//     icon: Search,
//   },
//   {
//     number: "02",
//     title: "Request Delivery",
//     description:
//       "Choose a delivery slot. Our librarians will carefully pack and dispatch your book.",
//     icon: Truck,
//   },
//   {
//     number: "03",
//     title: "Read & Return",
//     description:
//       "Enjoy your book at your own pace. Schedule a free pickup when you're done.",
//     icon: CheckCircle2,
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section className="py-24 bg-[#f8f6fc]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <p className="uppercase tracking-[4px] text-violet-600 font-semibold mb-4">
//             Simple & Fast
//           </p>

//           <h2 className="text-5xl md:text-6xl font-bold text-[#1a1238]">
//             How BookNest Works
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {steps.map((step) => {
//             const Icon = step.icon;

//             return (
//               <Card
//                 key={step.number}
//                 className="relative rounded-[36px] border border-violet-100 bg-white p-12 shadow-sm hover:-translate-y-2 transition-all duration-300"
//               >
//                 {/* Background Number */}
//                 <span className="absolute top-10 left-12 text-8xl font-bold text-violet-100">
//                   {step.number}
//                 </span>

//                 <div className="relative z-10 pt-24">
//                   {/* Icon */}
//                   <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-300 mb-10">
//                     <Icon className="w-9 h-9 text-white" />
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-4xl font-bold text-[#1a1238] mb-6">
//                     {step.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-xl leading-10 text-gray-500">
//                     {step.description}
//                   </p>
//                 </div>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }