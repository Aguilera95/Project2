const http = require("http");
const path = require("path");
const fs = require("fs");


function main()
{
    var inputFileToLoad = document.createElement("input");
    inputFileToLoad.type = "file";
    inputFileToLoad.id = "inputFileToLoad";
    document.body.appendChild(inputFileToLoad);

    var buttonLoadFile = document.createElement("button");
    buttonLoadFile.onclick = loadImageFileAsURL;
    buttonLoadFile.textContent = "Load Selected File";
    document.body.appendChild(buttonLoadFile);
}

function loadImageFileAsURL()
{
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                var imageLoaded = document.createElement("img");
                imageLoaded.src = fileLoadedEvent.target.result;
                document.body.appendChild(imageLoaded);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}

// function that does a $.post('/api/uploads') pass object {user: 'name', image: '', name of image: ''} into $.post
var newUpload ={
    photographerName: $("")
	photoName: $("#photo-name").val().trim(),
    photoDescription: $("")
    photoPath: 
}
$.ajax("/api/uploads"),{
    type: "POST",
    data: newUpload
}).then(
    function( {
        console.log("New Uploads")
    })
)
main();