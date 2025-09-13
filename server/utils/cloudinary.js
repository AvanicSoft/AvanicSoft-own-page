import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (filePath) => {
    try {
        if(!filePath) throw new Error('File path is required');
        //cloudinary upload
        cloudinary.uploader.upload(filePath, (error, result) => {
            resource_type: "auto";
            if (error) {
                console.error('Error uploading to Cloudinary:', error);
                throw error;
            }   
            console.log('Upload successful:', result);
            //delete the local file after upload
            fs.unlinkSync(filePath);
            return result;
        });
    }catch (error) {    
        console.error('Error uploading:', error);
        fs.unlinkSync(filePath);
        return null;
    }   
}

//Upload
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });

    console.log(uploadResult);

export {uploadImage};