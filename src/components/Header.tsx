"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GlobeIcon,
  ChevronDownIcon,
  CartIcon,
  SearchIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  {
    label: "关于我们",
    href: "/gongsijianjie",
    children: [
      { label: "公司简介", href: "/gongsijianjie" },
      { label: "合作客户", href: "/pinpaisheji" },
    ],
  },
  {
    label: "产品中心",
    href: "/chanpinxilie1",
    children: [
      { label: "产品系列1", href: "/chanpinxilie1" },
      { label: "产品系列2", href: "/chanpinxilie2" },
      { label: "智能手机", href: "/mobile" },
      { label: "AI机器人", href: "/robot" },
    ],
  },
  { label: "服务案例", href: "/fuwuanli" },
  {
    label: "新闻中心",
    href: "/gongsixinwen",
    children: [
      { label: "公司新闻", href: "/gongsixinwen" },
      { label: "行业资讯", href: "/hangyezixun" },
    ],
  },
  { label: "下载中心", href: "/xiazaizhongxin" },
  { label: "联系我们", href: "/lianxiwomen" },
  { label: "2024模版", href: "http://demo2.ldcms.com.cn" },
  { label: "2023模版", href: "http://demo1.ldcms.com.cn" },
];

const languages = [
  { code: "zh", label: "中文" },
  { code: "en", label: "English" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState("zh");

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm h-[75px]">
        <div className="container-custom flex justify-between items-center h-full">
          <div className="logo max-w-[120px]">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="苏州xx教育公司中文"
                className="h-auto max-w-full"
              />
            </Link>
          </div>

          <nav className="nav-pc hidden md:block">
            <ul className="flex items-center">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <>
                      <Link
                        href={item.href}
                        className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium uppercase hover:text-[#2460f2] transition-colors"
                      >
                        {item.label}
                        <ChevronDownIcon className="w-4 h-4" />
                      </Link>
                      <div
                        className={`absolute left-0 top-full min-w-[180px] bg-white shadow-lg rounded-md py-2 transition-all duration-200 ${
                          activeDropdown === item.label
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.href}
                            className="block px-4 py-2 text-[14px] hover:bg-gray-50 hover:text-[#2460f2] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-[15px] font-medium uppercase hover:text-[#2460f2] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="lang-wrapper relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 border rounded-full px-3 py-1.5 text-sm hover:border-[#2460f2] transition-colors"
              >
                <GlobeIcon className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {languages.find((l) => l.code === currentLang)?.label}
                </span>
                <ChevronDownIcon className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[120px] bg-white shadow-lg rounded-md py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        currentLang === lang.code ? "text-[#2460f2]" : ""
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="cart relative cursor-pointer">
              <CartIcon className="w-5 h-5 hover:text-[#2460f2] transition-colors" />
            </div>

            <button
              onClick={() => setSearchOpen(true)}
              className="search-icon cursor-pointer"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5 hover:text-[#2460f2] transition-colors" />
            </button>

            <button
              className="menu-mobile md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-white z-50 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center h-[75px] px-4">
            <div className="logo max-w-[120px]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/images/logo.png"
                  alt="苏州xx教育公司中文"
                  className="h-auto max-w-full"
                />
              </Link>
            </div>
            <button onClick={() => setMobileMenuOpen(false)}>
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.children ? (
                    <div className="border-b border-gray-100">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-3 text-[15px] font-medium uppercase"
                      >
                        {item.label}
                      </Link>
                      <ul className="pl-4 pb-2">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-[14px] text-gray-600 hover:text-[#2460f2] transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-[15px] font-medium uppercase border-b border-gray-100"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-[60] transition-all duration-300 ${
          searchOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-custom py-8">
          <div className="flex justify-end mb-4">
            <button onClick={() => setSearchOpen(false)}>
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <SearchIcon className="w-6 h-6 mr-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索..."
                className="flex-1 text-2xl outline-none bg-transparent"
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
