import React from 'react';
import './SideBar.css';

export default class SideBar extends React.Component {
  render() {
    const { commodities, vehicleTypes, filters, onSearchValueChange } =
      this.props;

    return (
      <div className='card h-100'>
        <form
          className='card-body d-flex flex-column'
          onChange={(e) => onSearchValueChange.next(filters)}
        >
          <label htmlFor='commodity' className='text-start'>
            Commodity
          </label>
          <select
            name='commodity'
            id='commodity'
            defaultValue=''
            onChange={(e) => (filters.commodity = e.target.value)}
          >
            <option value=''>All</option>
            {commodities.map((commodityItem) => (
              <option key={commodityItem} value={commodityItem}>
                {commodityItem}
              </option>
            ))}
          </select>

          <label htmlFor='vehicleType' className='text-start mt-4'>
            Vehicle Type
          </label>
          <select
            name='vehicleType'
            id='vehicleType'
            defaultValue=''
            onChange={(e) => (filters.vehicleType = e.target.value)}
          >
            <option value=''>All</option>
            {vehicleTypes.map((vehicleTypeItem) => (
              <option key={vehicleTypeItem} value={vehicleTypeItem}>
                {vehicleTypeItem}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}
