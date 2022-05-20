import app from "./app.js";

import "dotenv/config";

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`servidor rodando em localhost:${port}`));
