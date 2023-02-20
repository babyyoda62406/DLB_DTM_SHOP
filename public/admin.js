const linkProduct = document.getElementById("products-link")
const linkCategories = document.getElementById("categories-link")
const products = document.getElementById("products")
const categories = document.getElementById("categories")


// cambia el display de lo que mostrar como contenido
const setScreen = (type) => {
    console.log(type)
    products.style.display = type == 1 ? "none" : "block"
    categories.style.display = type == 0 ? "none" : "block"
}

categories.style.display = "none"
linkCategories.addEventListener("click", () =>  setScreen(1))
linkProduct.addEventListener("click", () => setScreen(0))