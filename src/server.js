import compression from "compression";
import cors from "cors";
import express, { json } from "express";
import helmet from "helmet";

class AppError extends Error {
	statusCode;

	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

class NotFoundError extends AppError {
	constructor(message) {
		let errorMessage = message;

		if (!message) {
			errorMessage = "Não encontrado";
		}

		super(errorMessage, 404);
	}
}

const app = express();
app.use(json());
app.use(
	cors({
		origin: ["https://meudominio.com.br", "https://meudominio2.com.br"],
		methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
		allowedHeaders: ["Content-Type", "Authorization"],
	}),
);
app.use(helmet());
app.use(compression({ level: 6 }));

app.post("/", (req, res) => {
	console.log("Alar gostoso");

	const { error, appError } = req.body;

	if (appError) {
		throw new NotFoundError();
	}

	if (error) {
		throw new Error("Erro inesperado");
	}

	return res.status(200).json(Array(100).fill({ name: "Agustinho", age: 28 }));
});

app.use((err, _, res, __) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({ message: err.message });
	}

	console.log(err.stack);

	return res.status(500).json({
		message: "Alguma inesperada aconteceu! Tente novamente mais tarde!",
	});
});

app.listen(3333, () => console.log("App is running at port 3333..."));
