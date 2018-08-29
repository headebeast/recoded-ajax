import {
    Repository
} from "./script/helpers.js";

document.querySelector('#new-post').addEventListener('click', function () {
    let form = document.querySelector('.form2');
    let post = document.querySelector('#new-post');
    if (post.innerHTML === "New Post") {
        form.style.visibility = "visible";
        return post.innerHTML = "Hide Form";
    } else if (post.innerHTML === "Hide Form") {
        form.style.visibility = "hidden";
        return post.innerHTML = "New Post";
    };

    // const editBtn = document.createElement('button');
    // editBtn.innerHTML = 'Edit Row';

    // const addCreateButton = function (e) {

    //     const saveBtn = document.createElement('button');
    //     saveBtn.innerHTML = 'Save Changes';

    //     const saveContainer = document.createElement('td');
    //     saveContainer.appendChild(saveBtn);

    //     document.querySelector('#action').appendChild(saveContainer);

    //     saveBtn.classList.add("btn-info");

    //     let tr = e.target.parentElement.parentElement.querySelectorAll('td');
    //     userId.value = tr[0].innerText;
    //     postText.value = tr[1].innerText;
    //     title.value = tr[2].innerText;

    //     function doEdit() {
    //         tr[0].innerText = userId.value;
    //         tr[1].innerText = postText.value;
    //         tr[2].innerText = title.value;
    //         postButton.removeEventListener('click', doPost);
    //         saveBtn.remove();
    //         empty();
    //         return saveBtn.remove();
    //     };

    //     if (userId.value.length !== 0 || title.value.length !== 0 || postText.value.length !== 0) {
    //         saveBtn.addEventListener('click', doEdit);

    //         postButton.addEventListener('click', doEdit);
    //         editBtn.removeEventListener("click", addCreateButton);
    //     };
    // }
    // editBtn.addEventListener("click", addCreateButton);

    // const deleteBtn = document.createElement('button');
    // deleteBtn.innerHTML = 'Delete Row';

    // const deleteAction = function () {
    //     document.querySelector('tr').remove();
    // };

    // editBtn.classList.add("btn-info");

    // const editContainer = document.createElement('td');
    // editContainer.appendChild(editBtn);

    // document.querySelector('#action').appendChild(editContainer);

    // deleteBtn.classList.add("btn-danger");

    // deleteBtn.addEventListener('click', deleteAction);

    // const deleteContainer = document.createElement('td');
    // deleteContainer.appendChild(deleteBtn);

    // document.querySelector('#action').appendChild(deleteContainer);






});


$(function () {
    const repo = new Repository('http://localhost:3000/posts');


    $('#postButton').on('click', (e) => {
        let allPosts
        repo.create($('.form2').serializeFormJSON()).then(res => {

                $('table').append($('<tr>').html(`
            <td>${res.data.id}</td>
            <td>${res.data.title}</td>
            <td>${res.data.body}</td>
            <td id="action"></td>
            `));

                return axios.get('http://localhost:3000/posts')
            })
            .then(res => {
                allPosts = res.data;

            })
            .then(() => {
                console.log('Posts are: ' + JSON.stringify(allPosts))

                $('#clear').click();
            })
            .catch(err => console.log('We have some error'));
    });
});