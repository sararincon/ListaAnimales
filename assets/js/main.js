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
    this.tipo = tipo;
  }
  get tipo() {
    return this.tipo;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombre_mascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this.nombre_mascota = nombre_mascota;
    this.enfermedad = enfermedad;
  }

  get nombre_mascota() {
    return this.nombre_mascota;
  }

  set nombre_mascota(nuevo_nombre_mascota) {
    this.nuevo_nombre_mascota = nuevo_nombre_mascota;
  }

  get enfermedad() {
    return this.enfermedad;
  }

  set enfermedad(nueva_enfermedad) {
    this.nueva_enfermedad = nueva_enfermedad;
  }
}

const form = document.querySelector("form");
