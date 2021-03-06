const imagesDiv = document.querySelector(".images");
const loadingDiv = document.querySelector(".loading");
let activePage = 1;
let totalPages = activePage;
addImages();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight && activePage < totalPages) {
    activePage++;
    addImages();
  };
})

async function addImages() {
  loadingDiv.classList.add("active");
  await fetch("http://localhost:8050/api/photos/" + activePage)
  .then(res => res.json())
  .then(res => {
    totalPages = res.photos.pages
    res.photos.photo.forEach(photo => {
      imagesDiv.appendChild(createPhotoBox(photo));
    });
    loadingDiv.classList.remove("active");
  })
  .catch(() => {
    loadingDiv.innerText = "Loading failed!"
  });
}

function createPhotoBox(photo) {
  const photoBox = document.createElement("div");
      photoBox.classList.add("photo");
      const image = document.createElement("img");
      image.src = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      photoBox.appendChild(image);
      const photoTitle = document.createElement("h5");
      photoTitle.innerText = photo.title;
      photoBox.appendChild(photoTitle);
      return photoBox;
}