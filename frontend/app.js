const imagesDiv = document.querySelector(".images");
addImages();

async function addImages() {
  
  
  await fetch("http://localhost:8050/api/photos/1")
  .then(res => res.json())
  .then(res => {
    res.photos.photo.forEach(photo => {
      console.log(photo);
      const newDiv = document.createElement("div");
      newDiv.classList.add("photo");
      const image = document.createElement("img");
      image.src = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      newDiv.appendChild(image);
      const photoBox = document.createElement("h5");
      photoBox.innerText = photo.title;
      newDiv.appendChild(photoBox);
      imagesDiv.appendChild(newDiv);
    });
  });
}