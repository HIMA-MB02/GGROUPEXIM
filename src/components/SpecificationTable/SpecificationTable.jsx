import React from 'react';
import './SpecificationTable.css';
// PH
// EC
// Fibre Content
// Sand Content
// Expansion
// weigth
const SpecificationTable = ({ ph, ec, fibre, sand, expansion, weight }) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2 no-padding text-center'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 text-center table-cell'>P.H.</div>
              <div className='col-md-12 text-center table-cell value-cell'>{ph}</div>
            </div>
          </div>
        </div>
        <div className='col-md-2 no-padding text-center'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 text-center table-cell'>E.C.</div>
              <div className='col-md-12 text-center table-cell value-cell'>{ec}</div>
            </div>
          </div>
        </div>
        <div className='col-md-2 no-padding text-center'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 text-center table-cell'>Sand %</div>
              <div className='col-md-12 text-center table-cell value-cell'>{sand}</div>
            </div>
          </div>
        </div>
        <div className='col-md-2 no-padding text-center'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 text-center table-cell'>Fibre %</div>
              <div className='col-md-12 text-center table-cell value-cell'>{fibre}</div>
            </div>
          </div>
        </div>
        <div className='col-md-2 no-padding text-center'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 text-center table-cell'>Expansion</div>
              <div className='col-md-12 text-center table-cell value-cell'>{expansion}</div>
            </div>
          </div>
        </div>
        <div className='col-md-2 no-padding text-center'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 text-center table-cell'>Weight</div>
              <div className='col-md-12 text-center table-cell value-cell'>{weight}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificationTable;
