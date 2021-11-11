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
  set tipo(nuevo_tipo) {
    this.nuevo_tipo = nuevo_tipo;
  }
}

class Mascota extends Animal {
  constructor({nombre, direccion, telefono, tipo, nombre_mascota, enfermedad}) {
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
  html(){
    return grupo.parseFromString(`<ul><li>${this.datosPropietario()}</li> el nombre del dueño es: ${this.nombre}. 
    El domicilio es ${this.direccion}, y el número de contacto es: ${this.telefono}<ul><li>`)
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", agregarDatos)

function agregarDatos(e){
  e.preventDefault();

  const datos_de_mascota = {
    nombre: form.propietario.value,
    direccion: form.direccion.value,
    telefono: form.telefono.value,
    nombre_mascota: form.nombreMascota.value,
    tipo: form.tipo.value,
    enfermedad: form.enfermedad.value,
  };
 console.log(datos_de_mascota)

 const mascota = new Mascota (datos_de_mascota)
 console.log(mascota);
 const agregandoDatos = this.html(mascota)
 console.log(agregandoDatos);

 resultado.innerHTML = agregandoDatos.body.innerHTML

}

// const valores = document.querySelector("#submitValues");

// valores.addEventListener("click", (e) => {
//   e.preventDefault();
//   const propietario = document.querySelector("#propietario").value 
//   const telefono = document.querySelector("#telefono").value
//   const direccion = document.querySelector("#direccion").value
//   const mascota_name = document.querySelector("#nombreMascota").value
//   const consulta_enfermedad = document.querySelector("#enfermedad").value;

// const resultado = document.querySelector("#resultado");

// const pagara = nuevo_cliente.datosPropietario();

// console.log(pagara);
// });