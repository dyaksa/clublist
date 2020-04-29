import "../component/club-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const clubListElement = document.querySelector("club-list");
    const searchBar = document.querySelector("search-bar");

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchBar.value)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = results => {
        clubListElement.clubs = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError = message;
    };

    // buttonSearchElement.addEventListener("click", onButtonSearchClicked);
    searchBar.clickEvent = onButtonSearchClicked;
};


export default main