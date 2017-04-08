import logger from 'fm-log';
import app from './config/server';


const port = process.env.PORT || 9001;
app.listen(port, (error) => {
  if (error) {
    logger.error(`Error occured while starting server: ${error}`);
    process.exit(-1);
  }
  logger.info(`Server started on port ${port}`);
});
