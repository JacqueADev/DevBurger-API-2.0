import app from "./app.js";

const porta = 3001;

app.listen(3001, () => {
  console.log(`server rodando na ${porta}...`);
});
