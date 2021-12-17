import { render } from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({

  models: {
    transition: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
        return this.schema.all('transition')
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transition', data)
    })

  },
});
render(<App />, document.getElementById("root"));
