import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === 'employee') {
            let employeeId = parseInt(itemClicked.dataset.id);
            let numProducts = 0;
            for (const order of orders) {
                if (order.employeeId === employeeId) {
                    numProducts++;
                }
            }
            if (numProducts === 1) {
                window.alert(`${itemClicked.dataset.name} sold ${numProducts} product`)
            } else window.alert(`${itemClicked.dataset.name} sold ${numProducts} products`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee"
                data-id="${employee.id}"
                data-name="${employee.name}"
                >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

