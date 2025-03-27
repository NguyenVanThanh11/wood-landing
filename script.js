//
// Lấy danh sách sản phẩm từ biến products
const allProducts = Object.values(products).flat();
const productNames = allProducts.map((product) => product.name);

// Danh sách tên người Việt (giữ nguyên)
const vietnameseNames = [
  "An Nhiên",
  "Ánh Dương",
  "Anh Dũng",
  "Bảo Châu",
  "Bảo Hân",
  "Bá Long",
  "Bích Ngọc",
  "Cát Tường",
  "Bảo Khang",
  "Diễm Quỳnh",
  "Diệu Hằng",
  "Bảo Lâm",
  "Diệu Linh",
  "Hà My",
  "Bảo Minh",
  "Hà Phương",
  "Hạnh Dung",
  "Bình An",
  "Hiền Lương",
  "Hoàng Anh",
  "Cao Minh",
  "Hoàng Lan",
  "Hồng Nhung",
  "Chí Bảo",
  "Hương Giang",
  "Khánh Linh",
  "Chí Dũng",
  "Kim Chi",
  "Kim Ngân",
  "Công Thành",
  "Đình An",
  "Đình Duy",
  "Hà Phương",
  "Đức Anh",
  "Đức Bình",
  "Lan Chi",
  "Đức Huy",
  "Duy Khánh",
  "Lan Hương",
  "Duy Khang",
  "Duy Phúc",
  "Mai Anh",
  "Gia Bảo",
  "Gia Huy",
  "Mai Linh",
  "Hải Đăng",
  "Hải Nam",
  "Mỹ Hạnh",
  "Hữu Nghĩa",
  "Hữu Phước",
  "Ngọc Anh",
  "Hữu Tài",
  "Khắc Duy",
  "Ngọc Diệp",
  "Khánh An",
  "Khánh Duy",
  "Ngọc Hân",
  "Minh Đức",
  "Minh Hào",
  "Ngọc Lan",
  "Ngọc Minh",
  "Nhật Lệ",
  "Ngọc Hưng",
  "Như Quỳnh",
  "Phương Anh",
  "Ngọc Long",
  "Phương Nhi",
  "Quỳnh Anh",
  "Nhật Hào",
  "Quỳnh Châu",
  "Quỳnh Trang",
  "Nhật Minh",
  "Thanh Mai",
  "Thanh Nhàn",
  "Nhật Quang",
  "Thiên Kim",
  "Thiên Thanh",
  "Nhật Tân",
  "Thục Trinh",
  "Thùy Anh",
  "Phước Thịnh",
  "Thùy Dung",
  "Thùy Linh",
  "Quang Huy",
  "Thùy Trang",
  "Trúc Quỳnh",
  "Quang Khải",
  "Tuyết Nhi",
  "Vân Anh",
  "Quốc Anh",
  "Quốc Bảo",
  "Quốc Hưng",
  "Thiên Thanh",
  "Thanh Đạt",
  "Thanh Phong",
  "Thục Trinh",
  "Thiện Nhân",
  "Trọng Nghĩa",
  "Thùy Anh",
  "Tuấn Kiệt",
  "Văn Tùng",
  "Thùy Dung",
];
// Mẫu đánh giá (giữ nguyên)
const reviewTemplates = [
  "Sản phẩm {product} thực sự rất đẹp, chất lượng hoàn thiện tốt hơn mong đợi!",
  "Mình đã mua {product} và rất hài lòng. Gỗ mịn, chạm khắc tinh xảo.",
  "{product} rất chắc chắn, màu sắc tự nhiên. Đặt lên bàn thờ rất trang trọng!",
  "Mua {product} làm quà biếu, ai cũng khen đẹp và ý nghĩa. Rất đáng tiền!",
  "Mình từng mua nhiều nơi nhưng {product} ở đây có giá tốt, chất lượng khỏi bàn!",
  "Đặt {product} về nhà mà ai cũng khen, cảm giác rất ấm cúng và trang nghiêm.",
  "Hàng đóng gói rất cẩn thận, {product} không bị trầy xước. Rất hài lòng!",
  "Mình hơi phân vân lúc đầu, nhưng khi nhận {product} thì rất ưng ý!",
  "{product} đẹp hơn hình, giao hàng nhanh, rất đáng tiền!",
  "Mình thích {product} vì thiết kế rất tinh tế, mang đến không gian trang nhã.",
];

