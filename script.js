(function () {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    // const xhr = new XMLHttpRequest();

    // xhr.addEventListener('load', (ev) => {
    //     const result = JSON.parse(xhr.responseText);

    //     const tbody = $('table tbody');

    //     result.forEach((el, i) => {
    //         const tr = $('<tr>').append([
    //             $('<td>').html(el.id),
    //             $('<td>').html(el.userId),
    //             $('<td>').html(el.title),
    //             $('<td>').html(el.body)
    //         ]);

    //         tbody.append(tr);
    //     });
    // });

    // xhr.open('GET', url);
    // xhr.send();

    // $.ajax({
    //     url,
    //     method: 'GET',
    //     success: (data, req) => {
            
    //         const tbody = $('table tbody');
    //         data.forEach((el, i) => {
    //             const tr = $('<tr>')
    //                 .html(`<td>${el.id}</td>
    //                 <td>${el.userId}</td>
    //                 <td>${el.title}</td>
    //                 <td>${el.body}</td>
    //                 `);

    //             tbody.append(tr);
    //         })
    //     }
    // })

    // $.get(url, null, (data) => {
    //             const tbody = $('table tbody');
    //             data.forEach((el, i) => {
    //                 const tr = $('<tr>')
    //                     .html(`<td>${el.id}</td>
    //                     <td>${el.userId}</td>
    //                     <td>${el.title}</td>
    //                     <td>${el.body}</td>
    //                     `);
    
    //                 tbody.append(tr);
    //             })
    //         });

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         const tbody = $('table tbody');
    //             data.forEach((el, i) => {
    //                 const tr = $('<tr>')
    //                     .html(`<td>${el.id}</td>
    //                     <td>${el.userId}</td>
    //                     <td>${el.title}</td>
    //                     <td>${el.body}</td>
    //                     `);
    
    //                 tbody.append(tr);
    //             })
            
    //         return {json: () => "Bahra"};
    //     })
    //     .then(res => res.json())
    //     .then(data2 => {
    //         console.log(data2)
    //     })

    axios.get(url, {})
        .then(res => {
            const tbody = $('table tbody');
            res.data.forEach((el, i) => {
                const tr = $('<tr>')
                    .html(`<td>${el.id}</td>
                    <td>${el.userId}</td>
                    <td>${el.title}</td>
                    <td>${el.body}</td>
                    `);

                tbody.append(tr);
            })
        })


    $('#createBtn').on('click', () => {
        // const postXhr = new XMLHttpRequest();
        // postXhr.addEventListener('load', () => {
        //     console.log(postXhr.responseText);
        // })

        // postXhr.open('POST', url);
        // postXhr.setRequestHeader('Content-Type', 'application/json')

        // postXhr.send(JSON.stringify(
        //     {
        //         userId: $('#userId').val(),
        //         title: $('#title').val(),
        //         body: $('#body').val()
        //     }
        // ));

        // $.post(url ,  {
        //     userId: $('#userId').val(),
        //     title: $('#title').val(),
        //     body: $('#body').val()
        // }, (data) => {
        //     console.log(data);

        //     $.get(url, {}, d => {
        //         console.log(d);
        //     })
        // })

        axios.post(url, {
            userId: $('#userId').val(),
            title: $('#title').val(),
            body: $('#body').val()
        }).then(res => {
            console.log(res.data)

            return axios.get(url, {})
        }).then(res => console.log(res.data))
    });

    
}())