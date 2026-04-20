"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ServiceCasesSection from "@/components/ServiceCasesSection";
import { AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "企业数字化门户系统",
    subtitle: "助力从业者更好地定制策略和实现数字化转型升级，迎接时代浪潮！",
    image: "/images/banner1.jpg",
    link: "#",
  },
  {
    title: "轮播图片支持使用视频",
    subtitle: "智能VR眼镜，科技改变生活",
    video: "/videos/banner-video.mp4",
    poster: "/images/banner1.jpg",
    link: "#",
  },
  {
    title: "AI人工智能",
    subtitle: "助力从业者更好地定制策略和实现数字化转型升级，迎接时代浪潮！",
    image: "/images/banner2.jpg",
    link: "#",
  },
];

const products = [
  { id: 692, title: "xx手机16系列_copy_copy_copy", image: "/images/pro5.jpg", price: "5999.00", href: "/chanpinxilie1/692.html" },
  { id: 685, title: "xx手机16系列_copy", image: "/images/pro2.jpg", price: "5999.00", href: "/chanpinxilie1/685.html" },
  { id: 687, title: "xx手机16系列_copy_copy", image: "/images/pro5.jpg", price: "5999.00", href: "/chanpinxilie1/687.html" },
  { id: 694, title: "xx手机16系列_copy_copy", image: "/images/pro3.jpg", price: "5999.00", href: "/chanpinxilie1/694.html" },
  { id: 693, title: "xx手机16系列_copy_copy", image: "/images/395x400.png", price: "5999.00", href: "/chanpinxilie1/693.html" },
  { id: 688, title: "xx手机16系列_copy", image: "/images/pro2.jpg", price: "5999.00", href: "/chanpinxilie2/690.html" },
  { id: 689, title: "xx手机16系列_copy_copy", image: "/images/395x400.png", price: "5999.00", href: "/chanpinxilie1/688.html" },
  { id: 686, title: "xx手机16系列_copy", image: "/images/pro4.jpg", price: "5999.00", href: "/chanpinxilie1/686.html" },
];

const cases = [
  { title: "上海某某汽车有限公司_copy_copy_copy", image: "/images/idxcase3.jpg", href: "/fuwuanli/597.html" },
  { title: "重庆某某汽车有限公司_copy_copy_copy", image: "/images/idxcase1.jpg", href: "/fuwuanli/596.html" },
  { title: "北京某某汽车有限公司_copy_copy_copy", image: "/images/idxcase3.jpg", href: "/fuwuanli/595.html" },
  { title: "上海某某汽车有限公司_copy_copy", image: "/images/idxcase1.jpg", href: "/fuwuanli/594.html" },
  { title: "重庆某某汽车有限公司_copy_copy", image: "/images/idxcase2.jpg", href: "/fuwuanli/593.html" },
  { title: "上海某某汽车有限公司_copy_copy_copy", image: "/images/idxcase1.jpg", href: "/fuwuanli/592.html" },
];

