// Import Statements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuration statements
const port = 3001;
app.use(bodyParser.json());


// app.use((req,res,next) => {
//   res.setHeader('Access-Control-Allow-Origin', "*");
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Role');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
//   next();
// })
// a
// // Routing
// app.use('/api/v1/user', );
// app.use('/api/v1/admin', adminRoutes);
// app.use('https://jsonplaceholder.typicode.com/posts');


// // Error Handling
// app.use((req,res,next) => {
//   const error = new HttpError('Page not found',404);
//   throw error;
// });

// app.use((error, req, res, next) => {
//   res.status(error.code);
//   res.json({message: error.message || 'Unknown error occured' , code: error.code });
// });


app.get('/',funtion(req,res){

})

app.listen(3000,()=>console.log("running server at 3000"));
