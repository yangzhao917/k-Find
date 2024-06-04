"use client";
import { Footer } from "@/app/components/footer";
import { Logo } from "@/app/components/logo";
import { HotSpot } from "@/app/components/hotspot-search";
import { Search } from "@/app/components/search";
import React from "react";
import { AllLangs, ALL_LANG_OPTIONS, changeLang, getLang } from "./locales";

export default function Home() {
  return (
    <div className="absolute inset-0 min-h-[500px] flex items-center justify-center">
      {/* 语言下拉菜单 */}
      <div className="absolute top-0 right-0 m-4">
        <select
          className="rounded border border-gray-300 text-zinc-400 bg-white p-1 shadow-sm text-sm"
          value={getLang()}
          onChange={(e) => {
            changeLang(e.target.value as any);
          }}
        >
          {AllLangs.map((lang) => (
            <option value={lang} key={lang}>
              {" "}
              {ALL_LANG_OPTIONS[lang]}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className="relative flex flex-col gap-8 px-4 -mt-24">
        <Logo></Logo>
        <Search></Search>
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-1 flex-wrap justify-right">
            <HotSpot query="异地就医是否可以使用医保码?" />
            <HotSpot query="上海出台长三角异地住房公积金贷款还贷提取政策" />
            <HotSpot query="老年助餐优惠或补贴有哪些形式？如何申请助餐补贴?" />
          </div>
          <div className="flex gap-1 flex-wrap justify-right">
            <HotSpot query="想开咖啡店，食品经营许可证怎么办?" />
            <HotSpot query="劳动合同期限有哪几种？试用期如何约定？" />
            <HotSpot query="养老金申领手续谁来办？何时领？发放信息哪里查？" />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
