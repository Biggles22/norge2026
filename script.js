const cameras = [
    {
        route: "are-trondheim",
        routeLabel: "Åre-Trondheim",
        title: "Storlien / gränsen",
        road: "E14",
        focus: "Fjällväder och sikt innan Norge",
        location: "Storlien-Teveldalen",
        maps: "https://www.google.com/maps/search/?api=1&query=Storlien%20Teveldalen%20E14",
        vegvesen: "https://www.vegvesen.no/webkamera"
    },
    {
        route: "are-trondheim",
        routeLabel: "Åre-Trondheim",
        title: "Meråker",
        road: "E14",
        focus: "Väderutsatt dalsträcka",
        location: "Meråker",
        maps: "https://www.google.com/maps/search/?api=1&query=Mer%C3%A5ker%20E14",
        vegvesen: "https://www.vegvesen.no/trafikk"
    },
    {
        route: "are-trondheim",
        routeLabel: "Åre-Trondheim",
        title: "Stjørdal / Hell",
        road: "E14 / E6",
        focus: "Infart, köer och vägomläggningar",
        location: "Stjørdal",
        maps: "https://www.google.com/maps/search/?api=1&query=Stj%C3%B8rdal%20Hell%20E14",
        vegvesen: "https://www.vegvesen.no/trafikk"
    },
    {
        route: "are-trondheim",
        routeLabel: "Åre-Trondheim",
        title: "Trondheim infart",
        road: "E6",
        focus: "Stadstrafik och tunnelstatus",
        location: "Trondheim",
        maps: "https://www.google.com/maps/search/?api=1&query=Trondheim%20E6",
        vegvesen: "https://www.vegvesen.no/trafikk"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Orkanger",
        road: "E39",
        focus: "Ut från Trondheim mot kusten",
        location: "Orkanger",
        maps: "https://www.google.com/maps/search/?api=1&query=Orkanger%20E39",
        vegvesen: "https://www.vegvesen.no/trafikk"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Halsa / Kanestraum",
        road: "E39",
        focus: "Färjeläge och väntetid",
        location: "Halsa-Kanestraum",
        maps: "https://www.google.com/maps/search/?api=1&query=Halsa%20Kanestraum%20E39",
        vegvesen: "https://www.vegvesen.no/trafikk"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Kristiansund",
        road: "Rv70 / Fv64",
        focus: "Broar, vind och stadstrafik",
        location: "Kristiansund",
        maps: "https://www.google.com/maps/search/?api=1&query=Kristiansund%20Fv64",
        vegvesen: "https://www.vegvesen.no/trafikk"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Atlanterhavsvegen",
        road: "Fv64",
        focus: "Vind, vågor och broar",
        location: "Atlanterhavsvegen",
        maps: "https://www.google.com/maps/search/?api=1&query=Atlanterhavsvegen",
        vegvesen: "https://www.vegvesen.no/trafikk"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Molde",
        road: "E39 / E136",
        focus: "Stadstrafik och vidare mot Romsdalen",
        location: "Molde",
        maps: "https://www.google.com/maps/search/?api=1&query=Molde%20E39%20E136",
        vegvesen: "https://www.vegvesen.no/trafikk"
    },
    {
        route: "coast",
        routeLabel: "Kustvägen",
        title: "Åndalsnäs / Romsdalen",
        road: "E136",
        focus: "Fjordväg, regn och skredstatus",
        location: "Åndalsnäs",
        maps: "https://www.google.com/maps/search/?api=1&query=%C3%85ndalsnes%20E136",
        vegvesen: "https://www.vegvesen.no/trafikk"
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
            </div>
            <div class="camera-links">
                <a href="${camera.vegvesen}" target="_blank" rel="noreferrer">Öppna Vegvesen livevy</a>
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
