import React, { useState } from 'react';
import './App.css';

function App() {

  const [ListaDeAlimentos, setListaDeAlimentos] = useState([{ id: 0, Nombre: 'Manzanas', Tipo: 'Comida', Cantidad: 10 }]);
  const [ListaFiltrada, setListaFiltrada] = useState([{ id: 0, Nombre: 'Manzanas', Tipo: 'Comida', Cantidad: 10 }]);
  const [MostrarModalEditar, setMostrarModalEditar] = useState(false);
  const [MostrarModalAgregar, setMostrarModalAgregar] = useState(false);
  const [ProductoAEditar, setProductoAEditar] = useState();
  const [MostrarFiltros, setMostrarFiltros] = useState();

  function AgregueProducto(NuevoProducto) {
    setListaFiltrada([...ListaDeAlimentos, NuevoProducto]);
    setListaDeAlimentos([...ListaDeAlimentos, NuevoProducto]);
    alert("Se agrego el producto correctamente!")
  }
  function BorreElProducto(Producto) {
    const NuevaLista = ListaDeAlimentos.filter(producto => producto.id !== Producto.id);
    setListaFiltrada([...NuevaLista]);
    setListaDeAlimentos([...NuevaLista]);

  }
  function EditeElProducto(ListaActualizada) {
    setListaFiltrada(ListaActualizada);
    setListaDeAlimentos(ListaActualizada);
    alert("Se guardaron los cambios!")
  }
  function CamabieElEstadoDelModalAgregar() {
    setMostrarModalAgregar(!MostrarModalAgregar)
  }
  function MuestreModalEditar(Producto) {
    setProductoAEditar(Producto)
    setMostrarModalEditar(true);

  }
  function CiereModalAEditar() {
    setMostrarModalEditar(false);

  }
  function FiltrePorBebidas() {
    setMostrarFiltros(true);
    const LaListaFiltrada = ListaDeAlimentos.filter((producto) => producto.Tipo === "Bebida");
    setListaFiltrada(LaListaFiltrada);

  }
  function FiltrePorComidas() {
    setMostrarFiltros(true);
    const LaListaFiltrada = ListaDeAlimentos.filter((producto) => producto.Tipo === "Comida");
    setListaFiltrada(LaListaFiltrada);

  }
  function FiltroMayorAMeneor() {
    setMostrarFiltros(true);
    const ListaOrdenada = ListaFiltrada.sort((a, b) => b.Cantidad - a.Cantidad);
    setListaFiltrada([...ListaOrdenada]);
  }
  function FiltroMenorAMayor() {
    setMostrarFiltros(true);
    const ListaOrdenada = ListaFiltrada.sort((a, b) => a.Cantidad - b.Cantidad);
    setListaFiltrada([...ListaOrdenada]);

  }
  function QuitarFiltros() {
    setMostrarFiltros(false);
    setListaFiltrada([...ListaDeAlimentos])

  }

  return (
    <div className="App">

      <div className='Contenedor'>

        <div className='Encabezado'>

          <h1>Gestor de Alimentos</h1>

          <button onClick={CamabieElEstadoDelModalAgregar} className='btnAgregar'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
            <span>Agregar</span>
          </button>


          <div className='Filtros'>
            <div>Filtrar por:</div>
            {MostrarFiltros &&
              <button onClick={QuitarFiltros} className='btnFiltro'>
                <span className="ContenedorDelIcono">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </span>
                <p className='texto'>Quitar Filtros</p>
              </button>
            }

            <div className='FiltroBotonesContenedor'>
              <div>Tipo</div>
              <button onClick={FiltrePorBebidas} className='btnFiltro'>
                <span className="ContenedorDelIcono">
                  <img width="50" height="25" src="https://img.icons8.com/ios-filled/50/milkshake.png" alt="milkshake" />
                </span>
                <p className="texto"> Bebidas</p>

              </button>

              <button onClick={FiltrePorComidas} className='btnFiltro'>
                <span className="ContenedorDelIcono">
                  <img width="50" height="25" src="https://img.icons8.com/ios-filled/50/pizza.png" alt="pizza" />
                </span>
                <p className="texto"> Comidas</p>
              </button>
            </div>

            <div className='FiltroBotonesContenedor'>
              <div>Cantidad</div>
              <button onClick={FiltroMenorAMayor} className='btnFiltro'>
                <span className="ContenedorDelIcono">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                  </svg>
                </span>
                <p className="texto">Menor a Mayor </p>
              </button>
              <button onClick={FiltroMayorAMeneor} className='btnFiltro'>
                <span className="ContenedorDelIcono">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </span>
                <p className="texto">Mayor a menor</p>
              </button>
            </div>


          </div>

        </div>

        <div className='Cuerpo'>
          {ListaFiltrada.map((item, index) => (

            <div key={index}>

              <CartaDeProducto Producto={item} ListaDeAlimentos={ListaDeAlimentos} BorreElProducto={BorreElProducto} EditeElProducto={EditeElProducto} MuestreModalEditar={MuestreModalEditar} index={index}></CartaDeProducto>


            </div>

          ))}

          {MostrarModalEditar &&
            <FormularioParaEditarProducto ListaDeAlimentos={ListaDeAlimentos} Producto={ProductoAEditar} EditeElProducto={EditeElProducto} CiereModalAEditar={CiereModalAEditar} ></FormularioParaEditarProducto>
          }
        </div>

      </div>
      {MostrarModalAgregar &&
        <FormularioParaAgregarProducto ListaDeAlimentos={ListaDeAlimentos} AgregueProducto={AgregueProducto} CamabieElEstadoDelModalAgregar={CamabieElEstadoDelModalAgregar}></FormularioParaAgregarProducto>
      }


    </div>
  );
}

