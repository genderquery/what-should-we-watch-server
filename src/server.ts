import http from "http";
import { AddressInfo } from "net";
import app from "./app";

const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => {
  let { address, port } = server.address() as AddressInfo;
  if (address === "" || address === "::") {
    address = "localhost";
  }
  console.log(`Listening at http://${address}:${port}`);
});
