import * as React from 'react';
import Counter from './Counter';
import Text from 'text/Text';
import Icon from 'icons/Icon';
import {shallow} from 'enzyme';

describe('<Counter />', () => {
  it('render itself without error', () => {
    const component = shallow(<Counter>1</Counter>);

    expect(component).toHaveLength(1);
  });
  it('sets <Text /> component size for normal', () => {
    const counter = shallow(<Counter>12</Counter>);
    const text = counter.find(Text);

    expect(text.props().size).toEqual('small');
  });
  it('sets <Text /> component xsmall for size small counter', () => {
    const counter = shallow(<Counter size="xxs">12</Counter>);
    const text = counter.find(Text);

    expect(text.props().size).toEqual('xsmall');
  });
  it('renders points icon inside the points counter', () => {
    const counter = shallow(
      <Counter icon="points" size="xxs">
        12
      </Counter>
    );
    const icon = counter.find(Icon);

    expect(icon.props().type).toEqual('points');
  });
});
