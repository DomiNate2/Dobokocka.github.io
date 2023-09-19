var kepek = new Array("egy.png", "kettes.png", "harmas.png", "negyes.png", "otos.png", "hatos.png");

function dobas() {
    var rsz = Math.floor(Math.random() * kepek.length)
    {
        document.getElementById("elso").src = kepek[rsz];
    }
    var rsz2 = Math.floor(Math.random() * kepek.length)
    {
        document.getElementById("masodik").src = kepek[rsz2];
    }

    var novel = rsz + 1;
    var novel2 = rsz2 + 1;

    var eredm = novel + novel2;
    eredmeny.innerHTML = eredm;
}