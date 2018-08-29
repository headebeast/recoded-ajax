import {
    Repository
} from "./script/helpers.js";

$(function () {
    const repo = new Repository('http://localhost:3000/users');


    $('#createUser').on('click', (e) => {
        let allUsers, allComments
        repo.create($('form').serializeFormJSON()).then(res => {

                $('table').append($('<tr>').html(`
            <td>${res.data.id}</td>
            <td>${res.data.name}</td>
            <td>${res.data.email}</td>
            <td>ACTIONS</td>
            `));

                return axios.get('http://localhost:3000/users')
            })
            .then(res => {
                allUsers = res.data;

                return axios.get('http://localhost:3000/comments')
            })
            .then(res => {
                allComments = res.data;
            })
            .then(() => {
                console.log('Users are: ' + JSON.stringify(allUsers))
                console.log('Comments are: ' + JSON.stringify(allComments))

                // $('#clear').click();
            })
            .catch(err => console.log('We have some error'));
    });
});

document.querySelector('#new-post').addEventListener('click', function () {
    let form = document.querySelector('.form22');
    let post = document.querySelector('#new-post');
    if (post.innerHTML === "New User") {
        form.style.visibility = "visible";
        return post.innerHTML = "Hide Form";
    } else if (post.innerHTML === "Hide Form") {
        form.style.visibility = "hidden";
        return post.innerHTML = "New User";
    };
});