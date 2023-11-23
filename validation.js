function checkPassword(){
  var pass = document.getElementById('p1').value;
  var pass2 = document.getElementById('p2').value;

  if(pass != pass2){
    alert("differ");
    return;
  }
    if(pass.length<8||pass.length>15){
        alert("error");
        return;
    }

    let upper=0;
    let lower=0;
    let dig=0;
    let sym=0;
    for(let i=0;i<pass.length;i++){
        let c=pass[i].charCodeAt(0);
        if(c>64&&c<91) upper=1;
        else if(c>96&&c<123) lower=1;
        else if(c>47&&c<58) dig=1;
        else if(pass[i]=='!'||pass[i]=='?'||pass[i]=='-'||pass[i]=='_') sym=1;
        else{
          alert("error");
          return;
        }
    }
    if(upper&&lower&&dig&&sym){
      alert("nice");
    }else{
      alert("error");
    }
}
