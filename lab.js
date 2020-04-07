//add event listener
var addBtn = document.querySelector('#addItem');
addBtn.addEventListener('click', function(event){
	var itemText = document.querySelector('input[name="addItem"]').value;
	var list = document.querySelector('ul');
	var newLi = document.createElement('li');

	list.appendChild(newLi);
	newLi.innerText = itemText;

	var itemText = document.querySelector('input[name="addItem"]').value = "";

	var removeItem = document.getElementsByTagName('li');
	//or document.querySelectorAll("li");
	for (var i=0; i < removeItem.length; i++){
		removeItem[i].onclick = function(){
			this.parentNode.removeChild(this);


			setTimeout(function(){
				removeItem = "";
				}, 500)
		}
	}

})


var removeItem = document.getElementsByTagName('li');
//or document.querySelectorAll("li");
for (var i=0; i < removeItem.length; i++){
	removeItem[i].onclick = function(){
		this.parentNode.removeChild(this);

		// $(this).parents("p").css("text-decoration", "line-through");
	}
}

setTimeout(function(){
		removeItem = "";
	}, 500)

// var str = "Hello World!";
// var result = str.strike();


// var removeItem = document.getElementsByTagName('li');
// removeItem.addeventListener('click', function(event){
// 	for (var i=0; i < removeItem.length; i++){
// 		removeItem[i].onclick = function(){
// 			this.parentNode.removeChild(this);
// 		}
// 	}
// })





