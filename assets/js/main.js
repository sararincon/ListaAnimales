class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del dueño es :${this.nombre}. El domicilio es : ${this.direccion} y el número telefónico de contanto es : ${this.telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return this._tipo;
  }
}

class Mascota extends Animal {
  constructor({
    nombre,
    direccion,
    telefono,
    tipo,
    nombre_mascota,
    enfermedad,
  }) {
    super(nombre, direccion, telefono, tipo);
    this._nombre_mascota = nombre_mascota;
    this._enfermedad = enfermedad;
  }

  get nombre_mascota() {
    return this._nombre_mascota;
  }

  set nombre_mascota(nuevo_nombre_mascota) {
    this.nuevo_nombre_mascota = nuevo_nombre_mascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nueva_enfermedad) {
    this.nueva_enfermedad = nueva_enfermedad;
  }
  html() {
    const grupo = new DOMParser();
    return grupo.parseFromString(
      `<li>${this.datosPropietario()}</li><li>${
        this.tipo
      }, mientras que el nombre de la mascota es: ${
        this._nombre_mascota
      } y la enfermedad es: ${this.enfermedad}</li>`,
      "text/html"
    );
  }
}

const form = document.querySelector("form");
const resultado = document.querySelector("#resultado ul");

form.addEventListener("submit", agregarDatos);

function agregarDatos(e) {
  e.preventDefault();

  const { propietario, direccion, telefono, nombreMascota, tipo, enfermedad } =
    form;
  const datos_de_mascota = {
    nombre: propietario.value,
    direccion: direccion.value,
    telefono: telefono.value,
    nombre_mascota: nombreMascota.value,
    tipo: tipo.value,
    enfermedad: enfermedad.value,
  };
  // console.log(datos_de_mascota);

  const mascota = new Mascota(datos_de_mascota);
  // console.log(mascota);
  const agregandoDatos = mascota.html();
  // console.log(agregandoDatos);

  resultado.innerHTML = agregandoDatos.body.innerHTML;
}
