
const renderProduct = (products) => {
    const productsDiv = document.getElementById("products-div")
    
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        const html  = document.createElement('div')
        const classList = ['text-center' ,'product-father',  'p-1', 'mt-2',  'col-12', 'col-sm-6',  'col-md-4' ,'col-lg-3' ,'col-xl-3']

        classList.forEach(element => {
            html.classList.add(element)            
        })

        html.innerHTML = `
            <div class="mx-3 mb-0  p-3  product  d-flex flex-column justify-content-between">
                
                <div class=" product-item">
                    <img loading="lazy" src="${element.image}" class="img-fluid w-100 rounded rounded-3 image" alt="">
                    <div class="details"> 
                        <div class="">
                            <div class="high-f p-1 bg-dark text-light bg-opacity-75 h4 rounded rounded-3 cursor">
                                <i class="bi bi-clock "> 23horas</i>
                            </div>
                            <div class="high-s rounded-circle bg-dark text-light h4 bg-opacity-75 p-2  cursor"><i class="bi bi-share-fill" style="font-size: larger;"></i></div>
                        </div>
                        <div class="d-flex justify-content-between px-4  middle">
                            <i class="bi bi-eye h3 p-2 bg-dark text-light bg-opacity-75 rounded rounded-3 me-5 cursor"></i>
                            <i class="bi bi-cart-fill h3  p-2 bg-dark text-light bg-opacity-75 rounded rounded-3 cursor"></i>
                        </div>
                    </div>
                </div>
                <div class=""> 
                    <div class="d-flex justify-content-between">
                        <p class="mb-0 text-muted genre cursor">${element.category}</p>
                        <div class="genre">
                            ${getStars(element.rating.rate)}
                        </div>
                    </div>
                    <p class="mb-0 label-title">${element.title}</p>
                    <div class="d-flex justify-content-between">
                        <p class="genre text-muted"><i class="bi bi-download"> ${element.rating.count} ventas</i></p>
                        <p class="text-success fw-bold">$ ${element.price}</p>
                    </div>
                </div>
            </div> 
            `
            productsDiv.appendChild(html)
    }

    
}

const getProduct = async () => {
    try {
        let products = await fetch('https://fakestoreapi.com/products')
        products = await products.json()
        renderProduct(products)
    } catch (error) {

    }
}

const getStars = (num) => {
    html = ""
    for (let i = 0; i < num; i++) {
        html += ' <i class="bi bi-star-fill star-fill"></i>'
    }
    return html
}

getProduct()