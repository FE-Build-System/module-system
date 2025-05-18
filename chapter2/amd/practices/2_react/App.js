 define(['react', '../HelloAMD'], function (React, HelloAMD) {
      return function App() {
        return React.createElement('div', null,
          React.createElement('h1', null, 'Welcome'),
          React.createElement(HelloAMD, { message: 'AMD' })
        );
      };
    });
