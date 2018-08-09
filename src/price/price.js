import priceFilter from './price-filter';

export default angular
    .module('ua.price', [])
    .filter('price', priceFilter)
    .name;

