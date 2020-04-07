$(document).ready(deletableItem())

//add event listener 
$("#addItem").click(function(){
	var addBtn = $('#listName').val();
	$("ul").append('<li>' + addBtn + '</li>')
		
	var addBtn = $('#listName').val("");

//removes list items added	
// $("#list li").click(function () {

// 		$(this).remove();
// 	});

});


function deletableItem(){
	$("#list").on('click', 'li', function () {
		$(this).toggleClass('purchased');

		setTimeout(() =>{
			$(this).remove();
			}, 1200);
	
	
})
}

	

	// //removes original items
	// $("#list li").click(function () {
	// 	$(this).remove();
	// });



	// for (var i=0; i < removeItem.length; i++){
	// 	removeItem[i].onclick = function(){
	// 		this.parentNode.removeChild(this);
	// 		}
	// 	}	

