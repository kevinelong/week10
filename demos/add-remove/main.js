function addItem(){
    const name = "";
    listData.push({name:name});
    const tile = appendTile(name, listData.length);
    list.appendChild(tile);
    tile.querySelector(".text").focus();
    tile.addEventListener('keydown', (e)=> {
        console.log(e.key)
        if(e.key === "Enter" || e.key === "Escape"){
            e.preventDefault();
            e.target.blur();
        }
    });
}
add.addEventListener("click", addItem)
let listData = [
    {
        name:"Apple"
    },
    {
        name:"Banana"
    },
    {
        name:"Cherry"
    },
];
function onClickRemove(element){
    const tile = element.closest(".tile");
    tile.classList.add("removed");
    listData.splice(tile.id - 1, 1);// REMOVE FROM DATA
    setTimeout(()=>tile.remove(), 300); // REMOVE IS A METHOD ON EVERY ELEMENT
}   
function onClickAddLeft(element){
    const tile = element.closest(".tile");
    const fresh = appendTile("", Number(tile.id) - 1)
    tile.parentElement.insertBefore(fresh, tile);
}
function onClickAddRight(element){
    const tile = element.closest(".tile");
    const fresh = appendTile("", Number(tile.id) - 1)
    tile.after(fresh);
}
function appendTile(content, index){
    const div = document.createElement("div");
    div.classList.add("tile");
    div.id = index;
    div.innerHTML = `<div class="text" contentEditable="true">${content}</div>
    <div class="add-left" onclick="onClickAddLeft(this);">+</div>
    <div class="add-right" onclick="onClickAddRight(this);">+</div>
                     <div class="remove" onclick="onClickRemove(this);">x</div>
                     `;
    div.classList.add("adding");
    setTimeout(()=> div.classList.remove("adding",1));
    return div;
}
for(let i=0; i < listData.length; i++){
    list.appendChild( appendTile(listData[i].name, i+1) );
} 
