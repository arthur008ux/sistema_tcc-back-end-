const multer = require("multer");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, "src/uploads");
    },

    filename: (req, file, cb) => {

        const nome =
            Date.now() +
            "-" +
            file.originalname;

        cb(null, nome);
    }

});

module.exports =
multer({ storage });