export default App;




function FormularioParaAgregarProducto(Propiedades) {

  const { ListaDeAlimentos } = Propiedades;

  function AgregueUnElementoALaLista(e) {

    e.preventDefault();
    const Formulario = new FormData(e.target);
    const ultimoId = ListaDeAlimentos.reduce((maxId, producto) => Math.max(maxId, producto.id), 0);
    Formulario.append("id", ultimoId + 1);
    const valoresDelFormulario = {};
    Formulario.forEach((valor, clave) => {
      valoresDelFormulario[clave] = valor;
    });

    Propiedades.AgregueProducto(valoresDelFormulario);
    Propiedades.CamabieElEstadoDelModalAgregar();
  }
  return (
    <div>
      <Modal>
        <form onSubmit={AgregueUnElementoALaLista} className='Formulario'>
          <label htmlFor='NombreDeLaPersona'>Agregue el Nombre:</label>
          <input type='text' name='Nombre' id='NombreDeLaPersona' required></input>
          <label htmlFor='TipoDeAlimento'>Agregue el Tipo:</label>
          <select type='text' name='Tipo' id='TipoDeAlimento'>
            <option>Comida</option>
            <option>Bebida</option>
          </select>
          <label htmlFor='CantidadEnBodega'>Indique la Cantidad en Bodega:</label>
          <input type='number' name='Cantidad' id='CantidadEnBodega' required></input>
          <div className='FormularioBotones'>
            <button onClick={Propiedades.CamabieElEstadoDelModalAgregar} className='FormularioBoton colorRojo'>Cancelar</button>
            <button className='FormularioBoton'>Guardar</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function FormularioParaEditarProducto(Propiedades) {

  const { Producto, ListaDeAlimentos } = Propiedades;
  const [NuevoId, setNuevoId] = useState(Producto.id)
  const [NuevoNombre, setNuevoNombre] = useState(Producto.Nombre);
  const [NuevoTipo, setNuevoTipo] = useState(Producto.Tipo);
  const [NuevaCantidad, setNuevaCantidad] = useState(Producto.Cantidad);


  function CargarLosNuevosValoresDeID(event) {
    setNuevoId(event.target.value);
  }
  function CargarLosNuevosValoresDeNombre(event) {
    setNuevoNombre(event.target.value);
  }
  function CargarLosnuevosValoresDeTipo(event) {
    setNuevoTipo(event.target.value);
  }
  function CargarLosNuevosValoresDeCantidad(event) {
    setNuevaCantidad(event.target.value);
  }

  function EditeElElementoEnLaLista(e) {

    e.preventDefault();
    const ListaActualizada = [...Propiedades.ListaDeAlimentos];

    for (let index = 0; index < ListaActualizada.length; index++) {

      if (ListaDeAlimentos[index].id == NuevoId) {
        ListaActualizada[index].Nombre = NuevoNombre;
        ListaActualizada[index].Tipo = NuevoTipo;
        ListaActualizada[index].Cantidad = NuevaCantidad;
      }

    }

    Propiedades.EditeElProducto(ListaActualizada)
    Propiedades.CiereModalAEditar();
  }

  return (
    <div>
      <Modal>
        <form onSubmit={EditeElElementoEnLaLista} className='Formulario'>
          <label htmlFor='NombreDeLaPersona'>Agregue el nombre:</label>
          <input type='text' name='Nombre' id='NombreDeLaPersona' onChange={CargarLosNuevosValoresDeNombre} value={NuevoNombre} required></input>
          <label htmlFor='TipoDeAlimento'>Tipo</label>
          <select type='text' name='Tipo' id='TipoDeAlimento' onChange={CargarLosnuevosValoresDeTipo} value={NuevoTipo}>
            <option>Comida</option>
            <option>Bebida</option>
          </select>
          <label htmlFor='CantidadEnBodega'>Cantidad en bodega</label>
          <input type='number' name='Cantidad' id='CantidadEnBodega' onChange={CargarLosNuevosValoresDeCantidad} value={NuevaCantidad} required></input>
          <div className='FormularioBotones'>
            <button onClick={Propiedades.CiereModalAEditar} className='FormularioBoton colorRojo'>Cancelar</button>
            <button className='FormularioBoton'>Guardar</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function CartaDeProducto(Propiedades) {

  const { Producto, index } = Propiedades;

  return (
    <div className='Productos'>
      <TipoAlimento Tipo={Producto.Tipo}></TipoAlimento>

      <div className='DetalleProducto'>
        <div>Alimento: {Producto.Nombre}  </div>
        <div>Tipo:     {Producto.Tipo}    </div>
        <div>Cantidad: {Producto.Cantidad}</div>
      </div>

      <div className='ProductoBotones'>
        <button onClick={() => { Propiedades.BorreElProducto(Producto) }} className='btnBorrar'>
          <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
        </button>

        <button onClick={() => { Propiedades.MuestreModalEditar(Producto) }} className='btnEditar'>
          <div className="svgIcon2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function TipoAlimento(Propiedades) {
  const { Tipo } = Propiedades;
  if (Tipo === "Bebida") {
    return (
      <div className='ImagenBebidas'>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/milkshake.png" alt="milkshake" />
      </div>);
  } else {
    return (
      <div className='ImagenComidas'>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/pizza.png" alt="pizza" />
      </div>);
  }
}

function Modal({ children }) {
  return (
    <div className='ModalContenedor'>
      <div className="modal">
        {children}
      </div>
    </div>
  );
}