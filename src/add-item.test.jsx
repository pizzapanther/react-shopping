import React from 'react';
import AddItem from './add-item.jsx';
import {mount, shallow, render} from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

chai.use(chaiEnzyme());

var expect = chai.expect;

test('Add Item test', () => {
  const wrapper = shallow(
    <AddItem/>
  );

  expect(wrapper.instance().props.shopping_list)
    .deep.equal([]);
});
