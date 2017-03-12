/**
 * Configure our express app here
 */
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from 'fm-log';
import path from 'path';
import favicon from 'serve-favicon';
import devConfig from './devConfig';

const app = express();

// use body parser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('tiny'));
app.use(favicon(path.join(__dirname, '../../public', 'favicon.ico')));

// point to our static folder
app.use(express.static(path.join(__dirname, '../../public')));

if (process.env.NODE_ENV === 'development') {
  devConfig(app);
}

// lets define our catch all route for now to send our single page app
app.get('*', (request, response) => {
  response.sendFile('index.html');
})

// error handler
app.use('*', (error, request, response, next) => {
  response.status(500).json({message: `An error occurred: ${error}`});
});

// export our configured express app
export default app;