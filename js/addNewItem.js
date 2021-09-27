var inputName = document.querySelector(".name_new_item");

var inputPreco = document.querySelector(".price_new_item");

var botaoName = document.querySelector(".icon_add");

var listaItens = document.querySelector(".itens_section");

botaoName.addEventListener("click", addNewItem);

localStorage.getItem("list");

function updateList() {
  localStorage.setItem("list", listaItens.innerHTML);
}

listaItens.innerHTML = localStorage.getItem("list");

function addNewItem() {
  listaItens.innerHTML += `<div class="item container">
                                <p class="itemName">${inputName.value}</p>
                                <div class="price_delete">
                                    <span class="full_price_place" >R$ <span class="price"> ${inputPreco.value}</span></span>
                                    
                                    
                                    <div class="box_icon icon_delete">
                                        <span class="material-icons icone">delete</span>
                                    </div>
                                </div>
                            </div>`;

  
  inputName.value= "";
  inputPreco.value = "";



  somaTotal();
  itemCounterDelete();
  itemCounterNamesandPrices();
  updateList();
}
