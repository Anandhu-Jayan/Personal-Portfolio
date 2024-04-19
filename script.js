let viewButton=document.querySelector("#view-project");
let isViewClicked=false;

viewButton.onclick=()=>{
    let viewProjects=document.querySelectorAll(".hide");
  
    if(!isViewClicked){
        
        for (let viewProject of viewProjects){
            viewProject.style.display="block";
        }
        isViewClicked=true;
        viewButton.textContent="VIEW LESS"
    }
    else{
        for (let viewProject of viewProjects){
            viewProject.style.display="none";
        }
        isViewClicked=false;
        viewButton.textContent="VIEW ALL"

    }
}
let viewPostButton=document.querySelector("#view-post");
let isViewPostClicked=false;

viewPostButton.onclick=()=>{
    let viewPosts=document.querySelectorAll(".hide-post");
  
    if(!isViewPostClicked){
        
        for (let viewPost of viewPosts){
            viewPost.style.display="block";
        }
        isViewPostClicked=true;
        viewPostButton.textContent="VIEW LESS"
    }
    else{
        for (let viewPost of viewPosts){
            viewPost.style.display="none";
        }
        isViewPostClicked=false;
        viewPostButton.textContent="VIEW ALL"

    }
}

let getNavLinks=document.querySelectorAll(".nav-links");
for(let navLink of getNavLinks){
    navLink.addEventListener("click",(e)=>{
        let currentSelected=document.querySelector(".nav-selected");
        currentSelected.classList.remove('nav-selected');
        e.target.classList.add('nav-selected')
    })
}
