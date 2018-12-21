import configGenerator from '@ovh-ux/component-rollup-config';

const config = configGenerator({
  input: 'src/ovh-utils-angular.js',
});

export default [
  config.es(),
  config.cjs(),
  config.umd({
    output: {
      globals: {
        angular: 'angular',
        'angular-translate': 'pascalprecht.translate',
      },
    },
  }),
];
