"use client"

import { useCallback, useEffect, useState } from "react"

import { AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

interface Slide {
  title: string
  subtitle: string
  image?: string
  video?: string
  poster?: string
  link: string
}

const slides: Slide[] = [
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
]

export function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [])

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length)
  }, [currentIndex, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length)
  }, [currentIndex, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="main-slider relative overflow-hidden">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "swiper-slide relative",
              currentIndex === index ? "block" : "hidden"
            )}
          >
            {slide.video ? (
              <video
                className="swiper-silde-img absolute inset-0 w-full h-full object-cover"
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
                className={cn(
                  "swiper-silde-img absolute inset-0 w-full min-h-[400px] max-h-[800px] object-cover transition-transform duration-[5000ms] ease-linear",
                  currentIndex === index && "scale-100"
                )}
              />
            )}
            <div className="image-layer absolute inset-0 bg-black/30" />
            <div className="container relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-8">
              <div className="row w-full">
                <div className="col-lg-8">
                  <div className="main-slider__content">
                    <h2
                      className={cn(
                        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 lg:mb-6 transition-all duration-500",
                        "text-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",
                        currentIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      )}
                      style={{
                        transitionDelay: currentIndex === index ? "0ms" : "0ms",
                      }}
                    >
                      {slide.title}
                    </h2>
                    <p
                      className={cn(
                        "text-base sm:text-lg lg:text-xl text-[#eee] mb-6 lg:mb-8 max-w-2xl transition-all duration-500",
                        "text-shadow-[0_2px_8px_rgba(0,0,0,0.5)]",
                        currentIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      )}
                      style={{
                        transitionDelay: currentIndex === index ? "200ms" : "0ms",
                      }}
                    >
                      {slide.subtitle}
                    </p>
                    <a
                      href={slide.link}
                      className={cn(
                        "inline-flex items-center gap-2 bg-[#2460f2] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-3 lg:py-4 rounded-full uppercase text-sm font-medium transition-all duration-500 hover:bg-[#1a4fd4] hover:scale-105",
                        currentIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      )}
                      style={{
                        transitionDelay: currentIndex === index ? "400ms" : "0ms",
                      }}
                    >
                      查看更多
                      <AngleDoubleRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        id="main-slider-pagination"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              currentIndex === index
                ? "w-5 bg-[#2460f2]"
                : "w-2.5 bg-white/60 hover:bg-white"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="main-slider__nav absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 hidden lg:flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-[#2460f2] text-white rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <AngleLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-[#2460f2] text-white rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <AngleRightIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
