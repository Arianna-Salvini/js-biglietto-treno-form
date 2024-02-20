// Create const button and event
const btn_generate = document.querySelector("#btn_generate");
btn_generate.addEventListener("click", function () {
    
        // Create variables for age and km and create button
        const total_km = document.getElementById("km").value;
        console.log("km", total_km);

        const user_age = document.getElementById("age").value;
        console.log("age", user_age);

        // Calculate discount

        const cost_per_km = 0.21;
        const ticket_amount = (total_km * cost_per_km).toFixed(2);

        console.log(ticket_amount);

        // Discount (amount/100 * discount = amount discounted)

        let under18_discount = (ticket_amount / 100) * 20;
        let over65_discount = (ticket_amount / 100) * 40;

        let amount_tot;

        if (user_age == "Minorenne") {
            amount_tot = (ticket_amount - under18_discount).toFixed(2);
        } else if (user_age == "Over 65") {
            amount_tot = (ticket_amount - over65_discount).toFixed(2);
        } else {
            amount_tot = ticket_amount;
        }

        console.log(amount_tot);

    });

    const btn_cancel = document.getElementById("btn_cancel")
    btn_cancel.addEventListener("click", function () {
        document.getElementById("km").value = "";
        document.getElementById("age").value = "select";
    });