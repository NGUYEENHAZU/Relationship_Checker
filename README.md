#  Relationship Checker — Reality Check Detector

[![GitHub Profile](https://img.shields.io/badge/Author-NGUYEENHAZU-181717?style=flat&logo=github)](https://github.com/NGUYEENHAZU)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript_ES6+-F7DF1E?logo=javascript&logoColor=black)](#)

> **Tagline:** Ứng dụng Tarot thực tế giúp nhận diện tín hiệu bất ổn (Red Flags / Black Flags), bóc tách động cơ ngầm và bảo vệ ranh giới cá nhân trong các mối quan hệ.

---

##  1. Tổng quan dự án (Overview)

- **Vấn đề giải quyết:** Thay vì những lời bói toán chung chung hoặc văn phong huyền bí, ứng dụng tiếp cận Tarot như một công cụ phản tư (*self-reflection*) và kiểm tra thực tế (*reality check*).
- **Mục tiêu:** Giúp người dùng tỉnh táo đánh giá các mối quan hệ (tình cảm, công việc, bạn bè) dựa trên việc đối chiếu bối cảnh thực tế với thông điệp cảnh báo từ các lá bài.
- **Đối tượng:** Người đang phân vân, bất an trước các dấu hiệu mập mờ, thao túng tâm lý hoặc thay đổi đột ngột từ đối phương.

---

##  2. Luồng trải nghiệm chính (Core User Flow)

### Bước 1: Thiết lập bối cảnh (Context Setup)
- **Chọn loại quan hệ:**
  - Mới tìm hiểu / Hẹn hò
  - Người yêu chính thức
  - Mập mờ (Situationship)
  - Đối tác / Đồng nghiệp công việc
- **Gắn thẻ tín hiệu nghi ngờ (Quick Tags):**
  - *Ghosting:* Biến mất đột ngột không lý do.
  - *Love bombing:* Dồn dập tấn công tình cảm, hứa hẹn xa vời khi chưa hiểu rõ nhau.
  - *Gaslighting:* Nói một đằng làm một nẻo, khiến bạn nghi ngờ chính cảm nhận của mình.
  - *Financial / Work breaches:* Thất hứa về tài chính, công việc hoặc lợi dụng công sức.
- **Ghi chú cá nhân:** Ô nhập tự do 1 câu ngắn gọn mô tả sự việc khiến bạn bất an.

### Bước 2: Chọn trải bài & Thao tác rút (The Draw)
- **Các gói trải bài:**
  - **Soi nhanh (3 lá):** Bề nổi — Góc khuất — Ranh giới cần đặt.
  - **Bóc tách sâu (5 lá):** Hiện trạng — Động cơ ngầm — Điểm mù bản thân — Rủi ro dài hạn — Lối thoát.
- **Tương tác trực quan:**
  - Hiệu ứng xáo bài mượt mà.
  - Chạm / vuốt để tự tay lật bài.
  - Tự động ghi nhận chiều **Xuôi (Upright)** và **Ngược (Reversed)** của từng lá bài.

### Bước 3: Báo cáo thực tế (Reality Check Report)
- **Thang đo rủi ro (Flag Meter):**
  - 🟢 **Green flag (Cờ xanh):** Dấu hiệu tích cực, cho thấy mối quan hệ lành mạnh, an toàn và bền vững.
    - *Dấu hiệu:* Lắng nghe chân thành, tôn trọng ranh giới cá nhân, biết nhận lỗi, giao tiếp cởi mở và ủng hộ sự phát triển của bạn.
  - 🟡 **Yellow flag (Cờ vàng):** Tín hiệu cần chậm lại và cẩn trọng quan sát, chưa đến mức độc hại nhưng có thể tiềm ẩn rắc rối trong tương lai.
    - *Dấu hiệu:* Chưa giỏi thể hiện cảm xúc, có một số thói quen sinh hoạt khác biệt lớn, hoặc chưa dứt khoát với quá khứ.
  - 🔴 **Red flag (Cờ đỏ):** Dấu hiệu cảnh báo nguy hiểm, cho thấy mối quan hệ có thể độc hại, thao túng hoặc bạo hành tinh thần.
    - *Dấu hiệu:* Kiểm soát quá mức, ghen tuông vô lý, hay đổ lỗi, thiếu tôn trọng và cô lập bạn khỏi bạn bè, người thân.
  - ⚫ **Black flag (Cờ đen):** Dấu hiệu cực kỳ nguy hiểm và độc hại nghiêm trọng, đe dọa trực tiếp đến sự an toàn về thể chất lẫn tinh thần, cần chấm dứt ngay lập tức.
    - *Dấu hiệu:* Bạo lực, thao túng tâm lý nặng nề (gaslighting), cô lập hoàn toàn và tước đoạt quyền tự do cá nhân.
- **Phân tích trực diện:**
  - Đối chiếu trực tiếp ý nghĩa lá bài với các `Quick Tags` đã chọn ở Bước 1.
  - Chỉ rõ: Đối phương đang che giấu điều gì? Bản thân bạn đang tự lừa dối mình ở điểm nào?
- **Lời khuyên hành động (Actionable Advice):**
  - Đưa ra 1–2 việc cụ thể cần làm ngay (ví dụ: đặt câu hỏi kiểm chứng, tạm dừng chia sẻ thông tin/tiền bạc, thiết lập ranh giới rõ ràng).

---

##  3. Công nghệ sử dụng (Tech Stack)

- **Core:** JavaScript (ES6+)
- **Giao diện:** HTML5, CSS3 / Tailwind CSS
- **Hoạt ảnh:** CSS 3D Transforms / Canvas API (cho hiệu ứng chia và lật bài)
- **Dữ liệu:** `cards.json` (Dữ liệu 78 lá Tarot được biên soạn theo góc nhìn Red Flag & Reality Check)

---

##  4. Cấu trúc thư mục (Project Structure)

```text
Relationship_Checker/
├── index.html              # Giao diện chính
├── css/
│   ├── style.css           # Giao diện tổng thể
│   └── card-effects.css    # Hoạt ảnh 3D lật/rút bài
├── js/
│   ├── app.js              # Khởi tạo và điều hướng luồng
│   ├── context.js          # Xử lý chọn quan hệ & quick tags (Bước 1)
│   ├── deck.js             # Logic xáo bài, rút bài xuôi/ngược (Bước 2)
│   ├── analyzer.js         # Thuật toán tính Flag Meter & phân tích (Bước 3)
│   └── data/
│       └── cards.json      # Bộ dữ liệu 78 lá bài
└── assets/
    └── images/
        ├── cards/              # Hình ảnh lá bài
        │   ├── Major_Arcana/   # 22 lá Ẩn chính
        │   └── Minor_Arcana/   # 56 lá Ẩn phụ
        │       ├── Cups/       # 14 lá
        │       ├── Pentacles/  # 14 lá
        │       ├── Swords/     # 14 lá
        │       └── Wands/      # 14 lá
        ├── flags/              # Icon các mức cờ: Green, Yellow, Red, Black
        └── icons/              # Biểu tượng điều hướng và giao diện