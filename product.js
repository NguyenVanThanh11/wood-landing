const products = {
  combo: [
    {
      name: "COMBO ĐỒ THỜ CAO CẤP",
      rating: "4.9/5",
      sold: "415",
      image: "./3/z6434816518096_75ee0cbec6f35d645c0775d495092aee.jpg",
      sizes: [
        {
          size: "5 món",
          price: "3.559.000đ",
          oldPrice: "4.999.000đ",
          discount: "-29%",
        },
      ],
      description:
        "Combo: Tam cấp mặt đường kính 18cm, Đèn cao 48cm, Lọ hương, Bộ 5 cốc đựng nước đường kính 13, Đĩa mâm đường kính 32cm. Bộ đồ thờ cao cấp chế tác từ gỗ hương đá nguyên khối. Sản phẩm mang vẻ đẹp trang nghiêm, phù hợp thờ cúng tổ tiên, gia tiên.",
    },
    // Thêm các sản phẩm combo khác ở đây
  ],
  tamcap: [
    {
      name: "Tam Cấp Hình Cuốn Thư Đục Chiện Chữ Thọ Mặt Liền",
      rating: "4.7/5",
      sold: "531",
      image: "./3/z6434816514146_2642ca5138f5576e328eb398e53f8d49.jpg",
      description:
        "Tam cấp cuốn hình cuốn thư được chế tác từ gỗ hương đá nguyên khối không chấp vá đục chiện chữ thọ mặt liền với nhiều kích thước khác nhau như MẶT TO 14, 16, 18, 20",
      sizes: [
        {
          size: "Mặt to: 14",
          price: "469.000đ",
          oldPrice: "589.000đ",
          discount: "-20%",
        },
        {
          size: "Mặt to: 16",
          price: "479.000đ",
          oldPrice: "599.000đ",
          discount: "-20%",
        },
        {
          size: "Mặt to: 18",
          price: "529.000đ",
          oldPrice: "679.000đ",
          discount: "-22%",
        },
        {
          size: "Mặt to: 20",
          price: "549.000đ",
          oldPrice: "699.000đ",
          discount: "-21%",
        },
      ],
    },
  ],
  lo: [
    {
      name: "Lọ Đựng Hương",
      rating: "4.9/5",
      sold: "361",
      image: "./3/z6434816509493_d8688898092c867f98a36adea48bba0e.jpg",
      sizes: [
        {
          size: "1 đôi",
          price: "999.000đ",
          oldPrice: "1.299.000đ",
          discount: "-23%",
        },
      ],
      description:
        "Lọ đựng hương được chế tác từ gỗ hương đá nguyên khối không chấp vá, thiết kế tinh xảo phù hợp để đựng nhang/hương thờ cúng. Sản phẩm có kích thước vừa phải với 1 đôi lọ cân đối.",
    },
    // Thêm các sản phẩm bình khác ở đây
  ],
  den: [
    {
      name: "Đèn Thờ Điện",
      rating: "4.9/5",
      sold: "245",
      image: "./3/z6434816510792_dd3655e70aca6e655679967e71853974.jpg",
      sizes: [
        {
          size: "Cao: 48",
          price: "749.000đ",
          oldPrice: "990.000đ",
          discount: "-24%",
        },
      ],
      description:
        "Đèn thờ điện được làm từ  gỗ hương đá nguyên khối không chấp vá, kiểu dáng truyền thống phù hợp cho không gian thờ cúng. Sản phẩm có kích thước cao 48cm với ánh sáng ấm áp và thiết kế bền đẹp.",
    },
    // Thêm các sản phẩm bình khác ở đây
  ],
  coc: [
    {
      name: "Bộ 5 Cốc Đựng Nước (Rượu)",
      rating: "4.9/5",
      sold: "221",
      image: "./3/z6434816520466_6ec75088c0f596cada2a46df323c2f1c.jpg",
      sizes: [
        {
          size: "Đkính: 12",
          price: "899.000đ",
          oldPrice: "1.190.000đ",
          discount: "-24%",
        },
        {
          size: "Đkính: 13",
          price: "999.000đ",
          oldPrice: "1.299.000đ",
          discount: "-23%",
        },
      ],
      description:
        "Bộ 5 cốc đựng nước/rượu được chế tác tinh xảo từ chất liệu gỗ hương đá, phù hợp để dâng lễ hoặc sử dụng trong nghi thức. Sản phẩm có nhiều kích thước cao khác nhau như 12cm và 13cm.",
    },
    // Thêm các sản phẩm bình khác ở đây
  ],
  dia: [
    {
      name: "Đĩa(mâm bồng) đựng hoa quả",
      rating: "4.9/5",
      sold: "664",
      image: "./3/z6434816520598_0933c4207147d51cae5f37ab84aa1ce5.jpg",
      sizes: [
        {
          size: "Đkính: 26",
          price: "469.000đ",
          oldPrice: "589.000đ",
          discount: "-20%",
        },
        {
          size: "Đkính: 30",
          price: "529.000đ",
          oldPrice: "679.000đ",
          discount: "-22%",
        },
        {
          size: "Đkính: 32",
          price: "579.000đ",
          oldPrice: "749.000đ",
          discount: "-23%",
        },
        {
          size: "Đkính: 35",
          price: "619.000đ",
          oldPrice: "809.000đ",
          discount: "-23%",
        },
        {
          size: "Đkính: 38",
          price: "649.000đ",
          oldPrice: "849.000đ",
          discount: "-24%",
        },
        {
          size: "Đkính: 38",
          price: "679.000đ",
          oldPrice: "899.000đ",
          discount: "-24%",
        },
      ],
      description:
        "Đĩa/mâm đựng hoa quả được làm từ gỗ hương đá nguyên khối, bề mặt nhẵn mịn với nhiều kích thước mặt rộng từ 26cm đến 38cm, phù hợp để bày biện lễ vật.",
    },
    // Thêm các sản phẩm bình khác ở đây
  ],
};

