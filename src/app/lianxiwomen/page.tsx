import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "联系我们 - 苏州xx教育公司中文",
  description: "联系我们",
};

export default function LianxiwomenPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              src="/images/banner2.jpg"
              alt="联系我们"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">联系我们</h1>
              <p className="mt-2 text-sm uppercase tracking-wider">Contact Our Team</p>
            </div>
          </div>
        </section>

        <div className="container-custom py-8 md:py-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-[#2460f2]">
              首页
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">联系我们</span>
          </div>
        </div>

        <section className="container-custom pb-12 md:pb-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              联系我们的团队
            </h2>
            <p className="text-gray-500 text-center mb-8">
              您可以在这里向我们发送一般问题查询
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">姓名</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#2460f2] outline-none"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">电话</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#2460f2] outline-none"
                  placeholder="请输入您的电话"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-Mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#2460f2] outline-none"
                  placeholder="请输入您的邮箱"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">留言</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#2460f2] outline-none resize-none"
                  placeholder="请输入您的留言"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#2460f2] text-white font-medium hover:bg-[#1a4dc2] transition-colors"
              >
                ���即提交
              </button>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">E-Mail</h3>
                <p className="text-gray-500">123123@163.com</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">公司总机</h3>
                <p className="text-gray-500">400-000-0000</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">咨询专线</h3>
                <p className="text-gray-500">400-000-0000</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">公司地址</h3>
                <p className="text-gray-500">江苏省苏州市xxx街xx号</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}