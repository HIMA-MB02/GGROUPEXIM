import React from 'react';
import SpecificationTable from '../SpecificationTable/SpecificationTable';
import './Products.css';

const Products = () => {
  return (
    <div
      className='container-fluid page-spacing-top page-spacing-bottom'
      id='products-page'
    >
      <div className='row'>
        <div className='col-md-6 offset-md-3 no-padding'>
          <div className='container-fluid'>
            {/* COIR PITH BLOCK */}
            <div className='row section-spacing'>
              <div className='col-md-4 vertically-center'>
                <img
                  className='product-picture'
                  src={process.env.PUBLIC_URL + '/static_content/block.png'}
                  alt='company_logo'
                />
              </div>
              <div className='col-md-8 no-padding'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 text-left'>
                      <h3 className='font-bold'>Coir Pith/ Coco Peat Blocks</h3>
                      <p className='font-light'>
                        These are <b>5KG</b> blocks.
                        <br />
                        Made from the husk of the coconut, these are mainly used
                        in Lanscaping, Large Nurseries, Horticulture, as Animal
                        Bedding and also in some cases as Industrial Oil
                        Absorbents
                        <br />
                        <span className='font-bold'>
                          DIMENSIONS: 30 c.m. X 30 c.m. X 12 c.m.
                          <br />
                          E.C.: LOW OR HIGH E.C.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BLOCK SPECIFICATION */}
            <div className='spec-table'>
              <SpecificationTable
                ph={'5.5-6.7'}
                ec={'< 0.5 mS/cm'}
                sand={'< 3%'}
                fibre={'< 5%'}
                expansion={'15 liters/kg'}
                dimensions={'30 c.m. X 30 c.m. X 12 c.m.'}
              />
            </div>
            <hr className='theme-line' />
            {/* COIR PITH BRICKS */}
            <div className='row section-spacing'>
              <div className='col-md-4 vertically-center'>
                <img
                  className='product-picture-bricks'
                  src={process.env.PUBLIC_URL + '/static_content/brick.png'}
                  alt='company_logo'
                />
                <img
                  className='product-picture-bricks'
                  src={process.env.PUBLIC_URL + '/static_content/brick.png'}
                  alt='company_logo'
                />
              </div>
              <div className='col-md-8 no-padding'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 text-left'>
                      <h3 className='font-bold'>Coir Pith/ Coco Peat Blocks</h3>
                      <p className='font-light'>
                        These are <b>5KG</b> blocks.
                        <br />
                        Made from the husk of the coconut, these are mainly used
                        in Lanscaping, Large Nurseries, Horticulture, as Animal
                        Bedding and also in some cases as Industrial Oil
                        Absorbents
                        <br />
                        <span className='font-bold'>
                          DIMENSIONS: 30 c.m. X 30 c.m. X 12 c.m.
                          <br />
                          E.C.: LOW OR HIGH E.C.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BRICK SPECIFICATION */}
            <div className='spec-table'>
              <SpecificationTable
                ph={'5.5-6.7'}
                ec={'< 0.5 mS/cm'}
                sand={'< 3%'}
                fibre={'< 5%'}
                expansion={'15 liters/kg'}
                dimensions={'30 c.m. X 30 c.m. X 12 c.m.'}
              />
            </div>
            <hr className='theme-line' />
            {/* COIR PITH SLABS */}
            <div className='row section-spacing'>
              <div className='col-md-4 vertically-center'>
                <img
                  className='product-picture'
                  src={process.env.PUBLIC_URL + '/static_content/slab.png'}
                  alt='company_logo'
                />
              </div>
              <div className='col-md-8 no-padding'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 text-left'>
                      <h3 className='font-bold'>Coir Pith/ Coco Peat Blocks</h3>
                      <p className='font-light'>
                        These are <b>5KG</b> blocks.
                        <br />
                        Made from the husk of the coconut, these are mainly used
                        in Lanscaping, Large Nurseries, Horticulture, as Animal
                        Bedding and also in some cases as Industrial Oil
                        Absorbents
                        <br />
                        <span className='font-bold'>
                          DIMENSIONS: 30 c.m. X 30 c.m. X 12 c.m.
                          <br />
                          E.C.: LOW OR HIGH E.C.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SLAB SPECIFICATION */}
            <div className='spec-table'>
              <SpecificationTable
                ph={'5.5-6.7'}
                ec={'< 0.5 mS/cm'}
                sand={'< 3%'}
                fibre={'< 5%'}
                expansion={'15 liters/kg'}
                dimensions={'30 c.m. X 30 c.m. X 12 c.m.'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
