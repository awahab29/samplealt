jest.dontMock('../src/js/components/CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const CheckboxWithLabel = require('../src/js/components/CheckboxWithLabel');

describe('CheckboxWithLabel', () => {

  it('changes the text after click', () => {

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel/>
    );

    var checkboxNode = ReactDOM.findDOMNode(checkbox);
var label = TestUtils.findRenderedDOMComponentWithTag(checkbox,'label');
    // Verify that it's Off by default
    console.log(label.textContent);
    expect(label.textContent).toEqual('OFF');

    // Simulate a click and verify that it is now On
    TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'));
    expect(label.textContent).toEqual('ON');
  });

});
