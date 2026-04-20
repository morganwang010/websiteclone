"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { AngleLeftIcon, AngleRightIcon } from "@/components/icons";
import { Swiper as SwiperCore } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CaseItem {
  title: string;
  image: string;
}

const cases: CaseItem[] = [
  { title: "上海某某汽车有限公司_copy_copy_copy", image: "/images/idxcase3.jpg" },
  { title: "重庆某某汽车有限公司_copy_copy_copy", image: "/images/idxcase1.jpg" },
  { title: "北京某某汽车有限公司_copy_copy_copy", image: "/images/idxcase3.jpg" },
  { title: "上海某某汽车有限公司_copy_copy", image: "/images/idxcase1.jpg" },
  { title: "重庆某某汽车有限公司_copy_copy", image: "/images/idxcase2.jpg" },
  { title: "上海某某汽车有限公司_copy_copy_copy", image: "/images/idxcase1.jpg" },
];

export default function ServiceCasesSection() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperRef.current && !swiperInstance.current) {
      swiperInstance.current = new SwiperCore(swiperRef.current, {
        modules: [Navigation, Autoplay],
        slidesPerView: 3, // 🔥 一次显示3个
        spaceBetween: 24, // 间距
        loop: true, // 🔥 循环滚动
        speed: 600, // 滚动速度
        autoplay: {
          delay: 3000, // 🔥 停留3秒
          disableOnInteraction: false, // 操作后继续自动播放
          reverseDirection: false, // 🔥 向左滚动
        },
        navigation: {
          prevEl: ".case-prev",
          nextEl: ".case-next",
        },
        // 响应式：移动端自动适配显示1-2个
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    }

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
        swiperInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="case-wrapper bg-white py-16">
      <div className="container-custom relative mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="public-title">
            <h3 className="text-2xl font-bold text-gray-900">服务案例</h3>
            <p className="text-sm text-gray-500">service case</p>
          </div>
          <a href="/fuwuanli" className="public-more text-sm font-medium text-[#2460f2] hover:underline">
            MORE
          </a>
        </div>

        <div className="relative">
          {/* Swiper 容器 */}
          <div ref={swiperRef} className="swiper case-swiper overflow-hidden">
            <ul className="swiper-wrapper list-none p-0 m-0">
              {cases.map((item, index) => (
                <li 
                  key={index} 
                  className="swiper-slide rounded-xl overflow-hidden flex-shrink-0 group"
                >
                  <a
                    href={`/fuwuanli/${index + 590}.html`}
                    className="block"
                  >
                    <div className="swiper-slide-img overflow-hidden rounded-xl relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={300}
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="case-content-wrapper mt-[-50px] mx-8 relative bg-white rounded-lg shadow-lg p-6 transition-all duration-300 group-hover:bg-[#2460f2]">
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 左右箭头 */}
          <button 
            className="case-prev absolute top-1/2 -translate-y-1/2 -left-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-[#2460f2] transition-colors"
          >
            <AngleLeftIcon />
          </button>
          
          <button 
            className="case-next absolute top-1/2 -translate-y-1/2 -right-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-[#2460f2] transition-colors"
          >
            <AngleRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}