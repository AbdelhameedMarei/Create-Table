let rowsInput = document.getElementById("rows");
let colsInput = document.getElementById("cols");
let btn = document.querySelector("button");

btn.addEventListener("click", createTable);

function createTable() {
  let body = document.body;
  let table = document.createElement("table");

  for (var i = 0; i < +rowsInput.value; i++) {
    let tr = document.createElement("tr"); //<tr></tr>
    table.appendChild(tr);
    for (var x = 0; x < +colsInput.value; x++) {
      let td = document.createElement("td"); //<td></td>
      let txt = document.createTextNode("item text");
      td.appendChild(txt);
      tr.appendChild(td);
    }
  }

  body.appendChild(table);
}
