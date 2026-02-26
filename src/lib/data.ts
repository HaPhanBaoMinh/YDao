// ── Placeholder data for all pages ──
// In production, this would come from Sanity CMS / database.

export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  occasion: string[];
  style: string;
  color: string;
  sizes: string[];
  material: string;
  description: string;
  details: string;
  rating: number;
  reviewCount: number;
  available: boolean;
}

export interface RichText {
  text: string;
  bold?: boolean;
}

export interface BlogBlock {
  type: "paragraph" | "heading_2" | "heading_3" | "image" | "bulleted_list_item" | "divider";
  richText?: RichText[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  content?: BlogBlock[];
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

// ── Products ──

export const products: Product[] = [
  {
    slug: "ao-dai-lua-hong-phan",
    name: "Áo Dài Lụa Hồng Phấn",
    price: 850000,
    originalPrice: 1200000,
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&h=1200&fit=crop",
    ],
    occasion: ["Đám hỏi", "Lễ cưới"],
    style: "Truyền thống",
    color: "Hồng",
    sizes: ["S", "M", "L", "XL"],
    material: "Lụa tơ tằm",
    description: "Áo dài lụa hồng phấn được thiết kế tinh tế với chất liệu lụa tơ tằm, mang đến vẻ đẹp dịu dàng và sang trọng cho ngày trọng đại của bạn.",
    details: "Chất liệu lụa tơ tằm Bảo Lộc 100%, thêu tay hoa sen tinh xảo. Kèm theo quần lụa trắng và khăn vấn đồng bộ. Phom dáng ôm nhẹ, tôn dáng người mặc.",
    rating: 4.9,
    reviewCount: 24,
    available: true,
  },
  {
    slug: "ao-dai-gam-do-theu-rong-phung",
    name: "Áo Dài Gấm Đỏ Thêu Rồng Phụng",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop",
    ],
    occasion: ["Lễ cưới", "Đám hỏi"],
    style: "Truyền thống",
    color: "Đỏ",
    sizes: ["S", "M", "L"],
    material: "Gấm thêu tay",
    description: "Áo dài gấm đỏ truyền thống với họa tiết rồng phụng thêu tay công phu, biểu tượng cho sự hài hòa và may mắn trong hôn nhân.",
    details: "Gấm nhập khẩu, thêu tay rồng phụng bằng chỉ kim tuyến. Kèm mấn đội đầu và quần lụa đỏ.",
    rating: 5.0,
    reviewCount: 18,
    available: true,
  },
  {
    slug: "ao-dai-cach-tan-pastel",
    name: "Áo Dài Cách Tân Pastel",
    price: 650000,
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&h=1200&fit=crop",
    ],
    occasion: ["Bê tráp", "Chụp ảnh"],
    style: "Cách tân",
    color: "Xanh",
    sizes: ["S", "M", "L", "XL"],
    material: "Lụa organza",
    description: "Thiết kế cách tân hiện đại trên nền chất liệu lụa organza mềm mại, phù hợp cho đội bê tráp với tông màu pastel nhẹ nhàng.",
    details: "Lụa organza, phom cách tân tay lỡ, váy xòe nhẹ. Phù hợp cho đội bê tráp từ 4-12 người.",
    rating: 4.7,
    reviewCount: 31,
    available: true,
  },
  {
    slug: "ao-dai-nam-gam-xanh",
    name: "Áo Dài Nam Gấm Xanh",
    price: 900000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1200&fit=crop",
    ],
    occasion: ["Đám hỏi", "Lễ cưới"],
    style: "Truyền thống",
    color: "Xanh",
    sizes: ["M", "L", "XL"],
    material: "Gấm",
    description: "Áo dài nam gấm xanh lam dành cho chú rể hoặc đội bưng quả nam, mang phong cách lịch lãm và trang trọng.",
    details: "Gấm dày dặn, phom dáng suông thanh lịch. Kèm quần và khăn đóng.",
    rating: 4.8,
    reviewCount: 15,
    available: true,
  },
  {
    slug: "ao-dai-co-yem-trang-nga",
    name: "Áo Dài Cổ Yếm Trang Nga",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&h=1200&fit=crop",
    ],
    occasion: ["Lễ cưới", "Chụp ảnh"],
    style: "Cổ yếm",
    color: "Trắng",
    sizes: ["S", "M", "L"],
    material: "Lụa tơ tằm",
    description: "Áo dài cổ yếm mang vẻ đẹp dịu dàng, kín đáo mà quyến rũ của người phụ nữ Việt, được cắt may tinh tế trên nền lụa trắng ngà.",
    details: "Lụa tơ tằm Bảo Lộc, cổ yếm truyền thống, thêu tay hoa cúc. Kèm quần lụa trắng.",
    rating: 4.9,
    reviewCount: 20,
    available: true,
  },
  {
    slug: "ao-dai-be-trap-vang-dong",
    name: "Áo Dài Bê Tráp Vàng Đồng",
    price: 550000,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop",
    ],
    occasion: ["Bê tráp", "Đám hỏi"],
    style: "Cách tân",
    color: "Vàng",
    sizes: ["S", "M", "L", "XL"],
    material: "Lụa satin",
    description: "Áo dài satin màu vàng đồng rực rỡ, thiết kế đồng phục cho đội bê tráp, giá thuê ưu đãi khi đặt theo nhóm.",
    details: "Lụa satin, phom cách tân hiện đại, tay lỡ. Giảm 10% cho đặt từ 8 bộ trở lên.",
    rating: 4.6,
    reviewCount: 42,
    available: true,
  },
  {
    slug: "ao-dai-nhung-tim-than",
    name: "Áo Dài Nhung Tím Than",
    price: 950000,
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&h=1200&fit=crop",
    ],
    occasion: ["Lễ cưới", "Chụp ảnh"],
    style: "Truyền thống",
    color: "Tím",
    sizes: ["S", "M", "L"],
    material: "Nhung",
    description: "Áo dài nhung tím than sang trọng, chất liệu nhung mềm mịn tạo độ rủ đẹp mắt, thích hợp cho lễ cưới vào mùa thu đông.",
    details: "Nhung nhập khẩu Hàn Quốc, phom dáng truyền thống, đính kết thủ công pha lê.",
    rating: 4.8,
    reviewCount: 12,
    available: true,
  },
  {
    slug: "ao-dai-doi-cuoi-kim-tuyen",
    name: "Áo Dài Đôi Cưới Kim Tuyến",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1200&fit=crop",
    ],
    occasion: ["Lễ cưới"],
    style: "Truyền thống",
    color: "Đỏ",
    sizes: ["M", "L"],
    material: "Gấm kim tuyến",
    description: "Set áo dài đôi cưới cho cô dâu và chú rể, gấm kim tuyến rực rỡ với họa tiết thêu tay truyền thống.",
    details: "Bao gồm 1 áo dài nữ + 1 áo dài nam. Gấm kim tuyến dệt hoa văn, thêu tay rồng phụng. Kèm full phụ kiện.",
    rating: 5.0,
    reviewCount: 8,
    available: true,
  },
];

