
import React from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import ReactTestUtils from 'react-test-utils';

// project
import App from 'App';


describe('Testing', () => {
  
  it('React loaded', () => {
    expect(React).not.toBe(null);
  });
  it('BootstrapTable loaded', () => {
    expect(BootstrapTable).not.toBe(null);
  });
  it('BootstrapTable loaded', () => {
    expect(TableHeaderColumn).not.toBe(null);
  });
  it('API results', () => {
    //var UIelement = ReactTestUtils.renderIntoDocument(<App />);
    expect(App).not.toBe(null);
  });
});
