const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const path = require('path');

console.log(path.extname('example.jpg')); // Outputs: .jpg    // This will give you the file extension of the uploaded file


const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null, './public/images/uploads/');    // Destination folder for uploaded files   
    },
    filename: function(req, file, cb){
        const uniqueFilename = uuidv4() + '-' + file.originalname; // Generate a unique filename using uuid
        // const uniqueFilename = uuidv4()+path.extname(file.originalname); // Generate a unique filename using uuid and keep the original file extension
        cb(null, uniqueFilename); // Use the unique filename
        
    }
})
const upload = multer({storage: storage})
// const upload = multer({storage: storage, limits: {fileSize: 1024 * 1024 * 5}}); // Limit file size to 5MB, you can remove limits if you want to allow larger files

// const uploadSingle = upload.single('dp'); // 'dp' is the name of the file input field in your form
module.exports = upload;