
const GITHUB_API = "https://api.github.com/users/ankitpaal";


const user = fetch(GITHUB_API);
console.log(user);

user.then(function(data){
  console.log(data);
});



/*console.log('Start');

fetch('https://api.github.com/users/ankitpaal')
    .then(response => response.json())
    .then(data => {
        console.log('Data:', data);
    });

console.log('End');
*/
