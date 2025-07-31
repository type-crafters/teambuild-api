import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

(async () => {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("api");

    const host = process.env.APP_HOST || "127.0.0.1";
    const port = parseInt(process.env.APP_PORT ?? "3000");

    await app.listen(port, () => console.log("App listening on http://%s:%s/", host, port));
})();