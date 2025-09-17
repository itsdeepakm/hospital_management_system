let users=[];
let patients=[];
let currentuser=null;


function showpage(id){
    document.querySelectorAll("main section").forEach(sec=>{
        sec.hidden=true;
    })
    document.getElementById(id).hidden=false;
}
document.querySelectorAll(".nav-menu a").forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault();
        const page=link.dataset.page;
        if(page){
            showpage(page);
        }
    });
});

function handlesignup(e){
    e.preventDefault();    
    const name=document.getElementById("signupName").value;
    const email=document.getElementById("signupEmail").value;
    const password=document.getElementById("signupPassword").value;
    const role=document.getElementById("signupRole").value;
    if(users.find(e=>e.email===email)){
        alert("email already exits");
        return;
    }
    const user={
        name:name,
        email:email,
        password:password,
        role:role
    }
    users.push(user);
    alert("registered successfull");
    showpage("login");
}
document.getElementById("signupForm")
  .addEventListener("submit", handlesignup);

 function handlelogin(){
    const email=document.getElementById("loginEmail").value;
    const password=document.getElementById("loginPassword").value;
    const user=users.find(e=>e.email===email && e.password===password);
    if(!user){
        alert("invalid crendentials");
        return;
    }
    currentuser=user;
    if(user.role==="admin"){
        showpage("adminDash");
    }else{
        showpage("patientDash");
    }
 } 

