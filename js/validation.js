//Se valida el formulario
function validation() {
  try {
    let errors = [];
    let errorMSG;
    //Expresiones regulares
    const regMail = /^\w+@[a-zA-Z]+\.(com|es|org)$/;
    const regNumber = /\d{3}\s?\d{3}\s?\d{3}/;
    const regName = /^[a-zA-Z-' ]+$/;

    let resultName;
    let resultMail;
    let resultNumber;
    //En caso de estar vacio se añade el error al vector de errores
    if (document.getElementById("contact_name").value == "") {
      errors.push("You have to include a name!");
    } else {
      resultName = regName.test(document.getElementById("contact_name").value);
      //Si el valor del input no se encuentra en las opciones de la expresión regular
      if (!resultName) {
        errors.push("The name is not valid!");
      }
    }
    //En caso de estar vacio se añade el error al vector de errores
    if (document.getElementById("contact_mail").value == "") {
      errors.push("You have to include an email!");
    } else {
      resultMail = regMail.test(document.getElementById("contact_mail").value);
      //Si el valor del input no se encuentra en las opciones de la expresión regular
      if (!resultMail) {
        errors.push("The email is not valid!");
      }
    }
    //En caso de estar vacio se añade el error al vector de errores
    if (document.getElementById("contact_tlf").value == "") {
      errors.push("You have to include a phone number!");
    } else {
      resultNumber = regNumber.test(
        document.getElementById("contact_tlf").value
      );
      //Si el valor del input no se encuentra en las opciones de la expresión regular
      if (!resultNumber) {
        errors.push("The phone number is not valid!");
      }
    }
    //En caso de estar vacio se añade el error al vector de errores
    if (document.getElementById("contact_msg").value == "") {
      errors.push("You have to include a message!");
    }
    //En caso de estar vacio se añade el error al vector de errores
    if (document.getElementById("contact_subject").value == "") {
      errors.push("You have to include a subject!");
    }
    //Se añade \n al final de cada error
    errorMSG = errors.join("\n");
    //En caso de no haber errores
    if (errors.length === 0) {
      //Se crea un array asociativo con los datos del formulario
      let contactMSG = {
        name: document.getElementById("contact_name").value,
        email: document.getElementById("contact_mail").value,
        tlf: document.getElementById("contact_tlf").value,
        subject: document.getElementById("contact_subject").value,
        msg: document.getElementById("contact_msg").value,
      };
      //Se convierte el array de JSON a String
      let contactAlert = JSON.stringify(contactMSG, null, 2);
      //Se le pide confirmación de envio al usuario
      let result = confirm(
        "Do you want to send this information?\n" + contactAlert
      );
      //En caso afirmativo se imprime un mensaje en caso negativo otro
      if (result) {
        alert("Message send successfully!");
      } else {
        alert("Message deleted");
      }
    } else {
      //Si hay errores aparecen en un alert
      alert(errorMSG);
    }
  } catch (err) {
    //Si hay errores que no son del formuario se imprimen por consola
    console.log("Error: " + err);
  }
}
