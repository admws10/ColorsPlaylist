const albums = [
  {
    title: "Utopia",
    artist: "Travis Scott",
    image: "https://i.scdn.co/image/ab67616d0000b2739aa63baf82a0a8d1a2a962d5",
    spotify: "https://open.spotify.com/album/18NOKLkZETa4sWwLMIm0UZ"
  },
  {
    title: "DS4EVER",
    artist: "Gunna",
    image: "https://i.scdn.co/image/ab67616d0000b273d5f81f151c1cc8e4ce710f84",
    spotify: "https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK"
  },
  {
    title: "IGOR",
    artist: "Tyler, The Creator",
    image: "https://i.scdn.co/image/ab67616d0000b2735c1365d9383d9546eeab8fba",
    spotify: "https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE"
  }
];

const albumGrid = document.getElementById("album-grid");
const searchInput = document.getElementById("search");

function createAlbumCard(album) {
  const card = document.createElement("div");
  card.className = "album-card";

  const img = document.createElement("img");
  img.src = album.image;
  img.className = "album-image";
  img.crossOrigin = "anonymous";

  const info = document.createElement("div");
  info.className = "album-info";
  info.innerHTML = `
    <div class="album-title">${album.title}</div>
    <div class="album-artist">${album.artist}</div>
    <a href="${album.spotify}" target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
  `;

  const paletteDiv = document.createElement("div");
  paletteDiv.className = "palette";

  img.onload = () => {
    const colorThief = new ColorThief();
    const palette = colorThief.getPalette(img, 5);
    palette.forEach(color => {
      const colorBlock = document.createElement("div");
      colorBlock.className = "color-block";
      colorBlock.style.backgroundColor = `rgb(${color.join(",")})`;
      paletteDiv.appendChild(colorBlock);
    });
  };

  card.appendChild(img);
  card.appendChild(paletteDiv);
  card.appendChild(info);
  albumGrid.appendChild(card);
}

function renderAlbums(filter = "") {
  albumGrid.innerHTML = "";
  albums
    .filter(album => album.title.toLowerCase().includes(filter.toLowerCase()) || album.artist.toLowerCase().includes(filter.toLowerCase()))
    .forEach(createAlbumCard);
}

searchInput.addEventListener("input", e => {
  renderAlbums(e.target.value);
});

renderAlbums();
