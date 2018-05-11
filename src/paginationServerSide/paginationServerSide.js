import paginationServerSideDirective from './paginationServerSide-directive';

export default angular
    .module('ua.paginationServerSide', [])
    .directive('paginationServerSide', paginationServerSideDirective)
    .name;

