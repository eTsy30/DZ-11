const button = document.querySelector(".button");
const inp1 = document.querySelector(".inputOne");
const inp2 = document.querySelector(".inputTwo");

button.addEventListener("click", function (event) {
    let srt = inp1.value;
    document.querySelector(".area").value = srt.split(inp2.value).length - 1;
});
//////////////

const step = document.querySelector(".hw2otvet");
const srez = document.querySelector(".hw2Step");
let otvet = [];

srez.addEventListener("input", function (event) {
    const strtemp = document.querySelector(".hw2Str").value;
    const start = Number(document.querySelector(".hw2start").value);
    const end = Number(document.querySelector(".hw2end").value);
    const str = strtemp.split("");

    if (start < 0) {
        str.reverse().join("");
        Math.abs(start);
    }
    for (let i = start; i < end; i = i + Number(srez.value)) {
        otvet.push(str[i]);
    }
    if (start < 0) {
        document.querySelector(".hw2otvet").value = otvet
            .reverse()
            .join()
            .replace(/[\s,]/g, "");
    } else {
        document.querySelector(".hw2otvet").value = otvet
            .join()
            .replace(/[\s,]/g, "");
    }
});
//////////////////////

function sportRunner() {
    let start = Number(document.querySelector(".startRun").value);
    const finish = Number(document.querySelector(".finishRun").value);
    let table = document.createElement("table");
    let thead = document.createElement("thead");

    table.appendChild(thead);

    let row_1 = document.createElement("tr");
    let heading_1 = document.createElement("th");
    let heading_2 = document.createElement("th");

    let texDay = document.createTextNode("День");
    let texresult = document.createTextNode("Результат");

    heading_1.appendChild(texDay);
    heading_2.appendChild(texresult);

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);

    thead.appendChild(row_1);

    let day = 1;
    console.log(typeof start);
    console.log(typeof finish);
    while (start < finish) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        start = start + (start * 10) / 100;
        day = day + 1;
        console.log("day-", day, "progres=", start);
        let td1Text = document.createTextNode(day);
        let td2Text = document.createTextNode(start.toFixed(2));

        td1.appendChild(td1Text);
        td2.appendChild(td2Text);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }

    document.querySelector(".runner").appendChild(table);
    document.querySelector("h1").innerText =
        "на " +
        day +
        "-й день спортсмен достиг результата — не менее " +
        finish +
        " км.";
    document.querySelector(".text4").style.cssText = `display: flex; !important
    justify-content: center;
    flex-direction: column;
    align-items: center;
    `;
}
