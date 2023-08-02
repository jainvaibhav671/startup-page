async function loadUI() {
  let request = new Request("json/page.json");
  let response = await fetch(request);
  let jsonObj = await response.json();

  loadImage(jsonObj["main-image"]);
  // loadLinks(jsonObj["links"]);
}

function loadImage(jsonObj) {
  let img = document.querySelector("#main-image");
  console.log(jsonObj);
  img.src = jsonObj["src"];
  img.alt = jsonObj["alt"];
}

function loadLinks(links) {
  let linksDiv = document.querySelector(".links");
  for (let container of links) {
    console.log(container);
    let containerDiv = document.createElement("div");
    containerDiv.class = "container";
    linksDiv.append(containerDiv);

    let ul = document.createElement("ul");
    containerDiv.append(ul);

    for (let obj of container) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      li.append(a);
      ul.append(li);

      a.href = obj["href"];
      a.textContent = obj["text"];
    }
  }
}

loadUI();
