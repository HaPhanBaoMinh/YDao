"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || "";

const SERVICES = [
  "Bưng quả trọn gói",
  "Áo dài cô dâu",
  "Áo dài bê tráp",
  "Phụ kiện cưới",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const date = formData.get("date") as string;
    const message = formData.get("message") as string;
    const services = formData.getAll("services") as string[];

    const embed = {
      title: "📩 Yêu cầu tư vấn mới",
      color: 0x2f855a,
      fields: [
        { name: "Họ và tên", value: name, inline: true },
        { name: "Số điện thoại", value: phone, inline: true },
        { name: "Email", value: email },
        ...(date ? [{ name: "Ngày dự kiến", value: date }] : []),
        ...(services.length > 0
          ? [{ name: "Dịch vụ quan tâm", value: services.join(", ") }]
          : []),
        ...(message ? [{ name: "Lời nhắn", value: message }] : []),
      ],
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ embeds: [embed] }),
      });

      if (res.ok) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-2 font-body">
            Họ và tên *
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Nguyễn Văn A"
            className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base font-body text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-2 font-body">
            Số điện thoại *
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="0901 234 567"
            className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base font-body text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-2 font-body">
          Email
          </label>
          <input
          name="email"
          type="email"
          placeholder="email@example.com"
          className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base font-body text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-2 font-body">
          Ngày dự kiến tổ chức
        </label>
        <input
          name="date"
          type="date"
          className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base font-body text-neutral-900 focus:border-neutral-900 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-3 font-body">
          Dịch vụ quan tâm
        </label>
        <div className="grid grid-cols-2 gap-3">
          {SERVICES.map((service) => (
            <label
              key={service}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                name="services"
                value={service}
                className="h-4 w-4 rounded-none border-neutral-300 text-neutral-900 focus:ring-neutral-900"
              />
              <span className="text-base text-neutral-600 font-body group-hover:text-neutral-900 transition-colors">
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-2 font-body">
          Lời nhắn
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Chia sẻ thêm về ngày cưới của bạn..."
          className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base font-body text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
        />
      </div>

      <Button
        size="lg"
        className="w-full mt-2"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
      </Button>

      {status === "success" && (
        <p className="text-center text-sm text-green-600 font-body">
          Gửi thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-600 font-body">
          Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua điện thoại.
        </p>
      )}
    </form>
  );
}
