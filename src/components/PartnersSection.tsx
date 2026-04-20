"use client";

import Image from "next/image";

const partners = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: i % 2 === 0 ? "/images/240-120.png" : "/images/logo.png",
  alt: `合作伙伴 ${i + 1}`,
}));

export default function PartnersSection() {
  return (
    <section className="custom-wrapper bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="public-title mb-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900">合作客户</h3>
          <p className="text-sm text-gray-500"></p>
        </div>

        <div className="custom-list grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="custom-item border border-[#f2f2f2] transition-shadow duration-300 hover:shadow-[0_0_8px_#ddd] hover:z-10 hover:relative"
            >
              <div className="pic p-5 flex justify-center items-center">
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
