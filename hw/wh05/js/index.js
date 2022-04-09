import db from "../db.json";
import Renderer from "./Renderer";

const { COMPONENTS_LIST } = db;
const app = new Renderer(COMPONENTS_LIST);

try {
  app.render();
} catch (e) {
  console.error(e);
} finally {
  console.log("App was started");
}
