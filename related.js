import fetch from "node-fetch";
const relatedTerms = async (term) => {
    try {
        let searchInput = term;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        const json = await (await fetch(url, options)).json();
        const r = json.search_results.map((term) => term.title);
        return [r[0], r[1], r[2]];

    } catch (error) {
        console.error(error);
        return [];
    }
}
export default relatedTerms;