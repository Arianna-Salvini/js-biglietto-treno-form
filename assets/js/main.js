
// Create variables for age and km and create button
const total_km = document.getElementById("km").value
const user_age = document.getElementById("age").value
// Calculate the cost of tickets based on the amount of kilometres

const cost_per_km = 0.21;
const ticket_amount = (total_km * cost_per_km).toFixed(2);

console.log(ticket_amount);

// Discount (amount/100 * discount = amount discounted)

let under18_discount = (ticket_amount / 100) * 20;
let over65_discount = (ticket_amount / 100) * 40;

// Create const button and event
const btn_generate = document.querySelector(".btn_generate")

btn_generate.addEventListener(`click`,

    function () {
        let amount_tot;

        if (user_age < 18) {
            amount_tot = (ticket_amount - under18_discount).toFixed(2);
        } else if (user_age >= 65) {
            amount_tot = (ticket_amount - over65_discount).toFixed(2);
        } else {
            amount_tot = ticket_amount
        }

        console.log(amount_tot);
    }

)