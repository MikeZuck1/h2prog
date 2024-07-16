const getData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};
// call the function.
getData();

const productData = () => {
  const urlProduct = "/product.js";

  fetch(urlProduct)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

productData(); 
