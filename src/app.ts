import express from "express";
import apollo from "./apollo";

const app = express();

apollo.applyMiddleware({ app });

app.get("/", (req, res) => res.redirect(apollo.graphqlPath));

export default app;
