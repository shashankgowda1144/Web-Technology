let url = "https://fakestoreapi.com/products"

async function fetchProducts(url) {
    let res = await fetch(url,{method: "get"})
    console.log(res);
    let data = await res.json()
    console.log(data);

    displayData(data)
    
}

fetchProducts(url)

function displayData(data){

let tbody = document.getElementById('tbody')
    tbody.innerHTML = ""
    for(let i=0; i<data.length; i++){
        tbody.innerHTML += `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].description}</td>
            <td> <img src = "${data[i].image} " alt="" width="100px height="100px"></td>
            <td>${data[i].category}</td>
            <td>${data[i].price}</td>

        </tr>
        `
    }
}