// ── Services ──

export const services: Service[] = [
  {
    slug: "bung-qua-tron-goi",
    title: "Bưng Quả Trọn Gói",
    subtitle: "Đội bưng quả chuyên nghiệp",
    description: "Đội ngũ bưng quả được đào tạo bài bản, trang phục đồng bộ, am hiểu nghi lễ truyền thống. Chúng tôi cung cấp từ 4 đến 12 đôi nam nữ tùy theo yêu cầu của gia đình.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    price: "Từ 3.500.000₫",
  },
  {
    slug: "cho-thue-ao-dai",
    title: "Cho Thuê Áo Dài",
    subtitle: "Bộ sưu tập đa dạng",
    description: "Hơn 1.200 mẫu áo dài từ truyền thống đến cách tân, cho cô dâu, chú rể, đội bê tráp và gia đình. Đủ size từ S đến XXL, đa dạng màu sắc và chất liệu.",
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&h=600&fit=crop",
    price: "Từ 500.000₫ / bộ",
  },
  {
    slug: "tron-goi-le-cuoi",
    title: "Trọn Gói Lễ Cưới",
    subtitle: "Giải pháp toàn diện",
    description: "Gói dịch vụ bao gồm đội bưng quả, áo dài cho toàn bộ gia đình, trang trí mâm quả, và tư vấn nghi lễ. Một đầu mối — trọn vẹn ngày vui.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    price: "Từ 8.000.000₫",
  },
];

