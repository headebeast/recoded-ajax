import {
    Repository
} from "./script/helpers.js";

$(function () {
    const repo = new Repository('http://localhost:3000/categories');


    $('#postCategorey').on('click', (e) => {
        let allCategories
        repo.create($('.form2').serializeFormJSON()).then(res => {

                $('table').append($('<tr>').html(`
            <td>${res.data.id}</td>
            <td>${res.data.name}</td>
            <td>ACTIONS</td>
            `));

                return axios.get('http://localhost:3000/categories');
            })
            .then(res => {
                allCategories = res.data;

            })
            .then(() => {
                console.log('Categories are: ' + JSON.stringify(allCategories));

                $('#clear').click();
            })
            .catch(err => console.log('We have some error'));
    });
});

document.querySelector('#new-post').addEventListener('click', function () {
    let form = document.querySelector('.form2');
    let post = document.querySelector('#new-post');
    
    if (post.innerHTML === "New Category") {
        form.style.visibility = "visible";
        return post.innerHTML = "Hide Form";
    } else if (post.innerHTML === "Hide Form") {
        form.style.visibility = "hidden";
        return post.innerHTML = "New Category";
    };
});

