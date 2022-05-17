// // ajax request.

// //1.xml http request
// //2.fetch


// function getUsers() {

// }
// let request = new XMLHttpRequest();
// request.addEventListener('load', render);
    


// request.open('GET', 'https://reqres.in/api/users?page=2');

// request.send();

// function render () {
//  let response = this.responseText;
//  let responseData = JSON.parse(response);

// //  //let ul = document.createElement('ul');

// //  responseData.data.forEach(item => {
// //      let li = document.createElement('li');
// //      li.textContent = item.email;
// //      li.classList.add('li-item');

// //      ul.appendChild(li);

// //  });

// let ul = document.createElement('ul');
// let li = document.createElement('li');
// li.textContent = responseData.data[2].email;
// ul.appendChild(li);

//  document.getElementById('api-user-email').appendChild(ul);

//  console.log (responseData);
// }

// getUsers();