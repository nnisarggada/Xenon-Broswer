document.getElementById("browser").addEventListener("dom-ready", function (e) {
  document.getElementById("browser").insertCSS(`
    ::-webkit-scrollbar{
        width: 7px;
    }
    ::-webkit-scrollbar-track-piece{
        background-color: #000;
        display: none;
    }
    ::-webkit-scrollbar-track-piece:hover{
        background-color: #202020;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #303030;
        border-radius: 5px;
        max-height: 100px;
    }

    ::-webkit-scrollbar-thumb:hover{
        background-color: #505050;
    }
    `);
});

document.getElementById("back_button").addEventListener("click", goBack);
document.getElementById("forward_button").addEventListener("click", goForward);
document.getElementById("home_button").addEventListener("click", goHome);
document.getElementById("go_button").addEventListener("click", go);
document.getElementById("url_bar").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    go();
  }
});

function goHome() {
  document.getElementById("browser").loadURL("https://searx.work");
}

function goBack() {
  document.getElementById("browser").goBack();
}

function goForward() {
  document.getElementById("browser").goForward();
}

function go() {
  let string_searched = document.getElementById("url_bar").value;

  if (string_searched.startsWith("@y ")) {
    string_searched =
      "https://youtube.com/search?&q=" + string_searched.replace("@y ", "");
  } else if (string_searched.startsWith("@g ")) {
    string_searched =
      "https://google.com/search?&q=" + string_searched.replace("@g ", "");
  } else if (!string_searched.startsWith("http")) {
    string_searched = "http://" + string_searched;
  }

  document.getElementById("browser").loadURL(string_searched);
}
