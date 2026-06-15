const cameras = [
    {
        route: "are-trondheim",
        routeLabel: "Åre-Trondheim",
        title: "Storlien / gränsen",
        road: "E14",
        focus: "Fjällväder och sikt innan Norge",
        location: "Storlien-Teveldalen",
        maps: "https://www.google.com/maps/search/?api=1&query=Storlien%20Teveldalen%20E14",
        cameraName: "Teveldalen",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/1729006",
        image: "https://kamera.atlas.vegvesen.no/api/images/1729006_1"
    },
    {
        route: "are-trondheim",
        routeLabel: "Åre-Trondheim",
        title: "Meråker",
        road: "E14",
        focus: "Väderutsatt dalsträcka",
        location: "Meråker",
        maps: "https://www.google.com/maps/search/?api=1&query=Mer%C3%A5ker%20E14",
        cameraName: "Meådal",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/1729007",
        image: "https://kamera.atlas.vegvesen.no/api/images/1729007_1"
    },
    {
        route: "are-trondheim",
        routeLabel: "Åre-Trondheim",
        title: "Stjørdal / Hell",
        road: "E14 / E6",
        focus: "Infart, köer och vägomläggningar",
        location: "Stjørdal",
        maps: "https://www.google.com/maps/search/?api=1&query=Stj%C3%B8rdal%20Hell%20E14",
        cameraName: "Malvik",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/1629009",
        image: "https://kamera.atlas.vegvesen.no/api/images/1629009_1"
    },
    {
        route: "are-trondheim",
        routeLabel: "Åre-Trondheim",
        title: "Trondheim infart",
        road: "E6",
        focus: "Stadstrafik och tunnelstatus",
        location: "Trondheim",
        maps: "https://www.google.com/maps/search/?api=1&query=Trondheim%20E6",
        cameraName: "Heimdal",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/1629003",
        image: "https://kamera.atlas.vegvesen.no/api/images/1629003_1"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Orkanger",
        road: "E39",
        focus: "Ut från Trondheim mot kusten",
        location: "Orkanger",
        maps: "https://www.google.com/maps/search/?api=1&query=Orkanger%20E39",
        cameraName: "Kallfoss",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/1629002",
        image: "https://kamera.atlas.vegvesen.no/api/images/1629002_1"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Halsa / Kanestraum",
        road: "E39",
        focus: "Färjeläge och väntetid",
        location: "Halsa-Kanestraum",
        maps: "https://www.google.com/maps/search/?api=1&query=Halsa%20Kanestraum%20E39",
        cameraName: "Kanestraum ferjekai",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/3000032",
        image: "https://kamera.atlas.vegvesen.no/api/images/3000032_1"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Kristiansund",
        road: "Rv70 / Fv64",
        focus: "Broar, vind och stadstrafik",
        location: "Kristiansund",
        maps: "https://www.google.com/maps/search/?api=1&query=Kristiansund%20Fv64",
        cameraName: "Gjemnessundbrua",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/1529025",
        image: "https://kamera.atlas.vegvesen.no/api/images/1529025_1"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Atlanterhavsvegen",
        road: "Fv64",
        focus: "Vind, vågor och broar",
        location: "Atlanterhavsvegen",
        maps: "https://www.google.com/maps/search/?api=1&query=Atlanterhavsvegen",
        cameraName: "Atlanterhavsvegen",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/3000819",
        image: "https://kamera.atlas.vegvesen.no/api/images/3000819_1"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Molde",
        road: "E39 / E136",
        focus: "Stadstrafik och vidare mot Romsdalen",
        location: "Molde",
        maps: "https://www.google.com/maps/search/?api=1&query=Molde%20E39%20E136",
        cameraName: "Molde ferjekai",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/3000033",
        image: "https://kamera.atlas.vegvesen.no/api/images/3000033_1"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Åndalsnäs / Romsdalen",
        road: "E136",
        focus: "Fjordväg, regn och skredstatus",
        location: "Åndalsnäs",
        maps: "https://www.google.com/maps/search/?api=1&query=%C3%85ndalsnes%20E136",
        cameraName: "Isfjorden",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/1529019",
        image: "https://kamera.atlas.vegvesen.no/api/images/1529019_1"
    },
    {
        route: "trollstigen",
        routeLabel: "Trollstigen-Geiranger",
        title: "Åndalsnäs / Isterdalen",
        road: "Fv63",
        focus: "Start mot Trollstigen, väder och trafikmängd",
        location: "Åndalsnäs-Isterdalen",
        maps: "https://www.google.com/maps/search/?api=1&query=%C3%85ndalsnes%20Isterdalen%20Fv63",
        cameraName: "Trollstigen mot Åndalsnäs",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/3000408",
        image: "https://kamera.atlas.vegvesen.no/api/images/3000408_1"
    },
    {
        route: "trollstigen",
        routeLabel: "Trollstigen-Geiranger",
        title: "Trollstigen",
        road: "Fv63",
        focus: "Säsongsöppning, rasfare, hårnålar och köer",
        location: "Trollstigen",
        maps: "https://www.google.com/maps/search/?api=1&query=Trollstigen%20Fv63",
        cameraName: "Trollstigen mot Valldal",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/3000408",
        image: "https://kamera.atlas.vegvesen.no/api/images/3000408_2"
    },
    {
        route: "trollstigen",
        routeLabel: "Trollstigen-Geiranger",
        title: "Gudbrandsjuvet / Valldal",
        road: "Fv63",
        focus: "Trång turistväg, stopp och väderbyte",
        location: "Gudbrandsjuvet-Valldal",
        maps: "https://www.google.com/maps/search/?api=1&query=Gudbrandsjuvet%20Valldal%20Fv63",
        cameraName: "Valldal v/Juvet",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/3000661",
        image: "https://kamera.atlas.vegvesen.no/api/images/3000661_1"
    },
    {
        route: "trollstigen",
        routeLabel: "Trollstigen-Geiranger",
        title: "Linge / Eidsdal färja",
        road: "Fv63",
        focus: "Färjeläge, kö och avgångar över fjorden",
        location: "Linge-Eidsdal",
        maps: "https://www.google.com/maps/search/?api=1&query=Linge%20Eidsdal%20ferry",
        cameraName: "Närmast: Valldal v/Juvet",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/3000661",
        image: "https://kamera.atlas.vegvesen.no/api/images/3000661_1"
    },
    {
        route: "trollstigen",
        routeLabel: "Trollstigen-Geiranger",
        title: "Ørnesvingen / Geiranger",
        road: "Fv63",
        focus: "Brant nedfart, turisttrafik och utsiktsstopp",
        location: "Ørnesvingen-Geiranger",
        maps: "https://www.google.com/maps/search/?api=1&query=%C3%98rnesvingen%20Geiranger%20Fv63",
        cameraName: "Korsmyra mot Geiranger",
        vegvesen: "https://www.vegvesen.no/trafikk/vaerveikamera/1529007",
        image: "https://kamera.atlas.vegvesen.no/api/images/1529007_2"
    }
];

