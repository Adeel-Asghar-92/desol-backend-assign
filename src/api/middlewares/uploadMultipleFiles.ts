const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/"); // Destination folder for storing files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // File name (use a unique identifier)
  },
});

const upload = multer({ storage: storage });

export const uploadMultipleImages = (req, res, next) => {
  // Use the multer upload middleware
  upload.array("images")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred while uploading
      return res.status(500).json({ error: "File upload error" });
    } else if (err) {
      // An unknown error occurred while uploading
      return res.status(500).json({ error: err });
    }
    // File was uploaded successfully
    req.files = req.files;

    next();
  });
};
