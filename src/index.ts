import app from "./app";

const { PORT = 4000 } = process.env;

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
