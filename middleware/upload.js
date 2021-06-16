const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
require("dotenv").config();


const storage = new GridFsStorage({
    url: 
    // process.env.MONGODB_URI || 
    "mongodb://localhost/pantheon",
    options: {useNewUrlParser: true, useUnifiedTopology: true},
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-profile-picture-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-profile-picture-${file.originalname}`
        }
    }
})

module.exports = multer({storage})