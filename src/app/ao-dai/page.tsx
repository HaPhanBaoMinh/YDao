import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animation/FadeIn";

export const metadata: Metadata = {
  title: "Cho Thuê Áo Dài — Bộ Sưu Tập Đa Dạng",
  description:
    "Hơn 1.200 mẫu áo dài cho thuê từ truyền thống đến cách tân. Áo dài cô dâu, chú rể, bê tráp và gia đình.",
};

export default function AoDaiCatalogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Breadcrumb items={[{ label: "Áo dài" }]} />

      {/* Hero */}
      <div className="text-center mb-16 lg:mb-20">
        <FadeIn delay={100} duration={1000} distance={40}>
          <h1 className="font-heading text-h1 text-neutral-900">
            Áo Dài
          </h1>
          <p className="mt-4 font-body text-neutral-500 max-w-lg mx-auto">
            Hơn 1.200 mẫu áo dài sẵn sàng cho ngày trọng đại.
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
              Bộ sưu tập áo dài đang được cập nhật. Liên hệ trực tiếp để được tư vấn
              và xem mẫu tại cửa hàng.
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
