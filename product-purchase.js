function createProductItem(product) {
  // Lấy giá trị mặc định từ size đầu tiên (nếu có)
  let displayPrice = "";
  let displayOldPrice = "";
  let displayDiscount = "";

  if (product.sizes && product.sizes.length > 0) {
    const firstSize = product.sizes[0];
    displayPrice = firstSize.price || "";
    displayOldPrice = firstSize.oldPrice || "";
    displayDiscount = firstSize.discount || "";
  }

  return `
    <div class="relative text-center cursor-pointer group" data-product='${JSON.stringify(
      product
    )}'>
      <div class="border border-[#d4af37] rounded p-1 hover:shadow-md transition-all h-full flex flex-col">
        <!-- Phần giảm giá đặt trên ảnh -->
        ${
          displayDiscount
            ? `
          <div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            ${displayDiscount}
          </div>
        `
            : ""
        }
        
        <img alt="${product.name}" 
             class="w-full h-48 object-cover rounded" 
             src="${product.image}"/>
        
        <div class="mt-1 flex-grow">
          <p class="text-sm font-medium text-[#5a4a3a] line-clamp-2 leading-tight">
            ${product.name}
          </p>
          
          <!-- Hiển thị các size có sẵn -->
          <div class="mt-2 flex flex-wrap justify-center gap-1">
           ${
             product.sizes && product.sizes.length > 0
               ? product.sizes
                   .map(
                     (size, index) => `
                  <div class="z-50 text-xs px-2 py-1 border border-gray-300 rounded hover:border-[#d4af37] size-option 
                       ${index === 0 ? "bg-[#d4af37] text-white" : ""}"
                       data-price="${size.price.replace(/[^\d]/g, "")}"
                       data-oldprice="${
                         size.oldPrice
                           ? size.oldPrice.replace(/[^\d]/g, "")
                           : ""
                       }"
                       data-discount="${size.discount || ""}">
                    ${size.size}
                  </div>
                `
                   )
                   .join("")
               : '<div class="text-xs text-gray-500">1 kích thước</div>'
           }
          </div>
          
          <div class="flex items-center justify-center gap-1 mt-1">
            <p class="text-sm font-bold text-red-600 product-price">
              ${displayPrice}
            </p>
            ${
              displayOldPrice
                ? `
              <span class="text-xs text-gray-400 line-through product-oldprice">
                ${displayOldPrice}
              </span>
            `
                : ""
            }
            ${
              displayDiscount
                ? `
              <span class="text-xs text-red-500 product-discount">
                ${displayDiscount}
              </span>
            `
                : ""
            }
          </div>
        </div>
      </div>
      
      <!-- Checkbox chọn sản phẩm -->
      <div class="absolute top-1 left-1 w-4 h-4 border-2 border-[#d4af37] rounded-sm bg-white/80 group-hover:opacity-100 opacity-0 transition-opacity flex items-center justify-center">
        <svg class="w-3 h-3 text-[#d4af37] hidden group-[.selected]:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      
      <!-- Overlay khi chọn -->
      <div class="absolute inset-0 rounded hidden group-[.selected]:block" style="background-color: rgb(240 176 81 / 0.2);"></div>
    </div>
  `;
}

