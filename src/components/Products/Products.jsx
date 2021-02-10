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
        <div className='col-md-8 offset-md-2'>
          <div className='container-fluid'>
            {/* COIR PITH BLOCK */}
            <div className='row section-spacing'>
              <div className='col-md-4 vertically-center'>
                <img
                  className='product-picture'
                  src={process.env.PUBLIC_URL + '/static_content/products/block.png'}
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
              <h4>LOW E.C.</h4>
              <SpecificationTable
                ph={'5.5-6.7'}
                ec={'< 0.5 mS/cm'}
                sand={'< 3%'}
                fibre={'< 5%'}
                expansion={'15 liters/kg'}
                weight={'5 KGS'}
              />
            </div>
            <div className='spec-table'>
              <h4>HIGH E.C.</h4>
              <SpecificationTable
                ph={'5.5-6.7'}
                ec={'> 2 mS/cm'}
                sand={'< 3%'}
                fibre={'< 5%'}
                expansion={'15 liters/kg'}
                weight={'5 KGS'}
              />
            </div>
            <hr className='theme-line' />
            {/* COIR PITH BRICKS */}
            <div className='row section-spacing'>
              <div className='col-md-4 vertically-center'>
                <img
                  className='product-picture-bricks'
                  src={process.env.PUBLIC_URL + '/static_content/products/brick.png'}
                  alt='company_logo'
                />
                <img
                  className='product-picture-bricks'
                  src={process.env.PUBLIC_URL + '/static_content/products/brick.png'}
                  alt='company_logo'
                />
              </div>
              <div className='col-md-8 no-padding'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 text-left'>
                      <h3 className='font-bold'>Coir Pith/ Coco Peat Bricks</h3>
                      <p className='font-light'>
                        These are <b>650GMs</b> blocks.
                        <br />
                        Made from the husk of the coconut, these are mainly used
                        by individual customers, for their personal gardens,
                        flower pots, potting mixes, etc. Mostly used for small
                        scale applications.
                        <br />
                        <span className='font-bold'>
                          DIMENSIONS: 20cm x 10cm x 5cm
                          <br />
                          E.C.: LOW E.C.
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
                weight={'650 gms'}
              />
            </div>
            <hr className='theme-line' />
            {/* COIR PITH SLABS */}
            <div className='row section-spacing'>
              <div className='col-md-4 vertically-center'>
                <img
                  className='product-picture'
                  src={process.env.PUBLIC_URL + '/static_content/products/slab.png'}
                  alt='company_logo'
                />
              </div>
              <div className='col-md-8 no-padding'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 text-left'>
                      <h3 className='font-bold'>Coir Pith/ Coco Peat Slabs</h3>
                      <p className='font-light'>
                        These are <b>5KG</b> Slabs.
                        <br />
                        These are used in application for Grow Bags, which are
                        used to grow a huge variety of fruit and vegetables, as
                        well as a great variety of seasonal and non- seasonal
                        flowers which have long greenhouse bench life.
                        <br />
                        An excellent alternative to peat moss or rock wool
                        slabs, our grow bags find use in agriculture in a
                        variety of ways.
                        <br />
                        <span className='font-bold'>
                          DIMENSIONS: 100 c.m. X 18 c.m. X 4 c.m.
                          <br />
                          E.C.: LOW E.C.
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
                weight={'2.8 - 3.2 Kg'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
