function drawTree(n) {
	for (row=1; row <= n; row++){
  		var star = ''
  		for(col=1; col <= row; col++){
    		star = star + '*';
  		};
  	console.log(star);
	};
};	


console.log(drawTree(2));