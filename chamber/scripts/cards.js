/*fetch("../data/members.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Sorry, something went wrong", error);
    });*/

fetch('../data/members.json')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  