// ── Blog Posts ──

export const blogPosts: BlogPost[] = [
  {
    slug: "nguon-goc-va-y-nghia-nghi-thuc-bung-qua",
    title: "Nguồn gốc và Ý nghĩa của Nghi thức Bưng Quả trong Lễ cưới Việt Nam",
    excerpt: "Trong văn hóa cưới hỏi Việt Nam, khoảnh khắc đoàn nhà trai chỉnh tề mang tráp lễ sang nhà gái không chỉ là một thủ tục — đó là lời chào trang trọng giữa hai gia đình, là dấu mốc mở đầu cho hành trình hôn nhân.",
    image: "/blog/nguon-goc-bung-qua-1.jpg",
    date: "2026-02-23",
    category: "Văn hóa cưới",
    readTime: "6 phút đọc",
    content: [
      {
        type: "paragraph",
        richText: [
          { text: "Trong văn hóa cưới hỏi Việt Nam, khoảnh khắc đoàn nhà trai chỉnh tề mang tráp lễ sang nhà gái không chỉ là một thủ tục. Đó là " },
          { text: "lời chào trang trọng giữa hai gia đình", bold: true },
          { text: ", là dấu mốc mở đầu cho hành trình hôn nhân của đôi trẻ. Dù xã hội hiện đại thay đổi nhiều, nghi thức bưng quả vẫn được gìn giữ vì giá trị tinh thần sâu sắc mà nó đại diện." },
        ],
      },
      {
        type: "heading_2",
        richText: [{ text: "Nguồn gốc của nghi thức bưng quả" }],
      },
      {
        type: "image",
        imageUrl: "/blog/nguon-goc-bung-qua-1.jpg",
        imageAlt: "Nghi thức bưng quả truyền thống trong lễ cưới Việt Nam",
      },
      {
        type: "paragraph",
        richText: [
          { text: "Nghi thức bưng quả bắt nguồn từ " },
          { text: "Lễ Nạp Tài", bold: true },
          { text: " trong phong tục cưới hỏi truyền thống Á Đông. Ngày xưa, sính lễ là cách nhà trai thể hiện thành ý, sự tôn trọng và trách nhiệm với nhà gái. Qua thời gian, hình thức có thể thay đổi, nhưng tinh thần cốt lõi vẫn còn nguyên: " },
          { text: "sự trân trọng và chính danh", bold: true },
          { text: "." },
        ],
      },
      {
        type: "paragraph",
        richText: [
          { text: "Trong dân gian, câu chuyện Sơn Tinh – Thủy Tinh (với lễ vật \"voi chín ngà, gà chín cựa, ngựa chín hồng mao\") dù chỉ là huyền thoại nhưng phản ánh một nét văn hóa quan trọng: " },
          { text: "sính lễ là biểu tượng của lòng thành, của cam kết", bold: true },
          { text: ". Từ tinh thần ấy, bưng quả ngày nay được xem là sự tiếp nối truyền thống, thể hiện sự nghiêm túc và tấm lòng kính trọng trong việc dựng vợ gả chồng." },
        ],
      },
      {
        type: "heading_2",
        richText: [{ text: "Ý nghĩa của các yếu tố trong nghi thức bưng quả" }],
      },
      {
        type: "image",
        imageUrl: "/blog/nguon-goc-bung-qua-2.png",
        imageAlt: "Mâm sính lễ và đội hình bưng quả trong đám hỏi",
      },
      {
        type: "bulleted_list_item",
        richText: [
          { text: "Mâm sính lễ", bold: true },
          { text: ": không chỉ là lễ vật mà còn là biểu tượng. Trầu cau gợi nhắc nghĩa vợ chồng thủy chung. Bánh phu thê gửi gắm ước mong hôn nhân viên mãn. Trà và rượu thể hiện sự kính trọng dâng lên tổ tiên và hai bên gia đình. Số lượng mâm quả (thường là số chẵn hoặc con số đẹp tùy vùng miền) hàm ý may mắn và đủ đầy." },
        ],
      },
      {
        type: "bulleted_list_item",
        richText: [
          { text: "Đội hình bưng quả", bold: true },
          { text: ": dàn nam thanh nữ tú trong áo dài truyền thống tạo nên sự trang trọng, đồng thời khẳng định bản sắc văn hóa Việt. Sự đồng đều về tác phong và trang phục thể hiện sự tôn trọng với buổi lễ và gia đình hai bên." },
        ],
      },
      {
        type: "bulleted_list_item",
        richText: [
          { text: "Nghi thức trao – nhận mâm quả", bold: true },
          { text: ": là khoảnh khắc kết nối. Việc trao nhau mâm lễ không đơn thuần là trao quà, mà là sự đồng thuận và gắn kết chính thức giữa hai gia đình cho tương lai của đôi trẻ." },
        ],
      },
      {
        type: "heading_2",
        richText: [{ text: "Giá trị trong đời sống hiện đại" }],
      },
      {
        type: "paragraph",
        richText: [
          { text: "Ngày nay, nhiều nghi thức có thể được giản lược, nhưng bưng quả vẫn thường được xem là phần trang trọng nhất của lễ ăn hỏi. Nghi thức này giúp các cặp đôi thể hiện sự tôn trọng gia đình, gìn giữ truyền thống và khẳng định một khởi đầu hôn nhân được chuẩn bị chỉn chu." },
        ],
      },
      {
        type: "paragraph",
        richText: [
          { text: "Không chỉ mang ý nghĩa tinh thần, bưng quả còn tạo nên những khoảnh khắc đẹp và hình ảnh đáng nhớ trong ngày trọng đại. Sự chỉn chu trong từng mâm lễ, trang phục và bước di chuyển làm buổi lễ thêm long trọng, đồng thời thể hiện sự trân trọng dành cho hạnh phúc lứa đôi." },
        ],
      },
      {
        type: "heading_2",
        richText: [{ text: "Lời kết" }],
      },
      {
        type: "paragraph",
        richText: [
          { text: "Bưng quả không chỉ là một thủ tục cưới hỏi, mà là " },
          { text: "biểu tượng của sự tôn trọng và hòa hợp giữa hai gia đình", bold: true },
          { text: ". Dù thời đại có đổi thay, những giá trị truyền thống này vẫn là nền tảng vững chắc cho một mái ấm được chúc phúc đủ đầy." },
        ],
      },
    ],
  },
  {
    slug: "cach-chon-ao-dai-phu-hop-cho-ngay-cuoi",
    title: "Cách chọn áo dài phù hợp cho ngày cưới",
    excerpt: "Từ chất liệu, màu sắc đến kiểu dáng — hướng dẫn toàn diện giúp cô dâu, chú rể và gia đình chọn được bộ áo dài ưng ý nhất cho ngày trọng đại.",
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&h=500&fit=crop",
    date: "2026-02-05",
    category: "Hướng dẫn",
    readTime: "7 phút đọc",
  },
  {
    slug: "bung-qua-bao-nhieu-mam-la-du",
    title: "Bưng quả bao nhiêu mâm là đủ? Giải đáp chi tiết",
    excerpt: "Tùy theo phong tục từng vùng miền, số mâm quả có thể khác nhau. Bài viết giải thích ý nghĩa của từng số lượng mâm và giúp bạn lựa chọn phù hợp.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop",
    date: "2026-01-28",
    category: "Kiến thức",
    readTime: "6 phút đọc",
  },
  {
    slug: "xu-huong-ao-dai-cuoi-2026",
    title: "Xu hướng áo dài cưới 2026: Thanh lịch & hiện đại",
    excerpt: "Năm 2026 chứng kiến sự trở lại mạnh mẽ của áo dài cưới truyền thống kết hợp với kỹ thuật đính kết hiện đại, tạo nên những tác phẩm vừa cổ điển vừa thời thượng.",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=500&fit=crop",
    date: "2026-01-20",
    category: "Xu hướng",
    readTime: "4 phút đọc",
  },
  {
    slug: "mau-sac-ao-dai-cuoi-theo-phong-thuy",
    title: "Chọn màu áo dài cưới theo phong thủy ngũ hành",
    excerpt: "Mỗi người có một mệnh khác nhau — Kim, Mộc, Thủy, Hỏa, Thổ. Việc chọn màu áo dài phù hợp không chỉ đẹp mà còn mang lại may mắn cho đôi uyên ương.",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&h=500&fit=crop",
    date: "2026-01-15",
    category: "Phong thủy",
    readTime: "5 phút đọc",
  },
  {
    slug: "nghi-thuc-dam-hoi-mien-nam",
    title: "Nghi thức đám hỏi miền Nam: Từ A đến Z",
    excerpt: "Hướng dẫn chi tiết toàn bộ nghi thức đám hỏi theo phong tục miền Nam, từ chuẩn bị mâm quả, rước dâu đến lễ lên đèn và tiệc mừng.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop",
    date: "2026-01-10",
    category: "Văn hóa cưới",
    readTime: "8 phút đọc",
  },
];

