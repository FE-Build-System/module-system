requirejs.config({
  baseUrl: 'lib',
});

requirejs(['react', 'react-dom'], function(React, ReactDOM) {
  var root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement('p', {}, 'Hello, AMD!'))
});