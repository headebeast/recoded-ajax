import {
    Repository
} from "./script/helpers.js";

$(function () {
    const repo = new Repository('http://localhost:3000/comments');


    $('#postComment').on('click', (e) => {
        let allcomments
        repo.create($('.form2').serializeFormJSON()).then(res => {

                $('table').append($('<tr>').html(`
            <td>${res.data.id}</td>
            <td>${res.data.title}</td>
            <td>${res.data.body}</td>
            <td>ACTIONS</td>
            `));

                return axios.get('http://localhost:3000/comments');
            })
            .then(res => {
                allcomments = res.data;

            })
            .then(() => {
                console.log('Comments are: ' + JSON.stringify(allcomments));

                $('#clear').click();
            })
            .catch(err => console.log('We have some error'));
    });
});

document.querySelector('#new-post').addEventListener('click', function () {
    let form = document.querySelector('.form2');
    let post = document.querySelector('#new-post');

    if (post.innerHTML === "New Comment") {
        form.style.visibility = "visible";
        return post.innerHTML = "Hide Form";
    } else if (post.innerHTML === "Hide Form") {
        form.style.visibility = "hidden";
        return post.innerHTML = "New Comment";
    }

});