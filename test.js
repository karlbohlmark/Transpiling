var result = []
var elements = document.getElementsByTagName('div')
for(var i=0; i<elements.length;i++){
	var classes = elements[i].className.split(' ')
	for(var j=0;i<classes.length;j++){
		if(classes[j]==='findme'){
			result.push(elements[i]);
			break;
		}
	}
}





$('div.findme')