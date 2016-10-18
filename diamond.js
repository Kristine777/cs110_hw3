const star = function(x){
    let b= "";
    for (let i=0; i<x; i++){
      b=b+"*";
    }
      return b;
  }
  const space = function(y){
    let c= "";
    for (let i=0; i<y; i++){
      c=c+" ";
    }
      return c;
  }
  
  
  const diamond=function (n){
  	if(n%2 === 0) { 
		n = n + 1;
	}
    for (let i=1; i<=n; i=i+2){
      console.log (space((n-i)/2)+star (i));
      
    }
    for (let i=n-2; i>=1; i=i-2) {
      console.log (space((n-i)/2)+star(i));
    } 
  }
  
  diamond (10);