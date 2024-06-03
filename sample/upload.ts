// import express from 'express';
// import fileUpload, { UploadedFile } from 'express-fileupload'
// import Swayauth from '@swayauth/swayauth-node';

// const app = express();

// app.use(fileUpload());

// app.post('/upload', async (req, res) => {
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).json({ error: 'No file uploaded' });
//   }

//   const uploadedFile = req.files.file as UploadedFile;

//   const buffer = uploadedFile.data;

//   const swayauth = new Swayauth({ ApplicationKey: '........' });

//   const swayauth = new Swayauth({ ApplicationKey: '1710566580-cFcrb3ZXcE8zZXFzai8zcGdQU0FwWDF5OW0rWTdTMUFjc2kyeUc2NGUxOD0.app' });
//   swayauth.client.account.changePhoto(buffer, '_________access_token________')
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// })

// app.get('/upload', (req, res) => {
//   res.sendFile(path.join(__dirname, './upload.html'));
// })

// app.listen(4000, () => console.log('listening on http://localhost:4000'));
