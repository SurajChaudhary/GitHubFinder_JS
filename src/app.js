//Instantiate GitHub Class
const gitHub = new Github();
//Instantiate UI Class
const ui = new UI();
//Search input
const searchUser = document.getElementById('searchUser');

//Search User event listener
searchUser.addEventListener('keyup',(e)=>{
  //Get input text
  const userText = e.target.value;
  if(userText !== ''){
    //Make HTTP call
    gitHub.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          //Show Alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //Show the profile of user
          ui.showProfile(data.profile);
          ui.showRepositories(data.repositories);
        }
      })
      .catch(err => {
        console.log("Something went wrong", err);
      })
  }else{
    //Clear profile
    ui.clearProfile();
  }
});