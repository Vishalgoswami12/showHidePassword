let passwordfn=document.getElementById("password");


let showHidePassword=()=>{
    if(passwordfn.type==="password"){
        passwordfn.type="text"
    }else{
        passwordfn.type="password"
    }
}