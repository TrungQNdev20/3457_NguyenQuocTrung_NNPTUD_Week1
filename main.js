//Câu 1: Khai báo constructor function Product
let Product = function(id, name, price, quantity, category, isAvailable){
    this. id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
//Câu 2: Khởi tạo mảng Product gồm ít nhất 5 sản phẩm thuộc tối thiểu 2 danh mục khác nhau
let products = [
    new Product(1, 'Laptop', 1000, 10, 'Electronics', true),
    new Product(2, 'Smartphone', 700, 5, 'Electronics', true),
    new Product(3, 'Tie', 20, 50, 'Accessories', true),
    new Product(4, 'Jeans', 40, 30, 'Clothing', false),
    new Product(5, 'Sneakers', 60, 0, 'Accessories', true)
];
//Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
let productDetails = products.map(product => ({ name: product.name, price: product.price }));
console.log("Câu 3",productDetails)

//Câu 4: Lọc ra các sản phẩm còn hàng trong kho
let result = products.filter(function(e){
    return e.quantity > 0
})
console.log("Câu 4",result)

//Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trị trên 30 hay không
result = products.some(function(e){
    return e.price > 30
})
console.log("Câu 5",result)

//Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán hay không
let check = products.filter(function(e){
    return e.category === "Accessories"; 
})

result = check.every(function(e){
    return e.isAvailable === true
})

console.log("Câu 6",result)

//Câu 7: Tính tổng giá trị kho hàng
result = products.reduce(function(sum, e){
    return sum += (e.price * e.quantity)
}, 0)

console.log("Câu 7",result)

//Câu 8: Dùng for..of duyệt mảng
for (const element of products) {
    console.log(element.name, "-", element.category, "-", element.isAvailable )
}

//Câu 9: dùng for..in in ra tên thuộc tính và giá trị tương đương
console.log("Câu 9")
for (let i in products) {
    console.log("Product:");
    for (let key in products[i]) {
        console.log(key + ":", products[i][key]);
    }
    console.log("--------------");
}

//Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
result = products
    .filter(function(e){
        return e.isAvailable === true && e.quantity > 0
    })
    .map(function(e){
        return e.name
    })
console.log("Câu 10", result)