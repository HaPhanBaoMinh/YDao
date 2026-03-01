import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn, Stagger } from "@/components/animation/FadeIn";
import { Parallax } from "@/components/animation/Parallax";
import { stats } from "@/lib/data";
import { basePath } from "@/lib/config";

export const metadata: Metadata = {
  title: "Về Chúng Tôi — Câu Chuyện Của YDao",
  description:
    "YDao ra đời từ tình yêu với vẻ đẹp truyền thống của lễ cưới Việt Nam. Tìm hiểu câu chuyện, sứ mệnh và đội ngũ của chúng tôi.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-36 text-center">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
          <FadeIn delay={100} direction="none" duration={1000}>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-body mb-6">
              Về YDao
            </p>
          </FadeIn>
          <FadeIn delay={300} duration={1000} distance={40}>
            <h1 className="font-heading text-h1 text-neutral-900">
              Câu Chuyện 
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Editorial frame */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Parallax speed={0.06}>
            <FadeIn duration={1200}>
              <div className="relative aspect-[16/7] overflow-hidden hover-scale">
                <Image
                  src={`${basePath}/ve-chung-toi.jpg`}
                  alt="YDao — Câu chuyện"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </FadeIn>
          </Parallax>
        </div>
      </section>

      {/* Letter */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-12 text-center">
          <FadeIn direction="none" duration={900}>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-body mb-8">
              Thư gửi bạn
            </p>
          </FadeIn>
          <FadeIn delay={200} duration={1000}>
            <div className="space-y-6 font-body text-neutral-500 leading-relaxed text-lg">
              <p>
                YDao ra đời từ tình yêu với vẻ đẹp truyền thống của lễ cưới
                Việt Nam — nơi mỗi chiếc áo dài, mỗi mâm quả đều mang trong
                mình câu chuyện về tình yêu, sự kính trọng và lời hứa gắn kết
                hai gia đình.
              </p>
              <p>
                Chúng tôi tin rằng ngày cưới không chỉ là sự kiện — đó là di
                sản văn hóa được truyền từ thế hệ này sang thế hệ khác. Mỗi
                đường kim, mỗi mũi chỉ trên tà áo dài, mỗi quả trầu cau
                được xếp đặt cẩn thận, đều là cách chúng ta giữ gìn và tôn
                vinh những giá trị thiêng liêng nhất.
              </p>
              <p>
                Với hơn 5 năm kinh nghiệm và hơn 500 lễ cưới đã đồng hành,
                YDao không ngừng nâng cao chất lượng dịch vụ — để mỗi ngày
                trọng đại đều trọn vẹn và đáng nhớ.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <Parallax speed={0.05}>
              <FadeIn direction="left" distance={40} duration={1000}>
                <div className="relative aspect-[4/5] overflow-hidden hover-scale">
                  <Image
                    src={`${basePath}/su-menh.jpg`}
                    alt="Sứ mệnh YDao"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </Parallax>
            <FadeIn direction="right" distance={40} duration={1000} delay={200}>
              <div className="lg:pl-8">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-body">
                  Sứ mệnh
                </p>
                <h2 className="mt-4 font-heading text-h2 text-neutral-900">
                  Nâng Niu Trọn Vẹn
                  <br />Ngày Trọng Đại
                </h2>
                <div className="mt-8 space-y-5 font-body text-neutral-500 leading-relaxed">
                  <p>
                    Sứ mệnh của YDao là mang đến trải nghiệm lễ cưới truyền
                    thống trọn vẹn — nơi mà mỗi chi tiết được chăm chút bằng
                    sự am hiểu văn hóa sâu sắc và thẩm mỹ tinh tế.
                  </p>
                  <p>
                    Chúng tôi không chỉ cung cấp dịch vụ — chúng tôi đồng hành
                    cùng bạn và gia đình, từ khâu tư vấn chọn áo dài, sắp xếp
                    mâm quả, đến từng bước trong nghi lễ đám hỏi.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <FadeIn>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-body">
                  Giá trị cốt lõi
                </p>
                <h2 className="mt-4 font-heading text-h2 text-neutral-900">
                  Truyền Thống — Tận Tâm — Tinh Tế
                </h2>
              </FadeIn>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Truyền thống",
                    desc: "Am hiểu sâu sắc phong tục cưới hỏi ba miền. Mỗi nghi lễ được thực hiện đúng theo truyền thống.",
                  },
                  {
                    title: "Tận tâm",
                    desc: "Từ cuộc gọi tư vấn đầu tiên đến khoảnh khắc cuối cùng, chúng tôi luôn đồng hành trong từng chi tiết.",
                  },
                  {
                    title: "Tinh tế",
                    desc: "Áo dài được chọn lựa kỹ càng, mâm quả sắp xếp nghệ thuật — mọi thứ đều hướng đến sự hoàn hảo.",
                  },
                ].map((value, i) => (
                  <FadeIn key={value.title} delay={i * 150} distance={20}>
                    <div className="flex gap-5">
                      <div className="w-px bg-secondary-400 shrink-0 mt-1" />
                      <div>
                        <h3 className="font-body text-base font-medium text-neutral-900">
                          {value.title}
                        </h3>
                        <p className="mt-1.5 font-body text-base text-neutral-500 leading-relaxed">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            <Parallax speed={0.05}>
              <FadeIn direction="right" distance={40} duration={1000}>
                <div className="relative aspect-[4/5] overflow-hidden hover-scale">
                  <Image
                    src={`${basePath}/gia-tri.jpg`}
                    alt="Đội ngũ YDao trong trang phục áo dài"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-neutral-200 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4" stagger={100}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-5xl text-white">
                  {stat.value}
                </p>
                <p className="mt-2 font-body text-base text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team — hidden temporarily */}

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-12 text-center">
          <FadeIn duration={1000}>
            <h2 className="font-heading text-h2 text-neutral-900">
              Sẵn Sàng Cho Ngày Trọng Đại?
            </h2>
            <p className="mt-4 font-body text-neutral-500">
              Hãy để YDao đồng hành cùng bạn.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/lien-he">
                <Button size="lg">
                  Liên hệ tư vấn
                </Button>
              </Link>
              <Link href="/ao-dai">
                <Button variant="outline" size="lg">
                  Xem áo dài
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function SectionHeadingInline({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-body mb-4">
        {label}
      </p>
      <h2 className="font-heading text-h2 text-neutral-900">{title}</h2>
    </div>
  );
}
