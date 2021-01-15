
// button.addEventListener("click",(e)=>{
//     let list=document.querySelector(".list-group")
//     fetch('https://api.github.com/users')
//    .then(res=>res.json())
//    .then(data=>{
//        console.log(data);
//        data.forEach(item=>{
//          let div=document.createElement('div');
//          div.innerHTML=`
//          <h3>Name: ${item.login}</h3>
//          <h5>Avatar: ${item.avatar_url}</h5>
//          <p>Events: ${item.events_url}</p>`
//          list.appendChild(div);
//        })
//    })
// })
// fetch("https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?format=json&count=10&gender=b&maxage=40&minage=30&cc=all&email=gmail.com%2Cyahoo.com&pwlen=12&ip=a&phone=l%2Ct%2Co&uuid=1&lic=1&color=1&seed=helloworld&images=1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "8e107b3245msh1e7785614a704bep164140jsnded65d2a7e6c",
// 		"x-rapidapi-host": "dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(err => {
// 	console.error(err);
// });

// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });

let searchBtn=document.getElementById("search");


searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    /////////**image */
    let image=document.getElementById("image")
    //*****button data */
    let repo=document.getElementById("repo"),
         gist=document.getElementById("gist"),
         follower=document.getElementById("followers"),
         following=document.getElementById("following")
////////////////****** list data: */
let  name=document.getElementById("name"),
      blog=document.getElementById("blog"),
   company=document.getElementById("company"),
     organization=document.getElementById("organization"),
     location=document.getElementById("location")
    
////////////***profile search */
let searchProfile=document.getElementById("searchProfile")
let inputField=document.getElementById("inputField").value.toLowerCase().trim()
    fetch(`https://api.github.com/users/${inputField}`)
    .then(res=>res.json())
    .then(data=>{
      let profile=data;
      //console.log(profile);
      if(profile.message=="Not Found"){
         let alert=document.querySelector(".alert")
         alert.style.display="block"
         alert.innerHTML=`<h5>User Not Found in Github Database</h5>`
      }else{
        let alert=document.querySelector(".alert")
        alert.style.display="none"
        image.src=`${profile.avatar_url}`
        repo.textContent=`Public Repo: ${profile.public_repos}`
        gist.textContent=`Public gists: ${profile.public_gists}`
        follower.textContent=`Followers: ${profile.followers}`
        following.textContent=`Following: ${profile.following}`
        ////**bio */
       name.innerHTML=`Name: <h3>${profile.name}</h3>`
       blog.innerHTML=`Blog:  <h5>${profile.blog}</h5>`
       company.innerHTML=`Company: <h5>${profile.company}</h5>`
       organization.innerHTML=`Organization Url: <h5>${profile.organizations_url}</h5>`
       location.innerHTML=`Location: <h5>${profile.location}</h5>`
       /////////***search profile */
       let link=document.getElementById("link");
       link.href=`${profile.blog}`
    
      }
    })
      
})
