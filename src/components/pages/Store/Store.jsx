import FilteredProducts from '../../singleComponents/FilteredProducts';
import Aside from '../../singleComponents/Aside/Aside';

const Store = () => {
  return(
    <>
      <Aside />
      <div className="px-4 py-3 my-3 text-center">
        <h2 className="display-6 fw-bold">PRODUCTOS</h2>
      </div>
      <FilteredProducts />
    </>
  )
};

export default Store;