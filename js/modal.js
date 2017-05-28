

var imgId, box = 0;

function getId(clickedId) {
	imgId = clickedId;
	// Get the button that opens the modal
	var btn = document.getElementById(imgId);
	
	// Get the modal
	box = document.getElementById(imgId + '-info');
	box.style.display = "block";
}

function closeModal() {
	box.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == box) {
		box.style.display = "none";
	}
	
}
