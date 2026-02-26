# YDao

Website dịch vụ bưng quả và cho thuê áo dài cưới tại TP. Hồ Chí Minh.

> *"Nâng niu trọn vẹn ngày trọng đại"*

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

## Cấu trúc

```
src/
├── app/           # Pages (home, ao-dai, blog, lien-he, ve-chung-toi...)
├── components/     # UI, layout, product, animation
└── lib/           # Data, utils
```

## Typography

- **Heading:** Cormorant Garamond
- **Body:** Nunito Sans

## CI/CD

| Branch | Môi trường | Deploy |
|--------|------------|--------|
| `dev`  | Test       | GitHub Pages (`username.github.io/YDao`) |
| `main` | Production | Cloudflare Pages (`aodaiydao.com`) |

**Cấu hình GitHub Secrets** (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_API_TOKEN` — Token từ Cloudflare (My Profile → API Tokens → Create Token → Edit Cloudflare Workers)
- `CLOUDFLARE_ACCOUNT_ID` — Xem ở Cloudflare Dashboard (bên phải sidebar)

**Cloudflare Pages:** Tạo project `ydao` và thêm custom domain `aodaiydao.com`.

---

Chi tiết phân tích & kế hoạch: xem `ANALYSIS_AND_PLAN.md`
