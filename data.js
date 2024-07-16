const getData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json))
}
// call the function. 
getData(); 

function getAllDataResssources() {
    fetch('/product.js')
        .then((res) => res.json())
        .then((json) => console.log(json))
};

getAllDataResssources();