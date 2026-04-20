import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "下载中心 - 苏州xx教育公司中文",
  description: "下载中心",
};

export default function XiazaizhongxinPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              src="/images/banner2.jpg"
              alt="下载中心"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">下载中心</h1>
              <p className="mt-2 text-sm uppercase tracking-wider">Downloads</p>
            </div>
          </div>
        </section>

        <div className="container-custom py-8 md:py-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-[#2460f2]">首页</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">下载中心</span>
          </div>
        </div>

        <section className="container-custom pb-12 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 423, title: "产品手册PDF", size: "2.5MB" },
              { id: 422, title: "技术文档", size: "1.8MB" },
              { id: 421, title: "用户指南", size: "3.2MB" },
              { id: 420, title: "安装包ZIP", size: "15MB" },
              { id: 419, title: "培训视频", size: "45MB" },
              { id: 418, title: "案例合集", size: "8.5MB" },
              { id: 417, title: "宣传册PDF", size: "5MB" },
              { id: 416, title: "报价单", size: "0.5MB" },
            ].map((item) => (
              <div key={item.id} className="border p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">大小: {item.size}</p>
                  </div>
                  <a
                    href={`/xiazaizhongxin/${item.id}.html`}
                    className="px-4 py-2 bg-[#2460f2] text-white text-sm hover:bg-[#1a4dc2] transition-colors"
                  >
                    下载
                  </a>
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