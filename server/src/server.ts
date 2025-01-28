import { app } from "./app";
import { env } from "./env";

const PORT = env.PORT
console.log(env)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))