requirejs.config({
  baseUrl: 'lib',
  paths: {
    '@': "../src"
  }
});

requirejs(['react', 'react-dom', '@/App'], function(React, ReactDOM, App) {
  var root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement(App))
}, function(error) {
  // 에러 핸들링
  console.log(error)
});