window.onload = function() {
  var products = [
    {
      id: 1,
      name: 'Hoa Hướng Dương',
      price: 2000000,
      img: 'images/product_1.jpg'
    },
    {
      id: 2,
      name: 'Hoa đào',
      price: 2500000,
      img: 'images/product_2.jpg'
    },
    {
      id: 3,
      name: 'Hoa Cúc',
      price: 80000,
      img: 'images/product_3.jpg'
    },
    {
      id: 4,
      name: 'Hoa Mai',
      price: 172000,
      img: 'images/product_4.jpg'
    },
    {
      id: 5,
      name: 'Hoa Vạn Thọ',
      price: 340000,
      img: 'images/product_5.jpg'
    },
    {
      id: 6,
      name: 'Hoa Đồng Tiền',
      price: 100000,
      img: 'images/product_6.jpg'
    },
    {
      id: 7,
      name: 'Hoa Hồng',
      price: 120000,
      img: 'images/product_7.jpg'
    },
    {
      id: 8,
      name: 'Hoa Mẫu Đơn',
      price: 1000000,
      img: 'images/product_8.jpg'
    }
  ];
  var counter = document.getElementById('counter');
  var productList = document.getElementById('product-list');
  var productTable = document.getElementById('table-body');
  var storedProduct = JSON.parse(localStorage.getItem('products'));
  if (!storedProduct) {
    storedProduct = [];
  }

  function showProduct() {
    var productLength = products.length;
    for (var i = 0; i < productLength; i++) {
      var product = products[i];
      var html = `
        <li class="product-item">
          <div class="block-item">
            <img src="${product.img}" alt="product">
            <h4>${product.name}</h4>
            <i>${product.price.toLocaleString()}đ</i>
            <button id="${product.id}" class="btn btn-add">add to cart</button>
          </div>
        </li>
      `;
      productList.innerHTML += html;
    }
    var btnList = document.getElementsByTagName('button');
    var btnLength = btnList.length;
    for (var i = 0; i < btnLength; i++) {
      var btn = btnList[i];
      btn.addEventListener('click', addToCart);
      if (storedProduct.includes(btn.id)) {
        btn.innerHTML = "Bought";
        btn.setAttribute('disabled', '');
      }
    }
  }

  function showCart() {
    for (var i = 0; i < storedProduct.length; i++) {
      var id = +storedProduct[i];
      var product = findProduct(id);
      var html = `
        <tr id="row-${product.id}">
          <td><img src="${product.img}" alt="product"></td>
          <td><strong>Name</strong>: ${product.name} | <strong>Price</strong>: ${product.price.toLocaleString()}đ</td>
          <td>1</td>
          <td><button id="${product.id}" class="btn btn-remove">x</button></td>
        </tr>
      `;
      productTable.innerHTML += html;
    }
    var btnList = document.getElementsByTagName('button');
    for (var i = 0; i < btnList.length; i++) {
      var btn = btnList[i];
      btn.addEventListener('click', removeFromCart);
    }
  }

  function removeFromCart() {
    var index = storedProduct.indexOf(this.id);
    storedProduct.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(storedProduct));
    var row = document.getElementById('row-' + this.id);
    row.parentNode.removeChild(row);
    changeCounter();
  }

  function addToCart() {
    storedProduct.push(this.id);
    this.setAttribute('disabled', '');
    this.innerHTML = "Bought";
    localStorage.setItem('products', JSON.stringify(storedProduct));
    changeCounter();
  }

  function findProduct(id) {
    var lengthproducts = products.length;
    for (var i = 0; i < lengthproducts; i++) {
      if (products[i].id === id) {
        return products[i];
      }
    }
  }

  function changeCounter() {
    counter.innerHTML = storedProduct.length;
    counter.style.visibility = storedProduct.length ? 'visible' : 'hidden';
  }

  if (productList) {
    showProduct();
  }

  if(productTable) {
    showCart();
  }

  changeCounter();
};
