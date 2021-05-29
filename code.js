const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick = () => {
    searchBox.classList.add("active")
    searchInput.classList.add("active")
    searchBtn.classList.add("active")
    cancelBtn.classList.add("active")
    if (searchInput.value != "") {
        searchData.classList.remove("active")
        searchData.innerHTML = "You just typed " + "<strong>" + searchInput.value + "</strong>";
    }
    else {
        searchData.innerHTML = "";
    }
}
cancelBtn.onclick = () => {
    searchBox.classList.remove("active")
    searchInput.classList.remove("active")
    searchBtn.classList.remove("active")
    cancelBtn.classList.remove("active")
    searchData.classList.add("active")
    searchInput.value = ""
}