const cameraGrid = document.querySelector("#cameraGrid");
const cameraCount = document.querySelector("#cameraCount");
const filters = document.querySelectorAll(".filter");

function renderCameras(filter = "all") {
    const visible = filter === "all"
        ? cameras
        : cameras.filter(camera => camera.route === filter);

    cameraGrid.innerHTML = visible.map(camera => `
        <article class="camera-card">
            <div class="camera-top">
                <div>
                    <h3>${camera.title}</h3>
                    <p>${camera.focus}</p>
                </div>
                <span class="tag">${camera.routeLabel}</span>
            </div>
            <div class="camera-meta">
                <span>Väg: <strong>${camera.road}</strong></span>
                <span>Plats: <strong>${camera.location}</strong></span>
                <span>Kamera: <strong>${camera.cameraName}</strong></span>
            </div>
            <div class="camera-links">
                <a href="${camera.vegvesen}" target="_blank" rel="noreferrer">Öppna rätt kamera</a>
                <a href="${camera.image}" target="_blank" rel="noreferrer">Öppna aktuell bild</a>
                <a href="${camera.maps}" target="_blank" rel="noreferrer">Visa plats</a>
            </div>
        </article>
    `).join("");

    cameraCount.textContent = cameras.length;
}

filters.forEach(button => {
    button.addEventListener("click", () => {
        filters.forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        renderCameras(button.dataset.filter);
    });
});

renderCameras();