const newsItems = [
  { title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy_copy", image: "/images/b4.jpeg", date: "2022-09-02", views: 452, href: "/hangyezixun/625.html" },
  { title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy", image: "/images/b3.jpeg", date: "2022-09-02", views: 630, href: "/hangyezixun/624.html" },
  { title: "WBE世界电池展圆满落幕 | 感恩遇见，期待��聚_copy_copy_copy", image: "/images/b2.jpeg", date: "2022-09-02", views: 591, href: "/hangyezixun/623.html" },
  { title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy_copy", image: "/images/b1.jpeg", date: "2022-09-02", views: 412, href: "/hangyezixun/622.html" },
  { title: "复制文档到网站后台,怎么样才能清除格式", image: "/images/b5.jpeg", date: "2022-09-02", views: 631, href: "/gongsixinwen/359.html" },
  { title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy", image: "/images/b4.jpeg", date: "2022-09-02", views: 679, href: "/gongsixinwen/358.html" },
];

const partners = Array(12).fill("/images/logo.png");

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const casesSwiperRef = useRef<HTMLDivElement>(null);
  const casesSwiperInstance = useRef<Swiper | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Initialize Swiper for cases (home) using the Swiper class
  useEffect(() => {
    if (casesSwiperRef.current && !casesSwiperInstance.current) {
      // Pass the container element directly to Swiper
      casesSwiperInstance.current = new Swiper(casesSwiperRef.current as any, {
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        spaceBetween: 24,
        navigation: {
          prevEl: ".case-prev",
          nextEl: ".case-next",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // match original: no autoplay, animate slides in on load
        // allow touch drag
        grabCursor: true,
        // ensure slides align left
        centeredSlides: false,
        watchOverflow: true,
      });
    }

    return () => {
      if (casesSwiperInstance.current) {
        casesSwiperInstance.current.destroy(true, true);
        casesSwiperInstance.current = null;
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0",
                currentSlide === index ? "opacity-100" : "opacity-0"
              )}
            >
              {slide.video ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.video}
                  poster={slide.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full items-center">
                <div className="container-custom w-full">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl text-[#eee] mb-6 md:mb-8">
                      {slide.subtitle}
                    </p>
                    <a
                      href={slide.link}
                      className="inline-flex items-center gap-2 bg-[#2460f2] text-white px-6 md:px-8 py-3 rounded-full text-sm font-medium hover:bg-[#1a4fd4] transition-colors"
                    >
                      查看更多
                      <AngleDoubleRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  currentSlide === index ? "w-5 bg-[#2460f2]" : "w-2.5 bg-white/60 hover:bg-white"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Nav Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 hidden lg:flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-[#2460f2] text-white rounded-full transition-all"
            >
              <AngleLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-[#2460f2] text-white rounded-full transition-all"
            >
              <AngleRightIcon className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 md:py-16 bg-[#f5f7fa]">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
              <div className="public-title">
                <h3 className="text-2xl md:text-3xl font-bold">产品中心</h3>
                <p className="text-sm text-gray-500 uppercase">Products</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                <Link href="/chanpinxilie1" className="text-sm text-[#666] hover:text-[#2460f2]">产品系列1</Link>
                <Link href="/chanpinxilie2" className="text-sm text-[#666] hover:text-[#2460f2]">产品系列2</Link>
                <Link href="/mobile" className="text-sm text-[#666] hover:text-[#2460f2]">智能手机</Link>
                <Link href="/robot" className="text-sm text-[#666] hover:text-[#2460f2]">AI机器人</Link>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <Link href={product.href} className="block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-125"
                      />
                    </div>
                    <div className="p-4 transition-colors duration-300 group-hover:bg-[#2460f2] group-hover:text-white">
                      <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.title}</h3>
                      <p className="text-[#2460f2] font-bold text-lg transition-colors duration-300 group-hover:text-white">
                        ￥ {product.price}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/chanpinxilie1" className="public-more inline-flex items-center gap-2">
                MORE
                <AngleDoubleRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold">公司简介</h2>
                <p className="text-sm text-gray-500 uppercase mb-4">Company profile</p>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-6">
                  某某科技，是一家以自有知识产权数字化产品研发、销售和服务为核心的技术企业。秉承"立足xx，服务全国"的业务理念，致力于为政府机关、科研院所、企事业单位以及中小企业实现"互联网+"和"数字化"转型升级，提供全面、成熟、易用的解决方案和应用服务。通过发挥互联网思维的优势深入洞察用户需求与使用场景，依托资深的技术能力和行业理解，提供"低投入，高回报"一体化云平台建设和定制服务，助力从业者更好地定制策略和实现数字化转型升级，迎接时代浪潮！某某科技是在中国消费升级的大背景下，顺应新时代消费者需求诞生的全案型公司，打破传统企服公司的角色定位，以"事业伙伴"的理念与客户共生共荣，共同对结果负责。解决从业者的业务在线化、业务数据化、数据业务化问题，是企业数字化营销终身战略顾问。创立至今，始终秉承责任、价值、共生和长期主义的价值观，致力成为企业的超长期合伙人，持续为企业升级赋能。
                </p>
                <div className="flex gap-8 mb-6">
                  <div className="text-center">
                    <span className="block text-3xl md:text-4xl font-bold text-[#2460f2]">10 年</span>
                    <span className="text-sm text-gray-500">核心团队经验</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl md:text-4xl font-bold text-[#2460f2]">20 +</span>
                    <span className="text-sm text-gray-500">超20项知识产权</span>
                  </div>
                </div>
                <Link href="/gongsijianjie" className="public-more inline-flex items-center gap-2">
                  查看更多
                  <AngleDoubleRightIcon className="w-4 h-4" />
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <img src="/images/about.jpeg" alt="公司简介" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Service Cases Section */}
           
          <ServiceCasesSection   />
 
{/* News Section */}
        <section className="py-12 md:py-16 bg-[#f5f7fa]">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-8">
              <div className="public-title">
                <h3 className="text-2xl md:text-3xl font-bold">新闻中心</h3>
                <p className="text-sm text-gray-500 uppercase">News</p>
              </div>
              <Link href="/gongsixinwen" className="public-more">
                MORE
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <div key={index} className="news-item group">
                  <Link 
                    href={item.href} 
                    className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:bg-[#2460f2] hover:text-white"
                  >
                    <div className="news-img overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full md:w-[180px] h-[150px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-medium line-clamp-2 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2 group-hover:text-white/70 transition-colors duration-300">
                        {item.date} {item.views}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="mb-8">
              <div className="public-title">
                <h3 className="text-2xl md:text-3xl font-bold">合作客户</h3>
                <p className="text-sm text-gray-500 uppercase">Partners</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {partners.map((logo, index) => (
                <div key={index} className="flex items-center justify-center p-4 border hover:shadow-lg transition-shadow">
                  <img src={logo} alt={`合作伙伴 ${index + 1}`} className="max-w-full max-h-[60px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 bg-[#25292f]">
          <div className="container-custom text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">专业技术团队 提供全方位系统解决方案</h2>
            <p className="text-gray-400 mb-6">如有任何疑问 请随时与我们联系</p>
            <form className="max-w-lg mx-auto flex gap-2">
              <input
                type="text"
                placeholder="请输入您的需求"
                className="flex-1 px-4 py-3 rounded text-gray-900"
              />
              <button type="submit" className="px-6 py-3 bg-[#2460f2] rounded hover:bg-[#1a4dc2] transition-colors">
                立即提交
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
