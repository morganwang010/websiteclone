import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "公司新闻 - 苏州xx教育公司中文",
  description: "公司新闻",
};

const newsItems = [
  {
    id: 359,
    title: "复制文档到网站后台,怎么样才能清除格式",
    image: "/images/b5.jpeg",
    date: "2022-09-02",
    views: 630,
    excerpt: "复制文档到网站后台,怎么样才能清除格式...",
  },
  {
    id: 358,
    title: "WBE世界电池展圆满落幕 | 感恩遇见,期待再聚_copy_copy",
    image: "/images/b4.jpeg",
    date: "2022-09-02",
    views: 677,
    excerpt: "WBE世界电池展圆满落幕 | 感恩遇见,期待再聚...",
  },
  {
    id: 357,
    title: "复制文档到网站后台,怎么样才能清除格式",
    image: "/images/b3.jpeg",
    date: "2022-09-02",
    views: 425,
    excerpt: "复制文档到网站后台,怎么样才能清除格式...",
  },
  {
    id: 356,
    title: "WBE世界电池展圆满落幕 | 感恩遇见,期待再聚",
    image: "/images/b2.jpeg",
    date: "2022-09-02",
    views: 591,
    excerpt: "WBE世界电池展圆满落幕 | 感恩遇见,期待再聚...",
  },
  {
    id: 355,
    title: "复制文档到网站后台,怎么样才能清除格式",
    image: "/images/b1.jpeg",
    date: "2022-09-02",
    views: 412,
    excerpt: "复制文档到网站后台,怎么样才能清除格式...",
  },
];

export default function GongsixinwenPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              src="/images/banner2.jpg"
              alt="公司新闻"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">新闻中心</h1>
              <p className="mt-2 text-sm uppercase tracking-wider">News</p>
            </div>
          </div>
        </section>

        <div className="container-custom py-8 md:py-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-[#2460f2]">
              首页
            </a>
            <span className="mx-2">/</span>
            <a href="/gongsixinwen.html" className="hover:text-[#2460f2]">
              新闻中心
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">公司新闻</span>
          </div>
        </div>

        <section className="container-custom pb-12 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item) => (
              <div key={item.id} className="group flex flex-col md:flex-row">
                <a
                  href={`/gongsixinwen/${item.id}.html`}
                  className="md:w-[200px] flex-shrink-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full md:w-[200px] h-[150px] md:h-[150px] object-cover"
                  />
                </a>
                <div className="mt-3 md:mt-0 md:ml-4">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-[#2460f2] transition-colors">
                    <a href={`/gongsixinwen/${item.id}.html`}>{item.title}</a>
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/xinwenzhongxin.html" className="public-more">
              MORE
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}