// ── Testimonials ──

export const testimonials: Testimonial[] = [
  {
    name: "Chị Nguyễn Thị Minh Anh",
    location: "Q.7, TP. Hồ Chí Minh",
    quote: "Đội bưng quả rất chuyên nghiệp và đẹp đôi. Áo dài được giặt ủi sạch sẽ, giao đúng hẹn. Gia đình hai bên đều rất hài lòng với dịch vụ của YDao.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Anh Trần Văn Hoàng",
    location: "Q. Bình Thạnh, TP. Hồ Chí Minh",
    quote: "Mình đặt trọn gói lễ cưới và rất ấn tượng. Đội ngũ tư vấn nhiệt tình, hiểu biết về nghi lễ. Áo dài đôi cưới đẹp xuất sắc, ai cũng khen.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Chị Lê Thị Hồng Nhung",
    location: "Q. Tân Bình, TP. Hồ Chí Minh",
    quote: "Thuê áo dài cho cả đội bê tráp 10 người, tất cả đều vừa vặn và rất đẹp. Giá cả hợp lý, dịch vụ chu đáo từ lúc tư vấn đến lúc trả đồ.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
];

// ── Team Members ──

export const teamMembers: TeamMember[] = [
  {
    name: "Nguyễn Thanh Tâm",
    role: "Người sáng lập & Giám đốc sáng tạo",
    bio: "Với hơn 10 năm kinh nghiệm trong ngành thời trang áo dài và tổ chức lễ cưới truyền thống, chị Tâm mang đến tầm nhìn kết hợp di sản văn hóa với thẩm mỹ đương đại.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Trần Minh Đức",
    role: "Quản lý vận hành",
    bio: "Anh Đức đảm bảo mọi đơn hàng được xử lý chu đáo từ khâu tư vấn, chuẩn bị trang phục đến điều phối đội bưng quả trong ngày lễ.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Phạm Thị Mai Lan",
    role: "Chuyên viên tư vấn nghi lễ",
    bio: "Chị Mai Lan am hiểu sâu sắc phong tục cưới hỏi ba miền, luôn sẵn sàng tư vấn và đồng hành cùng các gia đình trong ngày trọng đại.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
  },
];

// ── Stats ──

export const stats = [
  { value: "500+", label: "Lễ cưới đã phục vụ" },
  { value: "1,200+", label: "Áo dài trong kho" },
  { value: "98%", label: "Khách hài lòng" },
  { value: "5+", label: "Năm kinh nghiệm" },
];

// ── Process Steps ──

export const processSteps = [
  {
    step: 1,
    title: "Tư vấn & Đặt lịch",
    description: "Liên hệ với chúng tôi qua điện thoại, Zalo hoặc đến trực tiếp cửa hàng. Chúng tôi sẽ lắng nghe nhu cầu và tư vấn gói dịch vụ phù hợp nhất.",
  },
  {
    step: 2,
    title: "Chọn áo dài",
    description: "Đến showroom thử và chọn áo dài cho cô dâu, chú rể, đội bê tráp và gia đình. Chúng tôi hỗ trợ phối màu và chọn size chuẩn.",
  },
  {
    step: 3,
    title: "Chuẩn bị & Tổng duyệt",
    description: "Trang phục được giặt ủi cẩn thận, đóng gói chuyên nghiệp. Đội bưng quả được hướng dẫn nghi lễ và tổng duyệt trước ngày trọng đại.",
  },
  {
    step: 4,
    title: "Ngày trọng đại",
    description: "Mọi thứ đã sẵn sàng — đội bưng quả có mặt đúng giờ, trang phục hoàn hảo. Bạn chỉ cần tận hưởng khoảnh khắc hạnh phúc nhất.",
  },
];
