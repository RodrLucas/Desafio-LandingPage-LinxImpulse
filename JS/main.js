function doGet(url){ //Request for API
    let request = new XMLHttpRequest()
    
    //Initializes a request.
    request.open("GET", url, false)

    //sends the request to the server.
    request.send()

    
    //The read-only XMLHttpRequest property responseText returns the text received from a server following a request being sent.
    return request.responseText
}

//Creating product card
function createCard(product){ 
    //For 1 product
        //Create a card
            //image
            //name
            //oldPrice
            //price
            //installments
            //button
        //add on section 
        
    //Creating elements
    card = document.createElement("div")
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
    card.classList.add("product__card")
    imageContainer.classList.add("product__card--imgContainer")
    image.classList.add("product__card--image")
    itensContainer.classList.add("product__card--itensContainer")
    productName.classList.add("product__card--name")
    oldPrice.classList.add("product__card--oldPrice")
    price.classList.add("product__card--price")
    installments.classList.add("product__card--installments")
    buyContainer.classList.add("product__card--buyContainer")
    buy.classList.add("product__card--buy--item")


    //Assigning values
    image.src = `${product.image}`
    productName.innerHTML = product.name
    oldPrice.innerHTML = `de: R$${product.oldPrice}`
    price.innerHTML = `Por: R$${product.price}`
    installments.innerHTML = `ou ${product.installments.count}x de R$${product.installments.value}`
    buy.href = "#"
    buy.innerHTML = "Comprar"


    //Adding in card
    card.appendChild(imageContainer)
    imageContainer.appendChild(image)
    card.appendChild(itensContainer)
    itensContainer.appendChild(productName)
    itensContainer.appendChild(oldPrice)
    itensContainer.appendChild(price)
    itensContainer.appendChild(installments)
    itensContainer.appendChild(buyContainer)
    buyContainer.appendChild(buy)
    

    return card
}


//Convert JSON to JS and Iterate product array
function main(){
    //Assigning JSON to variable
    let data = doGet("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")

    //Convert JSON to JS
    let products = JSON.parse(data) 

    //Assigning section(HTML) to variable
    let section = document.getElementById("product__section")


    //Iterate product array
    products.products.forEach(product => {
        let card = createCard(product)
        section.appendChild(card)

    });
}

main()