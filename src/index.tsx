import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

(window as any)["renderweb-app-1"] = (containerId: string, props: {}) => {
  ReactDOM.render(
    <App {...props} />,
    document.getElementById(containerId),
  );
};

(window as any)["unmountweb-app-1"] = (containerId: string) => {
  // @ts-ignore
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
