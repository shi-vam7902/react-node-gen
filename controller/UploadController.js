const multer = require("multer");
const path = require("path");
//where to store the path of file
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
//save for files
// uploads
const upload = multer({
  storage: storage,
  limits: { fileSize: 900000 },
  fileFilter: function (req, file, cb1) {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpeg") {
      cb1(null, true);
    } else {
        console.log("in else");
     return cb1(new Error("Only jpeg and png allowed"), false);
    }
  },
}).single("file");

exports.uploadFile = (req, res) => {
  upload(req, res, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "file Uplaod Fail",
        error: err.message,
      });
    } else {
      if (req.file == undefined) {
        res.status(400).json({
          message: "No File Selected",
        });
      } else {
        // console.log(req.file.mimetype);
        // console.log(req.file.size);

        res.status(200).json({
          message: "File Uploaded Succesfully",
          file: `uploads/${req.file.originalname}`,
        });
      }
    }
  });
};
