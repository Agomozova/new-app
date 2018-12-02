class NewsService {
    constructor(http) {
        this._key = "66a5610d7b4847a8a8e54624d52402e2";
        this._url = "https://newsapi.org/v2";
        this._country = "ua";
        this._category = "technology";
        this._http = http;
    }
    /**
     * 
     * @param {*} callback 
     * @param {*} country 
     * @param {*} category 
     */
    fetchTopHeadlines(callback, country = this._country, category = this._category) {
        this._http.get(`${this._url}/top-headlines?country=${country}&category=${category}&apiKey=${this._key}`, callback);
    };
    fetchEverything(callback, q) {
        this._http.get(`${this._url}/everything?q=${q}&apiKey=${this._key}`, callback);
    }
}

