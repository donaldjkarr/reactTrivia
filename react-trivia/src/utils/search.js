import axios from 'axios';

export default function ajax() {
    var queryURL = "https://opentdb.com/api.php?amount=1&type=multiple";
    return axios.get(queryURL)
    .then(function(response) {
        console.log(response.data.results[0]);
    });
};