const reviewImagesPool = [
  "./4/1.jpg",
  "./4/3.jpg",
  "./4/2.jpg",
  "./4/4.jpg",
  "./4/5.jpg",
  "./4/6.jpg",
  "./4/7.jpg",
  "./4/8.jpg",
  "./4/9.jpg",
  "./4/10.jpg",
  "./4/z6441857862428_f8db2d0d96dbfa40f7deacb6e1f36d37.jpg",
  "./4/z6442028237358_189507006a901c51219a7dc72db10acd.jpg",
  "./4/z6442028247602_4922313c56b2d6f3410d9f855516d979.jpg",
  "./4/z6442028251927_ce1bba318cf913da4cda9e3802e7c9d3.jpg",
  "./4/z6442028255574_e9765739dd205ec9c4ee5a2a92cdeb74.jpg",
  "./4/z6442028260235_a86d441397c5a91551dbcbae00e3468c.jpg",
  "./4/z6441778825711_4b05ede5f9d2889173327549e0c38e76.jpg",
  "./4/z6441794765113_0ff6bed35b8dc5e6d4d8360fa1fed873.jpg",
  "./4/z6441821748449_60e1dc4a2576127d1a1639abf0f33c51.jpg",
];
const generateFakeReviews = () => {
  return Array.from({ length: 15 }, (_, i) => {
    const randomProduct =
      allProducts[Math.floor(Math.random() * allProducts.length)];
    const randomTemplate =
      reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)];

    const reviewImageCount = Math.floor(Math.random() * 4);
    const randomReviewImages = [];

    if (reviewImageCount > 0 && reviewImagesPool.length > 0) {
      const shuffledImages = [...reviewImagesPool].sort(
        () => 0.5 - Math.random()
      );
      randomReviewImages.push(...shuffledImages.slice(0, reviewImageCount));
    }

    return {
      id: i + 1,
      name: vietnameseNames[Math.floor(Math.random() * vietnameseNames.length)],
      phone: `0${Math.floor(900 + Math.random() * 100)}.${Math.floor(
        1000 + Math.random() * 9000
      )}.xxx`,
      likes: Math.floor(Math.random() * 10),
      rating: Math.floor(Math.random() * 2) + 4,
      comment: randomTemplate.replace("{product}", randomProduct.name),
      date: `${Math.floor(Math.random() * 12) + 1} ngày trước`,
      product: randomProduct.name,
      productImage: randomProduct.image,
      reviewImages: Math.random() > 0.3 ? randomReviewImages : [],
    };
  });
};

const fakeReviews = generateFakeReviews();
const reviewsPerPage = 5;
let currentPage = 1;

