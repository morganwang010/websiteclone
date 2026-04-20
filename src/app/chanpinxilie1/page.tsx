import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "产品系列1 - 苏州xx教育公司中文",
  description: "产品中心",
};

const products = [
  {
    id: 692,
    title: "xx手机16系列_copy_copy_copy",
    image: "/images/pro5.jpg",
    description:
      "钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用",
    price: "5999.00",
  },
  {
    id: 685,
    title: "xx手机16系列_copy",
    image: "/images/pro2.jpg",
    description:
      "钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用",
    price: "5999.00",
  },
  {
    id: 687,
    title: "xx手机16系列_copy_copy",
    image: "/images/pro5.jpg",
    description:
      "钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用",
    price: "5999.00",
  },
  {
    id: 694,
    title: "xx手机16系列_copy_copy",
    image: "/images/pro3.jpg",
    description:
      "钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用",
    price: "5999.00",
  },
  {
    id: 693,
    title: "xx手机16系列_copy_copy",
    image: "/images/395x400.png",
    description:
      "钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用",
    price: "5999.00",
  },
  {
    id: 688,
    title: "xx手机16系列_copy_copy",
    image: "/images/395x400.png",
    description:
      "钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用",
    price: "5999.00",
  },
  {
    id: 686,
    title: "xx手机16系列_copy",
    image: "/images/pro4.jpg",
    description:
      "钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用",
    price: "5999.00",
  },
  {
    id: 684,
    title: "xx手机16系列",
    image: "/images/pro1.jpg",
    description:
      "钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用钢铁行业解决方案让我们花费很很大的心血才研制出来这些内容专为测试时使用",
    price: "5999.00",
  },
];

export default function Chanpinxilie1Page() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              src="/images/banner1.jpg"
              alt="产品中心"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">产品中心</h1>
              <p className="mt-2 text-sm uppercase tracking-wider">Products</p>
            </div>
          </div>
        </section>

        <div className="container-custom py-8 md:py-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-[#2460f2]">
              首页
            </a>
            <span className="mx-2">/</span>
            <a href="/chanpinxilie1.html" className="hover:text-[#2460f2]">
              产品中心
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">产品系列1</span>
          </div>
        </div>

        <section className="container-custom pb-12">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">产品分类</h2>
            <div className="flex flex-wrap gap-2">
              <a
                href="/chanpinxilie1.html"
                className="px-4 py-2 bg-[#2460f2] text-white"
              >
                产品系列1
              </a>
              <a
                href="/chanpinxilie2.html"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              >
                产品系列2
              </a>
              <a
                href="/mobile.html"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              >
                智能手机
              </a>
              <a
                href="/robot.html"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              >
                AI机器人
              </a>
            </div>
          </div>

          <div className="mb-6 p-4 bg-gray-50">
            <h3 className="font-bold mb-3">产品筛选</h3>
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">颜色</h4>
              <div className="flex flex-wrap gap-2">
                <a
                  href="/chanpinxilie1.html"
                  className="px-3 py-1 bg-[#2460f2] text-white text-sm"
                >
                  全部
                </a>
                <a
                  href="?color=1"
                  className="px-3 py-1 bg-white border text-sm hover:bg-gray-100"
                >
                  红色
                </a>
                <a
                  href="?color=2"
                  className="px-3 py-1 bg-white border text-sm hover:bg-gray-100"
                >
                  绿色
                </a>
                <a
                  href="?color=3"
                  className="px-3 py-1 bg-white border text-sm hover:bg-gray-100"
                >
                  黄色
                </a>
                <a
                  href="?color=4"
                  className="px-3 py-1 bg-white border text-sm hover:bg-gray-100"
                >
                  黑色
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">类型</h4>
              <div className="flex flex-wrap gap-2">
                <a
                  href="/chanpinxilie1.html"
                  className="px-3 py-1 bg-[#2460f2] text-white text-sm"
                >
                  全部
                </a>
                <a
                  href="?types=0"
                  className="px-3 py-1 bg-white border text-sm hover:bg-gray-100"
                >
                  基础
                </a>
                <a
                  href="?types=1"
                  className="px-3 py-1 bg-white border text-sm hover:bg-gray-100"
                >
                  专业
                </a>
                <a
                  href="?types=2"
                  className="px-3 py-1 bg-white border text-sm hover:bg-gray-100"
                >
                  旗舰
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <a href={`/chanpinxilie1/${product.id}.html`}>
                  <div className="relative overflow-hidden mb-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm font-medium mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                    {product.description}
                  </p>
                  <p className="text-[#2460f2] font-bold">
                    ￥ <span>{product.price}</span>
                  </p>
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