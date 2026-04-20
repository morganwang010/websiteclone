"use client";

import Image from "next/image";
import { ClockIcon, EyeIcon } from "@/components/icons";

interface NewsItem {
  title: string;
  image: string;
  date: string;
  views: number;
}

const newsData: NewsItem[] = [
  {
    title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy_copy",
    image: "/images/b4.jpeg",
    date: "2022-09-02 11:40:58",
    views: 427,
  },
  {
    title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy",
    image: "/images/b3.jpeg",
    date: "2022-09-02 11:40:58",
    views: 593,
  },
  {
    title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy_copy",
    image: "/images/b2.jpeg",
    date: "2022-09-02 11:40:58",
    views: 558,
  },
  {
    title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy_copy",
    image: "/images/b1.jpeg",
    date: "2022-09-02 11:40:58",
    views: 391,
  },
  {
    title: "复制文档到网站后台，怎么样才能清除格式",
    image: "/images/b5.jpeg",
    date: "2022-09-02 11:40:58",
    views: 589,
  },
  {
    title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy",
    image: "/images/b4.jpeg",
    date: "2022-09-02 11:40:58",
    views: 632,
  },
];

export default function NewsSection() {
  return (
    <section className="news-wrapper py-16">
      <div className="container-custom mx-auto px-4">
        <div className="public-title mb-12 text-center">
          <h3 className="text-3xl font-bold">新闻中心</h3>
          <p className="text-sm text-[#666]">News</p>
        </div>

        <div className="news-list row grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsData.map((item, index) => (
            <div key={index} className="col-lg-6">
              <a href="#" className="news-item block rounded-xl bg-white shadow-sm mb-6 overflow-hidden group">
                <div className="news-item-img relative overflow-hidden h-full min-h-[180px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="px-0">
                  <div className="card-body p-5 transition-all duration-500 group-hover:bg-[#2460f2]">
                    <h5 className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h5>
                    <p className="card-info flex gap-4 text-sm mb-3 transition-colors duration-300 group-hover:text-white/80">
                      <span className="flex items-center gap-1 text-[#666] group-hover:text-white/80">
                        <ClockIcon className="text-[#999] group-hover:text-white/80" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1 text-[#666] group-hover:text-white/80">
                        <EyeIcon className="text-[#999] group-hover:text-white/80" />
                        {item.views}
                      </span>
                    </p>
                    <p className="card-text text-sm text-[#666] text-ellipsis-3 mb-3 transition-colors duration-300 group-hover:text-white/80">
                      WBE世界电池展圆满落幕，感恩遇见，期待再聚...
                    </p>
                    <p className="more text-sm font-medium text-[#2460f2] transition-colors duration-300 group-hover:text-white">
                      MORE
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center news-more mt-12">
          <a href="#" className="public-more">
            MORE
          </a>
        </div>
      </div>
    </section>
  );
}
