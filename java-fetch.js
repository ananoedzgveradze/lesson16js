let currentPage=1;
let totalPagesApi;

function getUsers(page) {
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'GET'
    }).then(function (response) {
    if (response.status !== 200) {
        throw response.status;
    }
    return response. json();
}).then(function (responseData) {
    console.log(responseData);
    var fragment = document.createDocumentFragment();
    responseData.data.forEach(item => {
        let li = document.createElement('li');

        let pEmail = document.createElement('p');
        pEmail.textContent = item.email;

        let imgUser = document.createElement('img');
        imgUser.src=item.avatar;
        imgUser.classList.add('image-block');

        li.appendChild(imgUser);
        li.appendChild(pEmail);
        // li.appendChild(document.createElement('li-item'));
        fragment.appendChild(li);
    });
    document.getElementById('ul-list').innerHTML = '';
    document.getElementById('ul-list').appendChild(fragment);

    totalPagesApi = responseData.total_pages;
}).catch(function (error) {
    if (error == 404) {
        let p = document.createElement('p');
        p.textContent='server error';
        document.getElementById('api-user-email').appendChild(p);
    } else {
        console.log(error)
        console.log('Page is not Found');
    }
    
})


}

document.getElementById('loadprev').addEventListener('click',function () {
    if (currentPage ==1 ) {
        return;
    }
    currentPage -=1;
    getUsers(currentPage);
});

document.getElementById('loadnext').addEventListener('click',function () {
    currentPage +=1;
    console.log(currentPage);
    getUsers(currentPage);
})

getUsers(currentPage);