import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "合作客户 - 苏州xx教育公司中文",
  description: "合作客户",
};

export default function PinpaishejiPage() {
  const partners = Array(12).fill("/images/logo.png");
  
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              src="/images/banner2.jpg"
              alt="合作客户"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">合作客户</h1>
              <p className="mt-2 text-sm uppercase tracking-wider">Partners</p>
            </div>
          </div>
        </section>

        <div className="container-custom py-8 md:py-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-[#2460f2]">首页</a>
            <span className="mx-2">/</span>
            <a href="/gongsijianjie.html" className="hover:text-[#2460f2]">关于我们</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">合作客户</span>
          </div>
        </div>

        <section className="container-custom pb-12 md:pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partners.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4 border hover:shadow-lg transition-shadow">
                <img
                  src={logo}
                  alt={`合作伙伴 ${index + 1}`}
                  className="max-w-full max-h-[60px] object-contain"
                />
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