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

        const passenger_name =  document.getElementById("full_name").value;
        console.log(passenger_name);

        // creazione dati biglietto in pagina
        document.getElementById("name_print").innerHTML = passenger_name;

        const vagon_number = Math.floor(Math.random() * 9) + 1;
        console.log("Carrozza:", vagon_number);

        document.getElementById("vagon").innerHTML = vagon_number;

        document.getElementById("ticket_price_print").innerHTML = `${amount_tot} €`;

        //creazione del bilgietto

        document.getElementById("card_ticket").className = "show"
    });

    const btn_cancel = document.getElementById("btn_cancel")
    btn_cancel.addEventListener("click", function () {
        // cancella parametri
        document.getElementById("km").value = "";
        document.getElementById("age").value = "select";
        document.getElementById("full_name").value = "";
       

        document.getElementById("name_print").innerHTML = " "
        document.getElementById("vagon").innerHTML = " "
        document.getElementById("ticket_price_print").innerHTML = " "

        // nascondi biglietto
        document.getElementById("ticket").className = "hidden";
        document.getElementById("card_ticket").className = "hidden";
    });
    