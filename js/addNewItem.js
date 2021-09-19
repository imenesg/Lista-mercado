var inputName = document.querySelector(".name_new_item");

var inputPreco = document.querySelector(".price_new_item");

var botaoName = document.querySelector(".icon_add");

var listaItens = document.querySelector(".itens_section");

botaoName.addEventListener("click", addNewItem);

localStorage.getItem("list");

listaItens.innerHTML = localStorage.getItem("list");    




function addNewItem() {
  console.log("funfando 0");
  /*console.log(inputName.value);*/
  console.log(listaItens);

  listaItens.innerHTML += `<div class="item container">
                                <p>${inputName.value}</p>
                                <div class="price_delete">
                                    <span >R$ <span class="price"> ${inputPreco.value}</span></span>
                                    
                                    
                                    <div class="box_icon icon_delete">
                                        <span class="material-icons icone">delete</span>
                                    </div>
                                </div>
                            </div>`;

                            somaTotal ();
                            itemCounterDelete();

   localStorage.setItem("list", listaItens.innerHTML );
}
