import app from "./app";
import { config } from "./config";
import connectDB from "./db";

(async () => {
  await connectDB();

  app.listen(config.port, () => {
    console.log(`App is listening at port: ${config.port}`);
  });
})();
