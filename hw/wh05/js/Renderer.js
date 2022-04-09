import {
  Container,
  Title,
  RichText,
  Image,
  Gallery,
  ActionButton
} from "./Container";

class Component {
  constructor(items) {
    this.items = items;
  }

  render() {
    this.items.forEach((item) => {
      new Container(item).renderTitle();

      if (item.type === "TITLE") {
        new Title(item).render();
      } else if (item.type === "RICH_TEXT") {
        new RichText(item).render();
      } else if (item.type === "IMAGE") {
        new Image(item).render();
      } else if (item.type === "GALLERY") {
        new Gallery(item).render();
      } else if (item.type === "ACTION_BUTTON") {
        new ActionButton(item).render();
      }
    });
  }
}

class Renderer {
  constructor(items) {
    this.items = items;
  }

  render() {
    new Component(this.items).render();
  }
}

export default Renderer;