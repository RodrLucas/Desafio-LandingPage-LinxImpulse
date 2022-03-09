const moreProductsBtn = document.getElementById("moreProductsBtn")
const moreProduct = document.getElementById("moreProducts")

moreProductsBtn.addEventListener("click", showProducts)

//Show products
let visibilityMoreProduct = true
function showProducts(){
    if(visibility == true){
        moreProduct.style.display = 'flex'
        visibility = true;
        moreProductsBtn.style.display = 'none'
    }
}

//Request for API
function GET(url){
    let request = new XMLHttpRequest
    
    //Initializes a request.
    request.open("GET", url, false)

    //sends the request to the server.
    request.send()


    //The read-only XMLHttpRequest property responseText returns the text received from a server following a request being sent.
    return request.responseText
}

//Creating more product card
function createMoreCard(product){ 
    //For 1 product
        //Create a card
            //image
            //name
            //oldPrice
            //price
            //installments
            //button
        //add on section 


    //Crating elements
    moreCard = document.createElement("div")
    let imageContainer = document.createElement("div")
    let image = document.createElement("img")
    let itensContainer = document.createElement("div")
    let productName = document.createElement("p")
    let oldPrice = document.createElement("p")
    let price = document.createElement("p")
    let installments = document.createElement("p")
    let buyContainer = document.createElement("div")
    let buy = document.createElement("a")


    //Adding classes
    moreCard.classList.add("moreProduct__card")
    imageContainer.classList.add("moreProduct__card--imgContainer")
    image.classList.add("moreProduct__card--image")
    itensContainer.classList.add("moreProduct__card--itensContainer")
    productName.classList.add("moreProduct__card--name")
    oldPrice.classList.add("moreProduct__card--oldPrice")
    price.classList.add("moreProduct__card--price")
    installments.classList.add("moreProduct__card--installments")
    buyContainer.classList.add("moreProduct__card--buyContainer")
    buy.classList.add("moreProduct__card--buy")
    

    //Assigning values
    image.src = `${product.image}`
    productName.innerHTML = product.name
    oldPrice.innerHTML = `de: R$${product.oldPrice}`
    price.innerHTML = `Por: R$${product.price}`
    installments.innerHTML = `ou ${product.installments.count}x de R$${product.installments.value}`
    buy.href = "#"
    buy.innerHTML = "Comprar"


    //Adding in card
    moreCard.appendChild(imageContainer)
    imageContainer.appendChild(image)
    moreCard.appendChild(itensContainer)
    itensContainer.appendChild(productName)
    itensContainer.appendChild(oldPrice)
    itensContainer.appendChild(price)
    itensContainer.appendChild(installments)
    itensContainer.appendChild(buyContainer)
    buyContainer.appendChild(buy)


    return moreCard
}


//Convert JSON to JS and Iterate product array
function main(){
    //Assigning JSON to variable
    let data = GET("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2")

    //Convert JSON to JS
    let products = JSON.parse(data) 

    //Assigning section(HTML) to variable
    let section = document.getElementById("moreProducts")

    //Iterate product array
    products.products.forEach(product => {
        console.log(product)
        let moreCard = createMoreCard(product)
        section.appendChild(moreCard)
    });
}

main()