// Hàm định dạng giá (thêm dấu chấm phân cách hàng nghìn)
function formatPrice(price) {
  if (!price) return "0";
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderAllProducts() {
  const container = document.getElementById("product-selection");
  const allProducts = Object.values(products).flat();

  container.innerHTML = allProducts.map(createProductItem).join("");

  // Xử lý mặc định chọn size đầu tiên và cập nhật giá
  container.querySelectorAll(".relative").forEach((productItem) => {
    // Tìm size option đầu tiên
    const firstSizeOption = productItem.querySelector(".size-option");

    if (firstSizeOption) {
      // Thêm class active cho size đầu tiên
      firstSizeOption.classList.add("bg-[#d4af37]", "text-white");

      // Cập nhật giá trị hiển thị
      const priceElement = productItem.querySelector(".product-price");
      const oldPriceElement = productItem.querySelector(".product-oldprice");
      const discountElement = productItem.querySelector(".product-discount");

      // Cập nhật giá
      priceElement.textContent =
        formatPrice(firstSizeOption.dataset.price) + "đ";

      // Cập nhật giá cũ nếu có
      if (firstSizeOption.dataset.oldprice) {
        if (oldPriceElement) {
          oldPriceElement.textContent =
            formatPrice(firstSizeOption.dataset.oldprice) + "đ";
        } else {
          priceElement.insertAdjacentHTML(
            "afterend",
            `<span class="text-xs text-gray-400 line-through product-oldprice">
              ${formatPrice(firstSizeOption.dataset.oldprice)}đ
            </span>`
          );
        }
      } else if (oldPriceElement) {
        oldPriceElement.remove();
      }

      // Cập nhật giảm giá nếu có
      if (firstSizeOption.dataset.discount) {
        if (discountElement) {
          discountElement.textContent = firstSizeOption.dataset.discount;
        } else {
          const container = priceElement.parentElement;
          container.insertAdjacentHTML(
            "beforeend",
            `<span class="text-xs text-red-500 product-discount">
              ${firstSizeOption.dataset.discount}
            </span>`
          );
        }
      } else if (discountElement) {
        discountElement.remove();
      }
    }
  });

  // Xử lý click chọn sản phẩm
  container.querySelectorAll(".relative").forEach((item) => {
    item.addEventListener("click", function (e) {
      if (!e.target.classList.contains("size-option")) {
        this.classList.toggle("selected");
        updateSelectedProducts();
      }
    });
  });

  // Xử lý click chọn size
  container.querySelectorAll(".size-option").forEach((sizeOption) => {
    sizeOption.addEventListener("click", function (e) {
      e.stopPropagation();

      // Xóa active của tất cả size option cùng sản phẩm
      const productItem = this.closest(".relative");
      productItem.querySelectorAll(".size-option").forEach((opt) => {
        opt.classList.remove("bg-[#d4af37]", "text-white");
      });

      // Active size được chọn
      this.classList.add("bg-[#d4af37]", "text-white");

      // Cập nhật giá hiển thị
      updateProductPriceDisplay(productItem, this);
      updateSelectedProducts();
    });
  });
}

function updateSelectedProducts() {
  const selectedProducts = [];

  document.querySelectorAll("#product-selection .selected").forEach((item) => {
    const productData = JSON.parse(item.dataset.product);

    // Tìm size đang được chọn (có màu vàng)
    const selectedSize = Array.from(item.querySelectorAll(".size-option")).find(
      (opt) =>
        opt.classList.contains("bg-[#d4af37]") ||
        getComputedStyle(opt).backgroundColor === "rgb(212, 175, 55)"
    );

    const selectedProduct = {
      ...productData,
      // Thêm thông tin size được chọn (nếu không có thì lấy size đầu tiên)
      selectedSize: selectedSize
        ? {
            size: selectedSize.textContent.trim(),
            price: selectedSize.dataset.price,
            oldPrice: selectedSize.dataset.oldprice || null,
            discount: selectedSize.dataset.discount || null,
          }
        : productData.sizes && productData.sizes.length > 0
        ? {
            size: productData.sizes[0].size,
            price: productData.sizes[0].price.replace(/[^\d]/g, ""),
            oldPrice: productData.sizes[0].oldPrice
              ? productData.sizes[0].oldPrice.replace(/[^\d]/g, "")
              : null,
            discount: productData.sizes[0].discount || null,
          }
        : null,
    };

    selectedProducts.push(selectedProduct);
  });

  return selectedProducts;
}

// Hàm phụ trợ: Cập nhật hiển thị giá
function updateProductPriceDisplay(productItem, sizeElement) {
  const priceElement = productItem.querySelector(".product-price");
  const oldPriceElement = productItem.querySelector(".product-oldprice");
  const discountElement = productItem.querySelector(".product-discount");

  priceElement.textContent = formatPrice(sizeElement.dataset.price) + "đ";

  if (sizeElement.dataset.oldprice) {
    if (!oldPriceElement) {
      priceElement.insertAdjacentHTML(
        "afterend",
        `<span class="text-xs text-gray-400 line-through product-oldprice">
          ${formatPrice(sizeElement.dataset.oldprice)}đ
        </span>`
      );
    } else {
      oldPriceElement.textContent =
        formatPrice(sizeElement.dataset.oldprice) + "đ";
    }
  } else if (oldPriceElement) {
    oldPriceElement.remove();
  }

  if (sizeElement.dataset.discount) {
    if (!discountElement) {
      const container = priceElement.parentElement;
      container.insertAdjacentHTML(
        "beforeend",
        `<span class="text-xs text-red-500 product-discount">
          ${sizeElement.dataset.discount}
        </span>`
      );
    } else {
      discountElement.textContent = sizeElement.dataset.discount;
    }
  } else if (discountElement) {
    discountElement.remove();
  }
}

document.addEventListener("DOMContentLoaded", renderAllProducts);
