// XMLHttpRequest


function getUsers(page) {

let request = new XMLHttpRequest();
request.addEventListener('load', render);
request.addEventListener('error', errorRender);


request.open('GET', 'https://reqres.in/api/users?page=' + page);
request.send();
}

let currentPage = 1;
let totalPagesApi;


function render() {
    let response = this.responseText;
    let responseData = JSON.parse(response);

    var fragment = document.createDocumentFragment();


    // let ul = document.createElement('ul');
    
    responseData.data.forEach(item => {
        let li = document.createElement('li');


        let pEmail = document.createElement('p');
        pEmail.textContent = item.email;
        pEmail.classList.add('email-block');



        let image = document.createElement('img')
        image.src = item.avatar;
        image.classList.add('image-block')

        // ul.appendChild(li);
        li.appendChild(image)
        li.appendChild(pEmail);
        li.classList.add('li-item');

        fragment.appendChild(li);


    });

    // document.getElementById('api-user-email').appendChild(ul);
    document.getElementById('ul-list').innerHTML='';
    document.getElementById('ul-list').appendChild(fragment);

    totalPagesApi = responseData.total_pages;

}
    // console.log(responseData);



function errorRender() {
    let p = Document.createElement('p');
    p.textContent = 'Server Error';

    document.querySelector('#api-user-email').appendChild(p);
}



document.getElementById('prev').addEventListener('click',function () {
    if (currentPage == 1 ) {
        return;
    }
    currentPage -= 1;
    getUsers(currentPage);
})

document.getElementById('next').addEventListener('click', function () {
    if (currentPage == totalPagesApi) {
        return;
    }

    currentPage +=1;
    getUsers(currentPage);
})

getUsers(currentPage);