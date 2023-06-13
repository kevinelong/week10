"use strict";

function addItem() {
  var name = "";
  listData.push({
    name: name
  });
  var tile = appendTile(name, listData.length);
  list.appendChild(tile);
  tile.querySelector(".text").focus();
  tile.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === "Enter" || e.key === "Escape") {
      e.preventDefault();
      e.target.blur();
    }
  });
}

add.addEventListener("click", addItem);
var listData = [{
  name: "Apple"
}, {
  name: "Banana"
}, {
  name: "Cherry"
}];

function onClickRemove(element) {
  var tile = element.closest(".tile");
  tile.classList.add("removed");
  listData.splice(tile.id - 1, 1); // REMOVE FROM DATA

  setTimeout(function () {
    return tile.remove();
  }, 300); // REMOVE IS A METHOD ON EVERY ELEMENT
}

function onClickAddLeft(element) {
  var tile = element.closest(".tile");
  var fresh = appendTile("", Number(tile.id) - 1);
  tile.parentElement.insertBefore(fresh, tile);
}

function onClickAddRight(element) {
  var tile = element.closest(".tile");
  var fresh = appendTile("", Number(tile.id) - 1);
  tile.after(fresh);
}

function appendTile(content, index) {
  var div = document.createElement("div");
  div.classList.add("tile");
  div.id = index;
  div.innerHTML = "<div class=\"text\" contentEditable=\"true\">".concat(content, "</div>\n    <div class=\"add-left\" onclick=\"onClickAddLeft(this);\">+</div>\n    <div class=\"add-right\" onclick=\"onClickAddRight(this);\">+</div>\n                     <div class=\"remove\" onclick=\"onClickRemove(this);\">x</div>\n                     ");
  div.classList.add("adding");
  setTimeout(function () {
    return div.classList.remove("adding", 1);
  });
  return div;
}

for (var i = 0; i < listData.length; i++) {
  list.appendChild(appendTile(listData[i].name, i + 1));
}
//# sourceMappingURL=main.dev.js.map
