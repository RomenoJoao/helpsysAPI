
import { server } from "./server";

const {PORT} = process.env;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
