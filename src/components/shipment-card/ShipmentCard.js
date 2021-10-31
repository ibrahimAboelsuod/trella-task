import React from 'react';
import './ShipmentCard.css';

export default class ShipmentCard extends React.Component {
  render() {
    const { shipment, className } = this.props;

    return (
      <li className={'card ' + className}>
        <div className='card-body row w-100 py-0'>
          <div className='col-md-4 py-3'>
            <div className='row'>
              <div className='col-6'>
                Number Of Bids
                <p className='fw-bold'>{shipment.numberOfBids}</p>
              </div>

              <div className='col-6'>
                Vehicle Type
                <p className='fw-bold'>{shipment.vehicleType}</p>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-6'>
                Commodity
                <p className='fw-bold'>{shipment.commodity}</p>
              </div>
              <div className='col-6'>
                Price
                <p className='fw-bold'>{shipment.price}</p>
              </div>
            </div>
          </div>
          <div className='border-start col-md-8 ps-5 py-3'>
            <ol className='list-unstyled'>
              {shipment.addresses.map((addressItem, addressIndex) => (
                <li
                  key={addressItem.key}
                  className={'flex-column address-item' + (addressIndex > 0 ? ' mt-3' : '')}
                >
                  <h1 className='h6'>{addressItem.name}</h1>
                  {addressItem.latitude.toLocaleString(undefined, {
                    maximumFractionDigits: 4,
                  })}
                  ,{' '}
                  {addressItem.longitude.toLocaleString(undefined, {
                    maximumFractionDigits: 4,
                  })}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </li>
    );
  }
}
