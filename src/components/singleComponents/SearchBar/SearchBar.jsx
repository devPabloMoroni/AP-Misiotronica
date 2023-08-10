import React, { useState } from 'react';
import initialItems from '../../../data/productos.json';

import ProductCard from "../ProductCard/ProductCard";

const SearchBar = () => {
  const [items] = useState(initialItems);

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const getHighlightedItems = () => {
    const lowerCaseSearchValue = searchValue.toLowerCase();

    return items.filter(producto => 
      producto.nombre.toLowerCase().includes(lowerCaseSearchValue) ||
      producto.marca.toLowerCase().includes(lowerCaseSearchValue) ||
      producto.modelo.toLowerCase().includes(lowerCaseSearchValue) ||
      producto.categoria.toLowerCase().includes(lowerCaseSearchValue)
      );
  };
  
  return (
    <>
      <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
        <input 
          className="form-control me-2" 
          type="search" 
          placeholder="Buscar" 
          aria-label="Buscar" 
          value={searchValue}
          onChange={handleSearchChange} 
        />
        <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">
            Buscar
        </button>
      </form>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5" id="exampleModalLabel">Resultado de la Búsqueda</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="mx-auto row-sm-2 g-4">                
              {/* Mostrar la lista filtrada */}
                {getHighlightedItems().map((producto,index) => (
                  <ProductCard key={index} producto={producto} />
                ))}
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <a href="/tienda"><button type="button" className="btn btn-primary">Ir a la tienda</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
