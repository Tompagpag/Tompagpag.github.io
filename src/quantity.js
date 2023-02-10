// Récupérer les éléments du DOM
const input = document.getElementById("quantite");
const minusSpan = input.previousElementSibling;
const plusSpan = input.nextElementSibling;
const initialPrice = parseInt(document.getElementById('price').innerText.match(/\d+/g), 10);

// Callback pour augmenter le prix
const addItemToTotalPrice = () => {
  const itemPrice = document.getElementById('price');
  let price = itemPrice.innerText.match(/\d+/g);
  if (price = parseFloat(price[0]), 10) {
    itemPrice.innerText = `${price + initialPrice} €`
  }
  let value = parseInt(input.value, 10);
    value++;
    input.value = value;
}

// Callback pour diminuer le prix
const substractItemToTotalPrice = () => {
  let value = parseInt(input.value, 10);
  if(value > 1) {
    value--;
    input.value = value;
    const itemPrice = document.getElementById('price');
    let price = parseInt(itemPrice.innerText.match(/\d+/g), 10);
    itemPrice.innerText = `${price -  initialPrice} €`
  }
}

// Ecoute sur les clicks des spans + et -
minusSpan.addEventListener('click', substractItemToTotalPrice);
plusSpan.addEventListener('click', addItemToTotalPrice);
