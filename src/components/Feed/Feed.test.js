import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Feed from './Feed';
import FeedItem from './FeedItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Feed />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders correct number of items', () => {
    const items = [
        { title: 'Item 1', author: 'Author', date: '1/1/2019', body: 'Test' },
        { title: 'Item 2', author: 'Author', date: '1/1/2019', body: 'Test' }
    ];
    const wrapper = shallow(<Feed items={items} />);
    expect(wrapper.find(FeedItem)).to.have.length(items.length);
});