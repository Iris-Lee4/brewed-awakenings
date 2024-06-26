import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    'click', 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === 'product') {
            let price = '$' + parseFloat(itemClicked.dataset.price).toFixed(2)
            window.alert(`${itemClicked.dataset.name} costs\n${price}`)
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product"
                data-name=${product.name}
                data-price=${product.price}
                >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

