import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "服务案例 - 苏州xx教育公司中文",
  description: "服务案例",
};

const cases = [
  {
    id: 597,
    title: "上海某某汽车有限公司_copy_copy_copy",
    image: "/images/idxcase3.jpg",
    description:
      "上海某某汽车有限公司_copy_copy上海某某汽车有限公司_copy_copy上海某某汽车有限公司_copy_copy",
  },
  {
    id: 596,
    title: "重庆某某汽车有限公司_copy_copy_copy",
    image: "/images/idxcase1.jpg",
    description:
      "重庆某某汽车有限公司_copy_copy重庆某某汽车有限公司_copy_copy重庆某某汽车有限公司_copy_copy",
  },
  {
    id: 595,
    title: "北京某某汽车有限公司_copy_copy_copy",
    image: "/images/idxcase3.jpg",
    description:
      "北京某某汽车有限公司_copy_copy北京某某汽车有限公司_copy_copy北京某某汽车有限公司_copy_copy",
  },
  {
    id: 594,
    title: "上海某某汽车有限公司_copy_copy",
    image: "/images/idxcase1.jpg",
    description:
      "上海某某汽车有限公司_copy上海某某汽车有限公司_copy上海某某汽车有限公司_copy",
  },
  {
    id: 593,
    title: "重庆某某汽车有限公司_copy_copy",
    image: "/images/idxcase2.jpg",
    description:
      "重庆某某汽车有限公司_copy重庆某某汽车有限公司_copy重庆某某汽车有限公司_copy",
  },
  {
    id: 592,
    title: "上海某某汽车有限公司_copy_copy_copy",
    image: "/images/idxcase1.jpg",
    description:
      "上海某某汽车有限公司_copy_copy上海某某汽车有限公司_copy_copy上海某某汽车有限公司_copy_copy",
  },
  {
    id: 591,
    title: "重庆某某汽车有限公司_copy_copy_copy",
    image: "/images/idxcase2.jpg",
    description:
      "重庆某某汽车有限公司_copy_copy重庆某某汽车有限公司_copy_copy重庆某某汽车有限公司_copy_copy",
  },
  {
    id: 590,
    title: "北京某某汽车有限公司_copy_copy_copy",
    image: "/images/idxcase3.jpg",
    description:
      "北京某某汽车有限公司_copy_copy北京某某汽车有限公司_copy_copy北京某某汽车有限公司_copy_copy",
  },
  {
    id: 589,
    title: "上海某某汽车有限公司_copy_copy",
    image: "/images/idxcase1.jpg",
    description:
      "上海某某汽车有限公司_copy上海某某汽车有限公司_copy上海某某汽车有限公司_copy",
  },
  {
    id: 588,
    title: "重庆某某汽车有限公司_copy_copy",
    image: "/images/idxcase2.jpg",
    description:
      "重庆某某汽车有限公司_copy重庆某某汽车有限公司_copy重庆某某汽车有限公司_copy",
  },
  {
    id: 406,
    title: "上海某某汽车有限公司_copy_copy",
    image: "/images/idxcase1.jpg",
    description:
      "上海某某汽车有限公司_copy上海某某汽车有限公司_copy上海某某汽车有限公司_copy",
  },
  {
    id: 405,
    title: "重庆某某汽车有限公司_copy_copy",
    image: "/images/idxcase2.jpg",
    description:
      "重庆某某汽车有限公司_copy重庆某某汽车有限公司_copy重庆某某汽车有限公司_copy",
  },
  {
    id: 404,
    title: "北京某某汽车有限公司_copy_copy",
    image: "/images/idxcase3.jpg",
    description:
      "北京某某汽车有限公司_copy北京某某汽车有限公司_copy北京某某汽车有限公司_copy",
  },
  {
    id: 403,
    title: "上海某某汽车有限公司_copy",
    image: "/images/idxcase1.jpg",
    description:
      "上海某某汽车有限公司_copy上海某某汽车有限公司_copy上海某某汽车有限公司_copy",
  },
  {
    id: 402,
    title: "重庆某某汽车有限公司_copy",
    image: "/images/idxcase2.jpg",
    description:
      "重庆某某汽车有限公司_copy重庆某某汽车有限公司_copy重庆某某汽车有限公司_copy",
  },
];

export default function FuwuanliPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              src="/images/banner2.jpg"
              alt="服务案例"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">服务案例</h1>
              <p className="mt-2 text-sm uppercase tracking-wider">service case</p>
            </div>
          </div>
        </section>

        <div className="container-custom py-8 md:py-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-[#2460f2]">
              首页
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">服务案例</span>
          </div>
        </div>

        <section className="container-custom pb-12 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((item) => (
              <div key={item.id} className="group">
                <a href={`/fuwuanli/${item.id}.html`}>
                  <div className="relative overflow-hidden mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[200px] md:h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white text-sm">查看详情</span>
                    </div>
                  </div>
                  <h3 className="text-base font-medium mb-1 group-hover:text-[#2460f2] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="text-sm text-gray-500">第1页/共1页</span>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}