// Hàm tạo card sản phẩm
function openProductPopup(product) {
  // Điền thông tin cơ bản
  document.getElementById("popupProductImage").src = product.image;
  document.getElementById("popupProductName").textContent = product.name;
  document.getElementById("popupProductRating").textContent = product.rating;
  document.getElementById(
    "popupProductSold"
  ).textContent = `(${product.sold} đã bán)`;
  document.getElementById("popupProductDescription").textContent =
    product.description || "...";

  // Tạo options kích thước
  const sizeOptions = document.getElementById("sizeOptions");
  sizeOptions.innerHTML = "";

  if (product.sizes && product.sizes.length > 0) {
    product.sizes.forEach((size, index) => {
      const sizeElement = document.createElement("button");
      sizeElement.className = `rounded border-2 py-2 text-center font-medium transition-all ${
        index === 0
          ? "border-amber-600 bg-amber-100 text-amber-800"
          : "border-gray-300 hover:border-amber-400"
      }`;
      sizeElement.innerHTML = `
        <div class="font-bold">${size.size}</div>
        <div class="text-red-600">${size.price}</div>
      `;

      sizeElement.onclick = function () {
        // Xóa active class từ tất cả các nút
        document.querySelectorAll("#sizeOptions button").forEach((btn) => {
          btn.classList.remove(
            "border-amber-600",
            "bg-amber-100",
            "text-amber-800"
          );
          btn.classList.add("border-gray-300");
        });

        // Thêm active class cho nút được chọn
        this.classList.add(
          "border-amber-600",
          "bg-amber-100",
          "text-amber-800"
        );
        this.classList.remove("border-gray-300");

        // Cập nhật giá và thông tin giảm giá
        document.getElementById("popupProductPrice").textContent = size.price;
        document.getElementById("popupProductOldPrice").textContent =
          size.oldPrice;
        document.getElementById("popupProductDiscount").textContent =
          size.discount;
      };

      sizeOptions.appendChild(sizeElement);

      // Nếu là size đầu tiên, cập nhật thông tin hiển thị ban đầu
      if (index === 0) {
        document.getElementById("popupProductPrice").textContent = size.price;
        document.getElementById("popupProductOldPrice").textContent =
          size.oldPrice;
        document.getElementById("popupProductDiscount").textContent =
          size.discount;
      }
    });
  } else {
    sizeOptions.innerHTML =
      '<div class="col-span-3 text-center py-4 text-gray-500">Sản phẩm chỉ có 1 kích thước</div>';
    // Hiển thị giá mặc định nếu không có size
    document.getElementById("popupProductPrice").textContent =
      product.price || "";
    document.getElementById("popupProductOldPrice").textContent =
      product.oldPrice || "";
    document.getElementById("popupProductDiscount").textContent =
      product.discount || "";
  }

  // Hiển thị popup
  document.getElementById("productPopup").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Hàm đóng popup
function closePopup() {
  document.getElementById("productPopup").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Hàm xử lý khi nhấn Mua ngay
function buyNow() {
  // Chuyển hướng đến form đặt hàng
  const formSection = document.getElementById("send-infor");
  formSection.scrollIntoView({ behavior: "smooth" });

  // Đóng popup
  closePopup();

  // Có thể thêm logic tự động điền sản phẩm vào form nếu cần
}

// Sửa hàm createProductCard để thêm sự kiện click mở popup
function createProductCard(product) {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-lg shadow-md relative cursor-pointer hover:shadow-lg transition-shadow";
  card.onclick = () => openProductPopup(product);

  // Hiển thị giá nhỏ nhất nếu có nhiều size
  let displayPrice = product.price;
  let displayOldPrice = product.oldPrice;
  let displayDiscount = product.discount;

  if (product.sizes && product.sizes.length > 0) {
    // Lấy giá thấp nhất để hiển thị trên card
    const minPriceSize = product.sizes.reduce((min, size) => {
      const price = parseInt(size.price.replace(/[^\d]/g, ""));
      const minPrice = parseInt(min.price.replace(/[^\d]/g, ""));
      return price < minPrice ? size : min;
    }, product.sizes[0]);

    displayPrice = minPriceSize.price;
    displayOldPrice = minPriceSize.oldPrice;
    displayDiscount = minPriceSize.discount;
  }

  card.innerHTML = `
    <img alt="${product.name}" src="${
    product.image
  }" class="w-full rounded-t-lg">
    <div class="p-4 pt-1">
      <div class="flex items-center">
        <span class="text-yellow-500"><i class="fas fa-star"></i></span>
        <span class="ml-1 text-gray-700">${product.rating}</span>
        <span class="ml-1 text-gray-500">(${product.sold})</span>
      </div>
      <h2 class="text-lg font-semibold mt-2">${product.name}</h2>
      <div class="text-red-500 text-xl font-bold mt-2">${displayPrice}</div>
      <div class="text-gray-500 line-through">${displayOldPrice}</div>
      <div class="text-blue-500 mt-2">${
        product.sizes ? product.sizes.length + " Kích thước" : "1 Kích thước"
      }</div>
      <div class="text-gray-500 mt-1">${product.sold} sản phẩm đã bán</div>
      <div class="absolute top-4 right-4 bg-red-500 text-white rounded-full px-2 py-1 text-sm">
        ${displayDiscount}
      </div>
    </div>
  `;
  return card;
}

// Hàm hiển thị sản phẩm theo danh mục (cho mobile)
function showProducts(category) {
  // Chỉ chạy trên màn hình nhỏ
  if (window.innerWidth >= 1024) return;

  // Cập nhật active tab
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("nav-link-active", "bg-yellow-400", "text-white");
    link.classList.add("bg-gray-200", "text-gray-700");
  });

  const activeLink = document.getElementById(`nav-${category}`);
  activeLink.classList.add("nav-link-active", "bg-yellow-400", "text-white");
  activeLink.classList.remove("bg-gray-200", "text-gray-700");

  // Hiển thị sản phẩm
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Xóa nội dung cũ

  // Thêm từng sản phẩm vào container
  products[category].forEach((product) => {
    container.appendChild(createProductCard(product));
  });
}

// Hàm hiển thị toàn bộ sản phẩm (cho desktop)
function showAllProducts() {
  const container = document.getElementById("all-products-container");
  container.innerHTML = ""; // Xóa nội dung cũ

  // Gộp tất cả sản phẩm từ các danh mục
  const allProducts = Object.values(products).flat();

  // Thêm từng sản phẩm vào container
  allProducts.forEach((product) => {
    container.appendChild(createProductCard(product));
  });
}

// Kiểm tra kích thước màn hình khi tải trang và khi thay đổi kích thước
function handleResponsive() {
  if (window.innerWidth >= 1024) {
    // Màn hình lớn - hiển thị tất cả sản phẩm
    document.getElementById("product-container").classList.add("hidden");
    document
      .getElementById("all-products-container")
      .classList.remove("hidden");
    showAllProducts();
  } else {
    // Màn hình nhỏ - hiển thị theo tab
    document.getElementById("product-container").classList.remove("hidden");
    document.getElementById("all-products-container").classList.add("hidden");
    showProducts("combo"); // Hiển thị tab mặc định
  }
}

// Khởi tạo
document.addEventListener("DOMContentLoaded", () => {
  handleResponsive();
  window.addEventListener("resize", handleResponsive);
});
