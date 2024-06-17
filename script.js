let SearchForm = document.getElementById("search-form");
let Searchbox = document.getElementById("Search-box");
let SearchResult = document.getElementById("search-result");
let showmore = document.getElementById("show-more-btn");
let accessKey = "tOCz_GDvMGbS1DmOAAu07qZ-aYn357JsUJDz1_gh8CA";

let keyword = "";
let page = 1;

async function searchimage() {
  keyword = Searchbox.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  let response = await fetch(url);
  let data = await response.json();

  if (page === 1) {
    SearchResult.innerHTML = "";
  }

  let results = data.results;
  results.map((result) => {
    let image = document.createElement("img");
    image.src = result.urls.small;
    let imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    imagelink.appendChild(image);
    SearchResult.appendChild(imagelink);
  });
  showmore.style.display = "block";
}

SearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchimage();
});

showmore.addEventListener("click", () => {
  page++;
  searchimage();
});
