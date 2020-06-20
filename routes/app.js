const multer = require("multer");
const path = require("path");

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldName + "-" + Date.now() + path.extname(file.originalName)
    );
  },
});
console.log(storage.destination);

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("myImage");

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalName).toLowerCase());
  // Check mime
  const mimeType = filetypes.test(file.mimeType);

  if (mimeType && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

module.exports = function (app) {
  app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

  app.get("/upload", (req, res) => res.sendFile(path.join(__dirname, "../public/upload.html")));

  app.post("/api/upload", (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.sendFile("index", {
          msg: err,
        });
      } else {
        if (req.file == undefined) {
          res.sendFile("index", {
            msg: "Error: No File Selected!",
          });
        } else {
          res.sendFile("index", {
            msg: "File Uploaded!",
            file: `uploads/${req.file.filename}`,
          });
        }
      }
    });
  });
};


