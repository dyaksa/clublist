import clubs from "./clubs.js";

// class DataSource {
//     static searchClub(keyword) {
//         const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
//         return new Promise((resolve, reject) => {
//             if (filteredClubs.length) {
//                 resolve(filteredClubs);
//             } else {
//                 reject(`${keyword} is not found`);
//             }
//         });
//     }
// }
const BASE_URL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php";
class DataSource {
    static searchClub(keyword) {
        return fetch(`${BASE_URL}?t=${keyword}`, {
            method: "GET"
        }).then(response => {
            return response.json();
        }).then(results => {
            if (results.teams) {
                return Promise.resolve(results.teams);
            } else {
                return Promise.reject(`${keyword} not found`);
            }
        });
    }
}

export default DataSource;