requirejs.config({
  baseUrl: 'lib',
  paths: {
    "src": "../src",
  },
});

requirejs(['react', 'react-dom', 'src/app'], function(React, ReactDOM, app) {
  var root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement('div', {}, app))
}, function(error) {
  // 에러 핸들링
  console.log(error)
});