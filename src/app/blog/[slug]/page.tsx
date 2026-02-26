import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FadeIn, Stagger } from "@/components/animation/FadeIn";
import { blogPosts, type BlogBlock, type RichText } from "@/lib/data";
import { basePath } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function RichTextRenderer({ segments }: { segments: RichText[] }) {
  return (
    <>
      {segments.map((seg, i) =>
        seg.bold ? (
          <strong key={i}>{seg.text}</strong>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

function BlockRenderer({ block, basePath }: { block: BlogBlock; basePath: string }) {
  switch (block.type) {
    case "heading_2":
      return (
        <h2 className="font-heading text-h2 text-neutral-900 mt-14 mb-5 pb-3 border-b border-neutral-200">
          {block.richText && <RichTextRenderer segments={block.richText} />}
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="font-heading text-h3 text-neutral-900 mt-10 mb-4">
          {block.richText && <RichTextRenderer segments={block.richText} />}
        </h3>
      );
    case "paragraph":
      return (
        <p>
          {block.richText && <RichTextRenderer segments={block.richText} />}
        </p>
      );
    case "bulleted_list_item":
      return null;
    case "image":
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
            <Image
              src={`${basePath}${block.imageUrl}`}
              alt={block.imageAlt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          {block.imageAlt && (
            <figcaption className="mt-3 text-center text-sm text-neutral-400 font-body">
              {block.imageAlt}
            </figcaption>
          )}
        </figure>
      );
    case "divider":
      return <hr />;
    default:
      return null;
  }
}

function groupBulletItems(blocks: BlogBlock[]): (BlogBlock | BlogBlock[])[] {
  const grouped: (BlogBlock | BlogBlock[])[] = [];
  let currentBullets: BlogBlock[] = [];

  for (const block of blocks) {
    if (block.type === "bulleted_list_item") {
      currentBullets.push(block);
    } else {
      if (currentBullets.length > 0) {
        grouped.push(currentBullets);
        currentBullets = [];
      }
      grouped.push(block);
    }
  }
  if (currentBullets.length > 0) {
    grouped.push(currentBullets);
  }
  return grouped;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const hasContent = post.content && post.content.length > 0;

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="mx-auto max-w-2xl pb-16 lg:pb-24">
        {/* Header */}
        <FadeIn duration={900}>
          <div className="mb-12">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-body uppercase tracking-wider mb-6">
              <span>{post.category}</span>
              <span className="w-4 h-px bg-neutral-300" />
              <span>{post.date}</span>
              <span className="w-4 h-px bg-neutral-300" />
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-heading text-h1 text-neutral-900 leading-tight">
              {post.title}
            </h1>
            <p className="mt-6 font-body text-xl text-neutral-500 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </FadeIn>

        {/* Cover image */}
        <FadeIn delay={200} duration={1000}>
          {post.image.startsWith("/blog/") ? (
            <div className="relative aspect-[2/1] w-full overflow-hidden bg-neutral-100 mb-12">
              <Image
                src={`${basePath}${post.image}`}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          ) : (
            <div className="aspect-[2/1] bg-neutral-100 flex items-center justify-center mb-12 hover-scale">
              <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-body">
                {post.category}
              </span>
            </div>
          )}
        </FadeIn>

        {/* Article Body */}
        <FadeIn delay={300} duration={900}>
          <div className="prose prose-neutral max-w-none font-body prose-headings:font-heading prose-headings:font-normal prose-headings:tracking-tight prose-a:text-neutral-900 prose-a:underline-offset-4 prose-img:rounded-none">
            {hasContent ? (
              groupBulletItems(post.content!).map((item, i) => {
                if (Array.isArray(item)) {
                  return (
                    <ul key={i}>
                      {item.map((bullet, j) => (
                        <li key={j}>
                          {bullet.richText && (
                            <RichTextRenderer segments={bullet.richText} />
                          )}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <BlockRenderer key={i} block={item} basePath={basePath} />;
              })
            ) : (
              <>
                <p>
                  Trong văn hóa cưới hỏi Việt Nam, mỗi nghi lễ đều mang trong mình
                  những ý nghĩa sâu sắc về tình yêu, lòng hiếu thảo và sự kết nối
                  giữa hai gia đình.
                </p>
                <h2 className="font-heading text-h2 text-neutral-900 mt-14 mb-5 pb-3 border-b border-neutral-200">Ý Nghĩa Của Truyền Thống</h2>
                <p>
                  Bài viết đang được cập nhật nội dung...
                </p>
              </>
            )}
          </div>
        </FadeIn>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-body text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Quay lại Blog
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <div className="border-t border-neutral-200 py-16 lg:py-20">
        <FadeIn>
          <h2 className="font-heading text-h2 text-neutral-900 mb-12">
            Bài Viết Liên Quan
          </h2>
        </FadeIn>
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3" stagger={120}>
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/2] bg-neutral-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-neutral-150 hover-scale overflow-hidden">
                {p.image.startsWith("/blog/") ? (
                  <Image
                    src={`${basePath}${p.image}`}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-body">
                    {p.category}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-body uppercase tracking-wider mb-2">
                <span>{p.category}</span>
                <span className="w-4 h-px bg-neutral-300" />
                <span>{p.readTime}</span>
              </div>
              <h3 className="font-heading text-xl text-neutral-900 group-hover:text-secondary-600 transition-colors leading-snug line-clamp-2">
                {p.title}
              </h3>
            </Link>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
