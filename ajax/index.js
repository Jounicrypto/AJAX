const button = document.getElementById('btn');
const mainDiv = document.getElementById('container');

button.addEventListener('click', ourRequest);

// function ourRequest(){
//     let xhr = new XMLHttpRequest();
//     console.log(xhr);
    
//     xhr.open('GET','./server/text.txt', true);
//     console.log(xhr);

//     xhr.onload = function(){
//         if(xhr.status === 200){
//             console.log(xhr.responseText);
//             mainDiv.innerHTML += `<p>${xhr.responseText}</p>`
//         } else if(xhr.status === 404) {
//             mainDiv.innerHTML += `<p>your request was not found</p>`
//         }
//     }
//     console.log(xhr);

//     xhr.send();
//     console.log(xhr);
// }

// function ourRequest(){
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://api.github.com/users', true);

//     xhr.onload = function(){
//         if(xhr.status === 200){
//             let responseArray = JSON.parse(xhr.responseText);
//             // console.log(responseArray);
//             responseArray.forEach(user =>{
//                 console.log(user);
//                 mainDiv.innerHTML += `<img src=${user.avatar_url} alt="">`
//             })
//         }else if(xhr.status === 404){
//             console.log('not found');
//         }
//     }

//     xhr.send();
// }


// function ourRequest(){
//     fetch('https://api.github.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

function ourRequest(){
    let xhr = new XMLHttpRequest();
    let my_subject = 'programming';
    let my_number = 3;
    xhr.open('GET', `https://api.tenor.com/v1/search?q=${my_subject}&key=LIVDSRZULELA&limit=${my_number}`, true);

    xhr.onload = function (){
        if(xhr.status === 200){
            console.log(xhr.responseText);
        } else if (xhr.status === 404){
            console.log('not found');
        }
    };

    xhr.send();
}