#CONSEGNA:

Calcolo del prezzo del biglietto del treno

DESCRIZIONE:

Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).

<!-- STEPS -->

- Step1: Ottenre informazioni
    - Chiedere di inaserire il numero di km  
    - Chiedere l'età

- Step2: Calcolare prezzo biglietto
    - calcolare in base ai kilometri
    - calcolare sconti
        -SE meno di 18 20%
        -SE sopra i 65 40%

- Step3: Dare prezzo finale in forma umana

    - Arrotondare a 2 decimali

<!-- STRUMENTI -->

- variabili
- prompt
- .Number
- .toFixed(2)   ---> per avere solo 2 decimali
- if - if else


MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

TECNOLOGIES

-HTML
-JS

STEP

-Step 1: in HTML file creat a form with:
    - 2 input
        - km distance
        - users age
    - 1 button

- Step 2: connect HTML nodes to JS instruction by variables 
        - input 1 = km
        - input 2 = age
        - button = on click

    - Add by variables the logic and code from above "train ticket price"

- Step 3:

    - Generate ticket on button click using addEventListener
    - Print the result using consol.log

TOOLS
- variables
- addEventListener
- consol.log
- getElemnetBy
- querySelector



MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.