// Hiển thị đánh giá
const displayReviews = (page) => {
  const reviewsContainer = document.getElementById("reviews");
  if (!reviewsContainer) return;

  reviewsContainer.innerHTML = "";

  const startIdx = (page - 1) * reviewsPerPage;
  const paginatedReviews = fakeReviews.slice(
    startIdx,
    startIdx + reviewsPerPage
  );

  paginatedReviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.className =
      "flex items-start mb-6 p-4 bg-white rounded-lg shadow";
    reviewElement.innerHTML = `
      <div class="flex-shrink-0 mr-4">
        <div class="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
          ${review.name.charAt(0)}
        </div>
      </div>
      
      <div class="flex-1">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-semibold text-gray-800">${review.name}</h4>
            <p class="text-gray-500 text-sm">${review.phone}</p>
          </div>
          <div class="flex items-center text-gray-500 text-sm">
            <i class="fas fa-thumbs-up mr-1"></i>
            <span>${review.likes} lượt thích</span>
          </div>
        </div>

        <div class="mt-2">
          <div class="flex items-center">
            <div class="text-amber-400 mr-2">
              ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
            </div>
            <span class="text-sm font-medium ${
              review.rating >= 4 ? "text-green-600" : "text-blue-600"
            }">
              ${review.rating >= 4 ? "Rất hài lòng" : "Hài lòng"}
            </span>
          </div>

          <p class="mt-2 text-gray-700">${review.comment}</p>
          <p class="text-gray-400 text-xs mt-1">${review.date}</p>

          ${
            review.reviewImages.length > 0
              ? `
            <div class="mt-3 flex space-x-2">
              ${review.reviewImages
                .map(
                  (img) => `
                <img src="${img}" alt="Ảnh đánh giá" class="w-20 h-20 object-cover rounded border">
              `
                )
                .join("")}
            </div>
          `
              : ""
          }

          <div class="mt-3 flex items-center p-2 bg-gray-50 rounded">
            <img src="${review.productImage}" 
                 alt="${review.product}" 
                 class="w-16 h-12 object-cover rounded border">
            <div class="ml-3">
              <p class="text-xs text-gray-500">Đã mua:</p>
              <p class="text-sm font-medium text-gray-800">${review.product}</p>
            </div>
          </div>

          <button class="mt-3 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center">
            <i class="fas fa-thumbs-up mr-1"></i>
            Thích
          </button>
        </div>
      </div>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
};

// Tạo phân trang
const createPagination = () => {
  const paginationContainer = document.getElementById("pagination");
  if (!paginationContainer) return;

  const totalPages = Math.ceil(fakeReviews.length / reviewsPerPage);
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  paginationContainer.innerHTML = "";

  // Nút Previous
  if (currentPage > 1) {
    paginationContainer.innerHTML += `
      <button onclick="changePage(${currentPage - 1})" 
              class="px-3 py-1 mr-1 rounded-full border border-gray-300 hover:bg-gray-100">
        <i class="fas fa-chevron-left"></i>
      </button>
    `;
  }

  // Trang đầu tiên
  if (startPage > 1) {
    paginationContainer.innerHTML += `
      <button onclick="changePage(1)" 
              class="px-3 py-1 mx-1 rounded-full ${
                1 === currentPage
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300 hover:bg-gray-100"
              }">
        1
      </button>
      ${startPage > 2 ? '<span class="px-2">...</span>' : ""}
    `;
  }

  // Các trang giữa
  for (let i = startPage; i <= endPage; i++) {
    paginationContainer.innerHTML += `
      <button onclick="changePage(${i})" 
              class="px-3 py-1 mx-1 rounded-full ${
                i === currentPage
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300 hover:bg-gray-100"
              }">
        ${i}
      </button>
    `;
  }

  // Trang cuối cùng
  if (endPage < totalPages) {
    paginationContainer.innerHTML += `
      ${endPage < totalPages - 1 ? '<span class="px-2">...</span>' : ""}
      <button onclick="changePage(${totalPages})" 
              class="px-3 py-1 mx-1 rounded-full ${
                totalPages === currentPage
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300 hover:bg-gray-100"
              }">
        ${totalPages}
      </button>
    `;
  }

  // Nút Next
  if (currentPage < totalPages) {
    paginationContainer.innerHTML += `
      <button onclick="changePage(${currentPage + 1})" 
              class="px-3 py-1 ml-1 rounded-full border border-gray-300 hover:bg-gray-100">
        <i class="fas fa-chevron-right"></i>
      </button>
    `;
  }
};

// Thay đổi trang
const changePage = (page) => {
  currentPage = page;
  displayReviews(currentPage);
  createPagination();
  // window.scrollTo({ top: 0, behavior: "smooth" });
};

// Timer countdown
let timeLeft;
const timerKey = "countdownTimer"; // Key để lưu vào localStorage
const totalDuration = 45 * 60; // 45 phút tính bằng giây

// Kiểm tra nếu có thời gian đã lưu trong localStorage
const savedTime = localStorage.getItem(timerKey);
const endTime = localStorage.getItem(`${timerKey}_end`);

if (savedTime && endTime) {
  // Tính thời gian còn lại dựa trên thời gian kết thúc
  const elapsedSinceEnd = Math.floor((Date.now() - parseInt(endTime)) / 1000);

  if (elapsedSinceEnd > 0) {
    // Tính số chu kỳ đã hoàn thành
    const completedCycles = Math.floor(elapsedSinceEnd / totalDuration);
    // Tính thời gian còn lại trong chu kỳ hiện tại
    timeLeft = totalDuration - (elapsedSinceEnd % totalDuration);
    // Cập nhật thời gian kết thúc mới
    localStorage.setItem(`${timerKey}_end`, Date.now() + timeLeft * 1000);
  } else {
    timeLeft = Math.floor((parseInt(endTime) - Date.now()) / 1000);
  }
} else {
  // Nếu không có, khởi tạo mới 45 phút
  timeLeft = totalDuration;
  // Lưu thời gian kết thúc (45 phút từ bây giờ)
  localStorage.setItem(`${timerKey}_end`, Date.now() + timeLeft * 1000);
}

const updateTimer = () => {
  if (timeLeft <= 0) {
    // Khi hết giờ, reset lại 45 phút
    timeLeft = totalDuration;
    // Cập nhật thời gian kết thúc mới
    localStorage.setItem(`${timerKey}_end`, Date.now() + timeLeft * 1000);
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Cập nhật DOM
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes-seconds").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds-seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  // Lưu thời gian còn lại vào localStorage
  localStorage.setItem(timerKey, timeLeft);

  timeLeft--;
};

const timer = setInterval(updateTimer, 1000);

// Khởi tạo khi trang tải xong
document.addEventListener("DOMContentLoaded", () => {
  displayReviews(currentPage);
  createPagination();
  updateTimer();
});

let toastInterval;
let currentIndex = 0;
let isRunning = false;

// Hàm tạo toast thông báo
function createToast(name, product) {
  const randomId = Math.floor(Math.random() * 1000);
  const toast = document.createElement("div");
  toast.id = `toast-${randomId}`;
  toast.className = `flex items-start w-72 p-3 bg-white rounded-lg shadow-lg transform -translate-y-full opacity-0 transition-all duration-300`;

  toast.innerHTML = `
    <img src="https://picsum.photos/100/100?random=${randomId}" 
         alt="Avatar" 
         class="w-10 h-10 rounded-full mr-3 object-cover">
    
    <div class="flex-1">
      <p class="font-semibold text-gray-800">${name}</p>
      <p class="text-md text-gray-600">Đã đặt thành công ${product.name}</p>
      <p class="text-xs text-gray-400 mt-1">${getRandomTime()} trước</p>
    </div>
    
    <button onclick="closeToast('${randomId}')" 
            class="text-gray-400 hover:text-gray-600 ml-2">
      <i class="fas fa-times"></i>
    </button>
  `;

  document.getElementById("toast-container").appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("-translate-y-full", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  }, 100);

  setTimeout(() => closeToast(randomId), 5000);
}

// Hàm lấy thời gian ngẫu nhiên
function getRandomTime() {
  const times = ["1 phút", "2 phút", "3 phút", "4 phút", "5 phút"];
  return times[Math.floor(Math.random() * times.length)];
}

// Hàm đóng toast
function closeToast(id) {
  const toast = document.getElementById(`toast-${id}`);
  if (toast) {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("-translate-y-full", "opacity-0");
    setTimeout(() => toast.remove(), 500);
  }
}

// Hàm hiển thị toast tiếp theo
function showNextToast() {
  if (currentIndex >= vietnameseNames.length) {
    currentIndex = 0; // Quay lại từ đầu nếu hết danh sách
  }

  const name = vietnameseNames[currentIndex];
  const product = allProducts[currentIndex % allProducts.length]; // Lặp lại sản phẩm nếu cần

  createToast(name, product);
  currentIndex++;
}

// Hàm bắt đầu/tạm dừng chuỗi toast
function toggleToastSequence() {
  if (isRunning) {
    clearInterval(toastInterval);
    isRunning = false;
  } else {
    toastInterval = setInterval(showNextToast, 10000);
    isRunning = true;
  }
}

// Bắt đầu tự động khi trang tải
document.addEventListener("DOMContentLoaded", () => {
  showNextToast();

  toastInterval = setInterval(showNextToast, 10000);
  isRunning = true;
});
