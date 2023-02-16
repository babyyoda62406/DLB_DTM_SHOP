




const getProduct = async () => {
    let products = await fetch('https://fakestoreapi.com/products')
    products = await products.json()
    productsDiv = document.getElementById("last")
    productsDiv.innerHTML = ""
    html = ""
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        
        const html  = document.createElement('div')
        const classList = ['text-center' ,'product-father-index',  'p-1', 'mt-2',  'col-12', 'col-sm-6',  'col-md-4' ,'col-lg-3' ,'col-xl-2']

        classList.forEach(element => {
            html.classList.add(element)            
        });
        html.innerHTML = `
        <li class="splide__slide text-center me-1 ms-1">
            <div class="text-center product-father-index">
                <div class="  p-1  product-index ">
                    <div class=" product-item">
                        <img loading="lazy" src="${element.image}" class="img-fluid w-100 rounded rounded-3 image" alt="">
                        <div class="details"> 
                            <div class="">
                                <div class="high-f p-1 bg-light rounded rounded-3 cursor">
                                    <i class="bi bi-clock"> 23horas</i>
                                </div>
                                <div class="high-s rounded-circle bg-light p-1  cursor"><i class="bi bi-share-fill" style="font-size: larger;"></i></div>
                            </div>
                            <div class="d-flex justify-content-center  middle">
                                <i class="bi bi-eye p-2 bg-light rounded rounded-3 me-5 cursor"></i>
                                <i class="bi bi-cart-fill p-2 bg-light rounded rounded-3 cursor"></i>
                            </div>
                        </div>
                    </div>
                    <div class=""> 
                        <div class="d-flex justify-content-around">
                            <p class="text-muted genre cursor">${element.category}</p>
                            <div class="">
                                ${getStars(element.rating.rate)}
                            </div>
                        </div>
                        <p>${element.title}</p>
                        <div class="d-flex justify-content-around">
                            <p class="text-muted"><i class="bi bi-download"> ${element.rating.count} ventas</i></p>
                            <p class="text-danger">$ $${element.price}</p>
                        </div>
                    </div>
                </div>
            </div>  
        </li> 
            `
            productsDiv.appendChild(html)
    }

    // productsDiv.innerHTML = html
}

const getStars = (num) => {
    html = ""
    for (let i = 0; i < num; i++) {
        html += ' <i class="bi bi-star-fill star-fill"></i>'
    }
    return html
}

getProduct()