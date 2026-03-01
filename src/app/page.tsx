import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { FadeIn, Stagger } from "@/components/animation/FadeIn";
import { Parallax } from "@/components/animation/Parallax";
import { processSteps, testimonials, blogPosts } from "@/lib/data";
import { basePath } from "@/lib/config";

export default function HomePage() {
  const publishedPosts = blogPosts.filter((p) => p.content && p.content.length > 0);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative py-22 lg:py-38 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={`${basePath}/hero-bg.jpg`}
            alt="Hero background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/30 sm:from-white/90 sm:via-white/60 sm:to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-xl text-left">
            <FadeIn delay={100} direction="none" duration={1000}>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-secondary-500 mb-6">
                Dịch vụ cưới hỏi
              </p>
            </FadeIn>
            <FadeIn delay={250} duration={1000} distance={40}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-[1.1]">
                Trọn vẹn lễ nghĩa,
                <br />
                trọn vẹn yêu thương
              </h1>
            </FadeIn>
            <FadeIn delay={450} duration={900}>
              <p className="mt-8 font-body text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-xl">
                Dịch vụ bưng quả chuyên nghiệp và cho thuê áo dài cưới,
                nâng niu từng khoảnh khắc trong ngày trọng đại.
              </p>
            </FadeIn>
            <FadeIn delay={600} duration={900}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/lien-he" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto">
                    Đặt lịch tư vấn
                  </Button>
                </Link>
                <Link href="/ao-dai" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Khám phá áo dài
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ EDITORIAL IMAGE FRAME — hidden temporarily ═══ */}

      {/* ═══ PRODUCT CATEGORIES — hidden temporarily (chưa có sản phẩm) ═══ */}

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <SectionHeading
              title="Quy Trình"
              subtitle="4 bước đơn giản cho ngày trọng đại trọn vẹn."
            />
          </FadeIn>

          <Stagger className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4" stagger={120}>
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <span className="font-heading text-5xl text-neutral-300">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-xl text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-base text-neutral-500 font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ FEATURED PRODUCTS — hidden temporarily (chưa có sản phẩm) ═══ */}

      {/* ═══ BRAND STORY ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200 bg-neutral-100 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <Parallax speed={0.05}>
              <FadeIn direction="left" distance={40} duration={1000}>
                <div className="relative aspect-[4/5] overflow-hidden hover-scale">
                  <Image
                    src={`${basePath}/cau-chuyen.jpg`}
                    alt="Đội ngũ YDao trong trang phục áo dài truyền thống"
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
                  Về YDao
                </p>
                <h2 className="mt-4 font-heading text-h2 text-neutral-900">
                  Nơi truyền thống
                  <br />gặp gỡ yêu thương
                </h2>
                <div className="mt-8 space-y-5 font-body text-neutral-500 leading-relaxed">
                  <p>
                    YDao ra đời từ tình yêu với vẻ đẹp truyền thống của lễ cưới
                    Việt Nam — nơi mỗi chiếc áo dài, mỗi mâm quả đều mang trong
                    mình câu chuyện về tình yêu và lời hứa gắn kết.
                  </p>
                  <p>
                    Chúng tôi tin rằng ngày cưới không chỉ là sự kiện — đó là di
                    sản văn hóa được truyền từ thế hệ này sang thế hệ khác.
                  </p>
                </div>
                <Link href="/ve-chung-toi" className="mt-8 inline-block">
                  <Button variant="outline">
                    Đọc thêm <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <SectionHeading
              title="Khách Hàng Nói Gì"
              subtitle="Niềm vui của khách hàng là động lực lớn nhất của chúng tôi."
            />
          </FadeIn>

          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={120}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-8 border border-neutral-200 hover-lift"
              >
                <p className="font-body text-base text-neutral-600 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-base font-medium text-neutral-900 font-body">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-400 font-body mt-0.5">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      {publishedPosts.length > 0 && (
        <section className="py-24 lg:py-32 border-t border-neutral-200 bg-neutral-100">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <FadeIn>
              <div className="flex items-end justify-between mb-16">
                <SectionHeading
                  title="Blog"
                  subtitle="Kiến thức về cưới hỏi, áo dài và văn hóa truyền thống."
                  align="left"
                  className="mb-0"
                />
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-2 text-sm font-body text-neutral-500 hover:text-neutral-900 transition-colors arrow-slide"
                >
                  Xem tất cả <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </FadeIn>

            <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={120}>
              {publishedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/2] bg-white flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-neutral-50 hover-scale overflow-hidden">
                      {post.image.startsWith("/blog/") ? (
                        <Image
                          src={`${basePath}${post.image}`}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-body">
                          {post.category}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-neutral-400 font-body uppercase tracking-wider mb-2">
                      <span>{post.category}</span>
                      <span className="w-4 h-px bg-neutral-300" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-heading text-xl text-neutral-900 group-hover:text-secondary-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ═══ CTA ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 text-center">
          <FadeIn duration={1000}>
            <h2 className="font-heading text-h2 text-neutral-900">
              Nhận tư vấn miễn phí
            </h2>
            <p className="mt-4 font-body text-neutral-500 max-w-md mx-auto leading-relaxed">
              Để lại email, chúng tôi sẽ liên hệ tư vấn gói dịch vụ phù hợp
              nhất cho ngày trọng đại của bạn.
            </p>
            <div className="mt-10">
              <NewsletterForm variant="dark" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
