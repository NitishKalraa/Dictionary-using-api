class Form {
  constructor() {
    this.search = createInput();
    this.search.style("border-radius", "20px");
    this.search.style("border-color", "crimson");
    this.search.style("border-width", "5px");
    this.search.style("width", "200px");
    this.search.style("height", "30px");

    this.submit = createButton("Submit");
    this.submit.style("border-color", "lightpink");
    this.submit.style("width", "100px");
    this.submit.style("height", "30px");
    this.submit.style("color", "skyblue");
    this.submit.style("border-width", "4px");
    this.submit.style("border-radius", "4px");
    this.submit.style("cursor", "pointer");
  }

  display() {
    image(footer, width - 250, height - 100, 200, 100);

    this.submit.position(width / 2 - 40, this.search.y + 80);
    this.search.position(width / 2 - 100, height / 4);
    // header
    textFont(font);
    textSize(60);
    fill("crimson");
    text("Dictionary", width / 2 - 150, this.search.y - 50);
    fill("yellow");
    noStroke();
    ellipse(width / 2 - 108, this.search.y - 110, 20, 20);

    // fetching meaning from api

    this.submit.mousePressed(async () => {
      if (this.search.value() == "") {
        alert("enter something");
      } else {
        var fetching = await fetch(
          "https://api.dictionaryapi.dev/api/v2/entries/en/" +
            this.search.value()
        );
        res = await fetching.json();
        meaning = res[0].meanings[0].definitions[0].definition;
        synonym = res[0].meanings[1].definitions[0].synonyms;
      }
    });

    // only to appear if the response is not null
    if (meaning != null && meaning != "") {
      textSize(20);
      text("MEANING :", 40, this.submit.y + 50);
      fill("whitesmoke");

      if (meaning.length > 80) {
        var temp1 = meaning.slice(0, 80);
        var temp2 = meaning.slice(80, meaning.length);
        text(temp1, 20, this.submit.y + 100);
        text(temp2, 20, this.submit.y + 150);
      } else {
        text(meaning, 20, this.submit.y + 100);
      }
      fill("navy");
      text("SYNONYMS :", 40, this.submit.y + 200);
      for (var i = 0; i < synonym.length; i++) {
        fill("orange");
        text("🔴 " + synonym[i], 50, this.submit.y + 250 + i * 30);
      }
    }
  }
}
