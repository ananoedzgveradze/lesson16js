// // ajax request.

// //1.xml http request
// //2.fetch


// function getUsers(page) {


// let request = new XMLHttpRequest();
// request.addEventListener('load', render);
// request.addEventListener('error', errorrender);
    


// request.open('GET', 'https://reqres.in/api/users?page=' + page);

// request.send();

// }

// let currentPage=1;
// let totalPagesApi;

// function render () {
//  let response = this.responseText;
//  let responseData = JSON.parse(response);


// var fragment = document.createDocumentFragment();


//  responseData.data.forEach(item => {
//      let image = document.createElement('img');
//      image.src=item.avatar;
//      image.classList.add('class', 'image-block');

//      let li = document.createElement('li');

//      let Eemail = document.createElement('p');
//      Eemail.textContent=item.email;
//      Eemail.classList.add('class','E-email');

//      li.classList.add('class', 'list');

//      li.appendChild(image);
//      li.appendChild(Eemail);

//      fragment.appendChild(li);

//  })

// document.getElementById('ul-list').innerHTML = ' ';
// document.getElementById('ul-list').appendChild(fragment);
// totalPagesApi = responsedata.total_pages;

// }

// function errorrender() {
//     let error = document.createElement('p');
//     error.textContent = 'Server error';

//     document.getElementById('main-section').appendChild(error);

// }

// document.getElementById('previous').addEventListener('click', function () {
//     if (currentPage == 1) {
//         return;
//     }

//     currentPage -= 1;
//     getuser(currentPage);

// })

// document.getElementById('next').addEventListener('click', function () {
//     if (currentPage == totalPagesApi) {
//         return;
//     }
//     currentPage += 1;
//     getuser(currentPage);
// })

// getuser(currentPage);


// let ul = document.createElement('ul');
// let li = document.createElement('li');
// li.textContent = responseData.data[2].email;
// ul.appendChild(li);

//  document.getElementById('api-user-email').appendChild(ul);

//  console.log (responseData);


// getUsers();