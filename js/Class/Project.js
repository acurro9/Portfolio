class Project {
  #title;
  #description;
  #imagen;
  constructor(title, description, imagen) {
    this.#title = title;
    this.#description = description;
    this.#imagen = imagen;
  }

  /*Getterrs */
  getTitle() {
    return this.#title;
  }
  getDescription() {
    return this.#description;
  }
  getImagen() {
    return this.#imagen;
  }
  getDatos() {
    return this.#title + this.#description + this.#imagen;
  }
}
module.exports = Project;
