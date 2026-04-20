import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "智能手机 - 苏州xx教育公司中文",
  description: "智能手机",
};

export default function MobilePage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              src="/images/banner1.jpg"
              alt="智能手机"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">智能手机</h1>
              <p className="mt-2 text-sm uppercase tracking-wider">Mobile Phone</p>
            </div>
          </div>
        </section>

        <div className="container-custom py-8 md:py-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-[#2460f2]">首页</a>
            <span className="mx-2">/</span>
            <a href="/chanpinxilie1.html" className="hover:text-[#2460f2]">产品中心</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">智能手机</span>
          </div>
        </div>

        <section className="container-custom pb-12 md:pb-20">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <a href="/chanpinxilie1.html" className="px-4 py-2 bg-gray-100 hover:bg-gray-200">产品系列1</a>
              <a href="/chanpinxilie2.html" className="px-4 py-2 bg-gray-100 hover:bg-gray-200">产品系列2</a>
              <a href="/mobile.html" className="px-4 py-2 bg-[#2460f2] text-white">智能手机</a>
              <a href="/robot.html" className="px-4 py-2 bg-gray-100 hover:bg-gray-200">AI机器人</a>
            </div>
          </div>
          <p className="text-gray-500">暂无产品</p>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}