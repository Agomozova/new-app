// Create instance
const newsService = new NewsService(new CustomHttp());
const newsUI = new NewsUI();

// UI elements
const countrySelect = document.querySelector(".country");
const categorySelect = document.querySelector(".category");
const buttonClick = document.querySelector(".btn");
const setValue = document.querySelector("input");
const setFormOnClick = document.querySelector("form");


const getCountryTechnolodyHandler = () => {
    const country = countrySelect.value;
    const category = categorySelect.value;

    newsService.fetchTopHeadlines((res) => {
        const { articles, totalResults } = res;
        // todo проверить количество новостей
        newsUI.clearContainer();
        articles.forEach(news => newsUI.addNews(news));
    }, country, category);
};

const getEverythingHandler = () => {
    const q = setValue.value;
    if (q === "") return alert("Введите данные поиска!");
    newsService.fetchEverything((res) => {
        const { articles, totalResults } = res;
        newsUI.clearContainer();
        if (!articles.length) return newsUI.showEmptyMsg();
        articles.forEach(news => newsUI.addNews(news));
    }, q);
};

countrySelect.addEventListener("change", getCountryTechnolodyHandler);
categorySelect.addEventListener("change", getCountryTechnolodyHandler);
window.addEventListener("load", getCountryTechnolodyHandler);
buttonClick.addEventListener("click", getEverythingHandler);
setFormOnClick.addEventListener("submit", getEverythingHandler);
