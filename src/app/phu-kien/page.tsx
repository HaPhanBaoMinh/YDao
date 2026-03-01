import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animation/FadeIn";

export const metadata: Metadata = {
  title: "Phụ Kiện Cưới — Mấn, Trang Sức, Giày & Khăn Vấn",
  description:
    "Phụ kiện cưới đồng bộ cho áo dài: mấn đội đầu, khăn vấn, trang sức, giày cưới và các phụ kiện bưng quả. Cho thuê tại YDao.",
};

export default function AccessoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Breadcrumb items={[{ label: "Phụ kiện" }]} />

      {/* Hero */}
      <div className="text-center mb-16 lg:mb-20">
        <FadeIn delay={100} duration={1000} distance={40}>
          <h1 className="font-heading text-h1 text-neutral-900">
            Phụ Kiện
          </h1>
          <p className="mt-4 font-body text-neutral-500 max-w-lg mx-auto">
            Hoàn thiện diện mạo ngày cưới với phụ kiện đồng bộ cùng áo dài.
          </p>
        </FadeIn>
      </div>

      <div className="pb-24 lg:pb-32">
        <FadeIn duration={900}>
          <div className="text-center py-20 border border-neutral-200">
            <div className="w-16 h-px bg-neutral-300 mx-auto mb-6" />
            <h2 className="font-heading text-2xl text-neutral-900">
              Sắp ra mắt
            </h2>
            <p className="mt-4 font-body text-neutral-500 max-w-md mx-auto leading-relaxed">
              Bộ sưu tập phụ kiện đang được cập nhật. Liên hệ trực tiếp để được tư vấn.
            </p>
            <div className="mt-8">
              <Link href="/lien-he">
                <Button size="lg">Liên hệ tư vấn</Button>
              </Link>
            </div>
            <div className="w-16 h-px bg-neutral-300 mx-auto mt-6" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
