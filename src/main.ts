import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

(async () => {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.setGlobalPrefix("api");

    const host = process.env.APP_HOST || "127.0.0.1";
    const port = parseInt(process.env.APP_PORT ?? "3000");

    await app.listen(port, () => console.log("App listening on http://%s:%s/", host, port));
})();