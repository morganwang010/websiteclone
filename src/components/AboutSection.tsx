import Image from "next/image"
import Link from "next/link"

import { AngleDoubleRightIcon } from "./icons"

const description =
  '某某科技，是一家以自有知识产权数字化产品研发、销售和服务为核心的技术企业。秉承"立足xx，服务全国"的业务理念，致力于为政府机关、科研院所、企事业单位以及中小企业实现"互联网+"和"数字化"转型升级...'

export function AboutSection() {
  return (
    <section className="about-wrapper mt-16 mb-3 d-lg-flex">
      <div className="left-img overflow-hidden col-lg-6 h-[580px]">
        <Image
          src="/images/about.jpeg"
          alt="首页关于我们背景"
          fill
          className="object-cover"
        />
      </div>
      <div className="about-right col-lg-6 relative flex items-center">
        <div className="about-right-content absolute h-full left-0 bg-white p-12 w-full lg:w-[calc(100%-3rem)]">
          <h2 className="text-3xl font-bold">公司简介</h2>
          <p className="text-sm text-[#333] uppercase">Company profile</p>
          <p className="info mt-4 text-base text-[#555] leading-[1.8] line-clamp-6">
            {description}
          </p>
          <div className="count-wrapper flex mt-4">
            <div className="count-item mr-8">
              <div className="count-text">
                <span className="text-4xl font-bold text-[#2460f2]">10</span>
                <span className="text-sm text-[#666]">年</span>
              </div>
              <p className="text-sm text-[#555]">10年核心团队经验</p>
            </div>
            <div className="count-item mr-8">
              <div className="count-text">
                <span className="text-4xl font-bold text-[#2460f2]">20</span>
                <span className="text-sm text-[#666]">+</span>
              </div>
              <p className="text-sm text-[#555]">超20项知识产权</p>
            </div>
          </div>
          <Link
            href="/gongsijianjie"
            className="public-more inline-flex items-center gap-2 mt-6 text-sm text-[#2460f2] hover:text-[#1a4cc0] transition-colors"
          >
            查看更多
            <AngleDoubleRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
