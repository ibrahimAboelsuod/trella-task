import React from 'react';

import { debounceTime, Observable, Subject, switchMap, takeUntil } from 'rxjs';

import './App.css';
import FILTERS_MOCK from './consts/filters-mocks';
import ShipmentCard from './components/shipment-card/ShipmentCard';
import SideBar from './components/side-bar/SideBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shipments: [],
      isLoading: false,
      commodities: FILTERS_MOCK.commodities,
      vehicleTypes: FILTERS_MOCK.vehicleTypes,
      filters: {},
      searchValueChange$: new Subject(),
    };

    this.willUnmount$ = new Subject();
  }

  componentDidMount() {
    this.initFetchShipmentsPipeline();
  }

  componentWillUnmount() {
    this.willUnmount$.next();
    this.willUnmount$.complete();
  }

  mockFilter(shipments, filters) {
    return shipments.filter(
      (shipment) =>
        (!filters.commodity || filters.commodity === shipment.commodity) &&
        (!filters.vehicleType || filters.vehicleType === shipment.vehicleType)
    );
  }

  initFetchShipmentsPipeline() {
    this.state.searchValueChange$
      .pipe(
        debounceTime(1000),
        takeUntil(this.willUnmount$),
        switchMap(() => {
          this.setState({
            shipments: [],
            isLoading: true,
          });

          return new Observable((observer) => {
            fetch('./data/shipment-mock.json', {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            })
              .then((res) => res.json())
              .then((res) => {
                observer.next(this.mockFilter(res, this.state.filters));
                observer.complete();
              })
              .catch((error) => {
                observer.error(error);
              });
          });
        })
      )
      .subscribe((data) => {
        this.setState({
          shipments: data,
          isLoading: false,
        });
      });
    this.state.searchValueChange$.next();
  }

  render() {
    const {
      shipments,
      isLoading,
      commodities,
      vehicleTypes,
      filters,
      searchValueChange$,
    } = this.state;

    return (
      <main>
        <section className='side-bar'>
          <SideBar
            commodities={commodities}
            vehicleTypes={vehicleTypes}
            filters={filters}
            onSearchValueChange={searchValueChange$}
          />
        </section>
        <section className='content'>
          {isLoading ? (
            <h1 className='h3'> Loading shipments... </h1>
          ) : (
            <ul className='p-0'>
              {shipments.map((shipmentItem, shipmentIndex) => (
                <ShipmentCard
                  key={shipmentItem.key}
                  shipment={shipmentItem}
                  className={shipmentIndex > 0 ? ' mt-3' : ''}
                />
              ))}
            </ul>
          )}
        </section>
      </main>
    );
  }
}

export default App;
