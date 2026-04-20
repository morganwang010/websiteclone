"use client";

import Link from "next/link";

const friendLinks = [
  { label: "LDcms网站系统", href: "http://www.example.com" },
  { label: "苏州网站建设", href: "http://www.example.com" },
  { label: "苏州网站模板", href: "http://www.example.com" },
];

const aboutLinks = [
  { label: "公司简介", href: "/gongsijianjie" },
  { label: "合作客户", href: "/pinpaisheji" },
];

const productLinks = [
  { label: "产品系列1", href: "/chanpinxilie1" },
  { label: "产品系列2", href: "/chanpinxilie2" },
  { label: "智能手机", href: "/mobile" },
  { label: "AI机器人", href: "/robot" },
];

const newsLinks = [
  { label: "公司新闻", href: "/gongsixinwen" },
  { label: "行业资讯", href: "/hangyezixun" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1f232b] py-10">
      <div className="container-custom">
        <div className="footer-link border-b border-[#353535] pb-5">
          <div className="public-title mb-4">
            <h3 className="text-lg font-bold text-white">友情链接</h3>
          </div>
          <ul className="flex flex-wrap ml-8 gap-x-6 gap-y-2">
            {friendLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aaa] hover:text-[#2460f2] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
          <div>
            <dl>
              <dt className="font-bold text-white text-base mb-2">关于我们</dt>
              <dd className="space-y-2">
                {aboutLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-[#999] hover:text-[#2460f2] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </dd>
            </dl>
          </div>

          <div>
            <dl>
              <dt className="font-bold text-white text-base mb-2">产品中心</dt>
              <dd className="space-y-2">
                {productLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-[#999] hover:text-[#2460f2] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </dd>
            </dl>
          </div>

          <div>
            <dl>
              <dt className="font-bold text-white text-base mb-2">新闻中心</dt>
              <dd className="space-y-2">
                {newsLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-[#999] hover:text-[#2460f2] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </dd>
            </dl>
          </div>

          <div className="footer-contact flex flex-col items-end">
            <p className="text-xl font-bold text-white">400-000-0000</p>
            <p className="text-sm text-[#999]">江苏省苏州市xxx街xx号</p>
            <p className="text-sm text-[#999]">123123@163.com</p>
            <div className="qrcodes flex mt-4 gap-4">
              <div className="w-24 h-24 bg-[#eee]" />
              <div className="w-24 h-24 bg-[#eee]" />
            </div>
          </div>
        </div>
      </div>

      <div className="copyright bg-[#171717] py-3 text-center text-sm text-[#666] mt-8">
        <p>Copyright © 2011-2024 苏州竹子网络科技有限公司 版权所有</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/sitemap.xml" className="hover:text-[#2460f2] transition-colors">
            Sitemap
          </Link>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2460f2] transition-colors"
          >
            备案号:苏ICP备88888888号
          </a>
        </div>
      </div>
    </footer>
  );
}
