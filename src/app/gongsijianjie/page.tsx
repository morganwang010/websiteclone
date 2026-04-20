import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "公司简介 - 苏州xx教育公司中文",
  description: "苏州xx教育公司中文",
};

export default function GongsijianjiePage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              src="/images/banner2.jpg"
              alt="关于我们"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">关于我们</h1>
              <p className="mt-2 text-sm uppercase tracking-wider">about us</p>
            </div>
          </div>
        </section>

        <div className="container-custom py-8 md:py-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-[#2460f2]">
              首页
            </a>
            <span className="mx-2">/</span>
            <a href="/gongsijianjie.html" className="hover:text-[#2460f2]">
              关于我们
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">公司简介</span>
          </div>
        </div>

        <section className="container-custom pb-12 md:pb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">关于我们</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  某某科技，是一家以自有知识产权数字化产品研发、销售和服务为核心的技术企业。秉承"立足xx，服务全国"的业务理念，致力于为政府机关、科研院所、企事业单位以及中小企业实现"互联网+"和"数字化"转型升级，提供全面、成熟、易用的解决方案和应用服务。
                </p>
                <p>
                  通过发挥互联网思维的优势深入洞察用户需求与使用场景，依托资深的技术能力和行业理解，提供"低投入，高回报"一体化云平台建设和定制服务，助力从业者更好地定制策略和实现数字化转型升级，迎接时代浪潮！
                </p>
                <p>
                  某某科技是在中国消费升级的大背景下，顺应新时代消费者需求诞生的全案型公司，打破传统企服公司的角色定位，以"事业伙伴"的理念与客户共生共荣，共同对结果负责。解决从业者的业务在线化、业务数据化、数据业务化问题，是企业数字化营销终身战略顾问。创立至今，始终秉承责任、价值、共生和长期主义的价值观，致力成为企业的超长期合伙人，持续为企业升级赋能。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50">
                  <span className="block text-3xl md:text-4xl font-bold text-[#2460f2]">10 年</span>
                  <span className="text-sm text-gray-500">核心团��经验</span>
                </div>
                <div className="text-center p-4 bg-gray-50">
                  <span className="block text-3xl md:text-4xl font-bold text-[#2460f2]">20 +</span>
                  <span className="text-sm text-gray-500">超20项知识产权</span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="/gongsijianjie.html"
                  className="inline-block px-6 py-3 border border-[#2460f2] text-[#2460f2] hover:bg-[#2460f2] hover:text-white transition-colors"
                >
                  查看更多
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/pro1.jpg"
                  alt="公司图片1"
                  className="w-full h-auto"
                />
                <img
                  src="/images/pro2.jpg"
                  alt="公司图片2"
                  className="w-full h-auto"
                />
                <img
                  src="/images/pro3.jpg"
                  alt="公司图片3"
                  className="w-full h-auto col-span-2"
                />
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