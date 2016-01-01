jest.dontMock('../src/js/components/Todo');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Todo = require('../src/js/components/Todo');


describe('CheckboxWithLabel', () => {

 it('add a todo after click', () => {

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <Todo/>
    );

//var txt = TestUtils.findRenderedDOMComponentWithTag(checkbox,'input');
//txt.value='abc';
//TestUtils.Simulate.change(txt);
//TestUtils.Simulate.keyDown(txt, {keyCode: 13});

var ul = TestUtils.findRenderedDOMComponentWithTag(checkbox,'ul');
    // Verify that it's Off by default
    //expect(checkboxNode.textContent).toEqual('OFF');

    // Simulate a click and verify that it is now On
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(checkbox, 'add'));
    console.log(ul.children.length);
    expect(ul.children.length).toBeGreaterThan(0);
  });

 it('clears the todo list after click', () => {

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <Todo/>
    );



var ul = TestUtils.findRenderedDOMComponentWithTag(checkbox,'ul');
    // Verify that it's Off by default
    //expect(checkboxNode.textContent).toEqual('OFF');

    // Simulate a click and verify that it is now On
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(checkbox, 'clear'));
    console.log(ul.children.length);
    expect(ul.children.length).toEqual(0);
  });

});

