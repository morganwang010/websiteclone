import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "行业资讯 - 苏州xx教育公司中文",
  description: "行业资讯",
};

const newsItems = [
  {
    id: 625,
    title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy_copy",
    image: "/images/b4.jpeg",
    date: "2022-09-02",
    views: 452,
    excerpt: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚...",
  },
  {
    id: 624,
    title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy",
    image: "/images/b3.jpeg",
    date: "2022-09-02",
    views: 630,
    excerpt: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚...",
  },
  {
    id: 623,
    title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy_copy",
    image: "/images/b2.jpeg",
    date: "2022-09-02",
    views: 591,
    excerpt: "8月10日，为期三天的WBE世界电池展会在广交会展馆圆满落幕...",
  },
  {
    id: 622,
    title: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚_copy_copy_copy",
    image: "/images/b1.jpeg",
    date: "2022-09-02",
    views: 412,
    excerpt: "WBE世界电池展圆满落幕 | 感恩遇见，期待再聚...",
  },
];

export default function HangyezixunPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              src="/images/banner2.jpg"
              alt="行业资讯"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">行业资讯</h1>
              <p className="mt-2 text-sm uppercase tracking-wider">Industry News</p>
            </div>
          </div>
        </section>

        <div className="container-custom py-8 md:py-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-[#2460f2]">首页</a>
            <span className="mx-2">/</span>
            <a href="/gongsixinwen.html" className="hover:text-[#2460f2]">新闻中心</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">行业资讯</span>
          </div>
        </div>

        <section className="container-custom pb-12 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item) => (
              <div key={item.id} className="group flex flex-col md:flex-row">
                <a href={`/hangyezixun/${item.id}.html`} className="md:w-[200px] flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full md:w-[200px] h-[150px] object-cover" />
                </a>
                <div className="mt-3 md:mt-0 md:ml-4">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-[#2460f2] transition-colors">
                    <a href={`/hangyezixun/${item.id}.html`}>{item.title}</a>
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}