<?php

$filename = $_FILES['file']['name'];

$location = "uploads/".$filename;

$uploadOk = 1;

$imageFileType = pathinfo($location, PATHINFO_EXTENSION);

$valid_extensions = array('jpg','jpeg', 'png');

if(!in_array(strtolower($imageFileType),$valid_extensions)){
    $uploadOk = 0;

}

if($uploadOk == 0){
    echo 0;
}
else{
    if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){
        echo $location;
}

else{
    echo 0;
}
}







// const http = require("http");
// const path = require("path");
// const fs = require("fs");

// const express = require("express");

// const app = express();
// const httpServer = http.createServer(app);

// const PORT = process.env.PORT || 3000;

// httpServer.listen(3000, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// // put the HTML file containing your form in a directory named "public" (relative to where this script is located)
// app.get("/", express.static(path.join(__dirname, "upload.html")));

// <!-- 
// function main()
// {
//     var inputFileToLoad = document.createElement("input");
//     inputFileToLoad.type = "file";
//     inputFileToLoad.id = "inputFileToLoad";
//     document.body.appendChild(inputFileToLoad);

//     var buttonLoadFile = document.createElement("button");
//     buttonLoadFile.onclick = loadImageFileAsURL;
//     buttonLoadFile.textContent = "Load Selected File";
//     document.body.appendChild(buttonLoadFile);
// }

// function loadImageFileAsURL()
// {
//     var filesSelected = document.getElementById("inputFileToLoad").files;
//     if (filesSelected.length > 0)
//     {
//         var fileToLoad = filesSelected[0];

//         if (fileToLoad.type.match("image.*"))
//         {
//             var fileReader = new FileReader();
//             fileReader.onload = function(fileLoadedEvent) 
//             {
//                 var imageLoaded = document.createElement("img");
//                 imageLoaded.src = fileLoadedEvent.target.result;
//                 document.body.appendChild(imageLoaded);
//             };
//             fileReader.readAsDataURL(fileToLoad);
//         }
//     }
// }

// main(); -->