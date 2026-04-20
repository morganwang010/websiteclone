import Image from "next/image";
import Link from "next/link";
import { AngleDoubleRightIcon } from "./icons";
import type { Product } from "@/types";

const products: Product[] = [
  {
    id: 1,
    title: "xx手机16系列_copy_copy_copy",
    description: "",
    price: 5999,
    image: "/images/pro5.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "xx手机16系列_copy",
    description: "",
    price: 5999,
    image: "/images/pro2.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "xx手机16系列_copy_copy",
    description: "",
    price: 5999,
    image: "/images/pro5.jpg",
    href: "#",
  },
  {
    id: 4,
    title: "xx手机16系列_copy_copy",
    description: "",
    price: 5999,
    image: "/images/pro3.jpg",
    href: "#",
  },
  {
    id: 5,
    title: "xx手机16系列_copy_copy",
    description: "",
    price: 5999,
    image: "/images/395x400.png",
    href: "#",
  },
  {
    id: 6,
    title: "xx手机16系列_copy",
    description: "",
    price: 5999,
    image: "/images/pro2.jpg",
    href: "#",
  },
  {
    id: 7,
    title: "xx手机16系列_copy_copy",
    description: "",
    price: 5999,
    image: "/images/395x400.png",
    href: "#",
  },
  {
    id: 8,
    title: "xx手机16系列_copy",
    description: "",
    price: 5999,
    image: "/images/pro4.jpg",
    href: "#",
  },
];

const categoryLinks = [
  { href: "/chanpinxilie1", label: "产品系列1" },
  { href: "/chanpinxilie2", label: "产品系列2" },
  { href: "/mobile", label: "智能手机" },
  { href: "/robot", label: "AI机器人" },
];

export function ProductsSection() {
  return (
    <section className="product-wrapper container-custom mt-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <div className="public-title">
          <h3>产品中心</h3>
          <p>Products</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
          {categoryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#666] hover:text-[var(--primary-color)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-item group">
<Link
                href={`/chanpinxilie1/${product.id}.html`}
                className="product-item-wrapper block bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
              <div className="pic overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={395}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-125"
                />
              </div>
              <div className="content-wrapper p-4 md:p-5 transition-colors duration-300 group-hover:bg-[#2460f2] group-hover:text-white">
                <h3 className="product-item-title text-lg font-bold text-ellipsis-2 mb-2 min-h-[3.5rem]">
                  {product.title}
                </h3>
                <p className="product-item-info text-sm text-[#999] mb-3 transition-colors duration-300 group-hover:text-white/80">
                  了解更多产品详情
                </p>
                <div className="product-item-bottom flex items-center justify-between">
                  <div className="price text-xl font-semibold text-[var(--primary-color)] transition-colors duration-300 group-hover:text-white">
                    ¥{product.price.toFixed(2)}
                  </div>
                  <span className="public-more inline-flex items-center gap-1">
                    <AngleDoubleRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/chanpinxilie1" className="public-more inline-flex items-center gap-2">
          查看更多产品
          <AngleDoubleRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
