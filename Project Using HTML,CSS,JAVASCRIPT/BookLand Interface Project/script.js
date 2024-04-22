document.addEventListener("DOMContentLoaded", function() {
    var popupbutton = document.getElementById("popupbutton");
    var popupbox = document.querySelector(".popup-box");
    var popupoverlay = document.querySelector(".popup-overlay");

    popupbutton.addEventListener("click", function() {
        popupbox.style.display = "block";
        popupoverlay.style.display = "block";
    });  

    var cancelbutton = document.getElementById("cancel-button");
   
    cancelbutton.addEventListener("click", function(event) {
        event.preventDefault();
        popupbox.style.display = "none";
        popupoverlay.style.display = "none";
    });

    var bookcontainer = document.querySelector(".container");
    var booktitleinput = document.getElementById("book-title-input");
    var addbook = document.getElementById("add-book");
    var bookauthor = document.getElementById("book-author-input");
    var bookdescription = document.getElementById("book-description-input");

    addbook.addEventListener("click", function(event) {
        event.preventDefault();
        popupbox.style.display = "none";
        popupoverlay.style.display = "none";
        var div = document.createElement("div");
        div.setAttribute("class", "book-container");
        div.innerHTML = `<h2>${booktitleinput.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${bookdescription.value}</P>
        <button class="delete-button">DELETE</button>`;
        bookcontainer.append(div);

        
        var deleteButton = div.querySelector(".delete-button");
        deleteButton.addEventListener("click", deletebook);
    });
    function deletebook(event) {
        event.target.parentElement.remove();
    }
   
});



