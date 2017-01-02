var constantModule = angular.module('uchiwa.constants', []);

constantModule.value('THEMES', [
  {name: 'uchiwa-default'},
  {name: 'uchiwa-dark'}
]);

constantModule.value('conf', {
  date: 'YYYY-MM-DD HH:mm:ss',
  time: 'HH:mm:ss'
});

// Version
constantModule.value('VERSION', {
  uchiwa: '0.21.0'
});
