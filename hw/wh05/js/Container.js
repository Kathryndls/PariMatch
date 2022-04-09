export class Container {
  constructor(item) {
    this.item = item;
  }

  render() {}

  renderWrapper() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const header = document.createElement("div");
    header.classList.add("item-header");

    wrapper.append(header);

    return {
      wrapper,
      header
    };
  }

  renderDeleteButton() {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "DELETE";

    return deleteBtn;
  }

  renderSortButton() {
    const sortBtn = document.createElement("button");
    sortBtn.classList.add("sort-btn");
    sortBtn.textContent = "SORT";

    return sortBtn;
  }

  renderTitle() {
    const title = document.createElement("h2");
    title.classList.add("item-title");
    title.textContent = this.item.title;
    return title;
  }
}

// TITLE
export class Title extends Container {
  constructor(item) {
    super(item);
    this.item = item;
    this.title = item.title;
  }

  render() {
    const root = document.querySelector("#root");
    const {wrapper, header } = this.renderWrapper();
    const title = this.renderTitle();
    const deleteBtn = this.renderDeleteButton();
    const sortBtn = this.renderSortButton();

    header.append(title, deleteBtn, sortBtn);

    this.item.fields.forEach((field) => {
      const input = document.createElement("input");

      input.classList.add("item-text-input", "item-input");
      input.setAttribute("type", field.type);
      input.setAttribute("placeholder", field.label);

      wrapper.append(input);
    });

    root.append(wrapper);
  }
}

// RICH TEXT
export class RichText extends Container {
  constructor(item) {
    super(item);
    this.item = item;
    this.title = item.title;
  }

  render() {
    const root = document.querySelector("#root");
    const { wrapper, header } = this.renderWrapper();
    const title = this.renderTitle();
    const deleteBtn = this.renderDeleteButton();
    const sortBtn = this.renderSortButton();

    header.append(title, deleteBtn, sortBtn);

    this.item.fields.forEach((field) => {
      const textArea = document.createElement("textarea");

      textArea.classList.add("item-rich-text-input", "item-input");
      textArea.setAttribute("type", field.type);
      textArea.setAttribute("placeholder", field.label);

      wrapper.append(textArea);
    });

    root.append(wrapper);
  }
}

// ACTION_BUTTON
export class ActionButton extends Container {
  constructor(item) {
    super(item);
    this.item = item;
    this.title = item.title;
  }

  render() {
    const root = document.querySelector("#root");
    const { wrapper, header } = this.renderWrapper();
    const title = this.renderTitle();
    const deleteBtn = this.renderDeleteButton();
    const sortBtn = this.renderSortButton();

    header.append(title, deleteBtn, sortBtn);

    this.item.fields.forEach((field) => {
      const input = document.createElement("input");

      input.classList.add("item-action-text-input", "item-input");
      input.setAttribute("type", field.type);
      input.setAttribute("placeholder", field.label);

      wrapper.append(input);
    });

    root.append(wrapper);
  }
}

// IMAGE
export class Image extends Container {
  constructor(item) {
    super(item);
    this.item = item;
    this.title = item.title;
  }

  render() {
    const root = document.querySelector("#root");
    const { wrapper, header } = this.renderWrapper();
    const title = this.renderTitle();
    const deleteBtn = this.renderDeleteButton();
    const sortBtn = this.renderSortButton();

    header.append(title, deleteBtn, sortBtn);

    this.item.fields.forEach((field) => {
      const inputWrapper = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");

      inputWrapper.classList.add("item-input-wrapper");

      input.classList.add("item-text-input", "item-input");
      input.setAttribute("type", "file");

      label.classList.add("item-image-label");
      label.textContent = field.label;

      inputWrapper.append(label, input);
      wrapper.append(inputWrapper);
    });

    root.append(wrapper);
  }
}

// GALLERY
export class Gallery extends Container {
  constructor(item) {
    super(item);
    this.item = item;
    this.title = item.title;
  }

  render() {
    const root = document.querySelector("#root");
    const { wrapper, header } = this.renderWrapper();
    const title = this.renderTitle();
    const deleteBtn = this.renderDeleteButton();
    const sortBtn = this.renderSortButton();

    header.append(title, deleteBtn, sortBtn);

    this.item.fields.forEach((field) => {
      const inputWrapper = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");

      inputWrapper.classList.add("item-input-wrapper");

      input.classList.add("item-text-input", "item-input");
      input.setAttribute("type", "file");

      label.classList.add("item-image-label");
      label.textContent = field.label;

      inputWrapper.append(label, input);
      wrapper.append(inputWrapper);
    });

    root.append(wrapper);
  }
}
