import * as React from 'react';
import Select from './Select';
import {shallow, render} from 'enzyme';

const exampleOptions = [
  {
    value: 'test',
    text: 'test',
  },
  {
    value: 'test2',
    text: 'test2',
  },
];
const exampleGroupedOptions = [
  {
    value: 'option1',
    text: 'Option1',
  },
  {
    value: 'option2',
    text: 'Select selector',
  },
  {
    label: 'Label text',
    options: [
      {
        value: 'option31',
        text: 'Option1',
      },
      {
        value: 'option32',
        text: 'Select selector',
      },
      {
        value: 'option33',
        text: 'Select selector',
      },
    ],
  },
  {
    value: 'option4',
    text: 'Select selector',
  },
];

const voidFunction = () => undefined;

test('render', () => {
  const select = shallow(<Select />);

  expect(select.hasClass('sg-select')).toEqual(true);
});
test('render options', () => {
  const select = shallow(<Select options={exampleOptions} />);

  expect(select.find('option')).toHaveLength(exampleOptions.length);
});
test('render grouped options', () => {
  const select = shallow(<Select options={exampleGroupedOptions} />);

  expect(select.find('option')).toHaveLength(6);
  const optGroup = select.find('optgroup');

  expect(optGroup).toHaveLength(1);
  expect(optGroup.prop('label')).toEqual('Label text');
});
test('choose options', () => {
  const select = render(
    <Select
      options={exampleOptions}
      value={exampleOptions[1].value}
      onChange={voidFunction}
    />
  );
  const option1st = select.find('option').get(0);
  const option2nd = select.find('option').get(1);

  expect(option1st.attribs.selected).toBeUndefined();
  expect(option2nd.attribs.selected).toBeDefined();
});
test('full width', () => {
  const select = shallow(<Select fullWidth />);

  expect(select.hasClass('sg-select--full-width')).toEqual(true);
});
test('default validation', () => {
  const select = shallow(<Select />);

  expect(select.hasClass('sg-select--valid')).toEqual(false);
  expect(select.hasClass('sg-select--invalid')).toEqual(false);
});
test('valid', () => {
  const select = shallow(<Select valid />);

  expect(select.hasClass('sg-select--valid')).toEqual(true);
  expect(select.hasClass('sg-select--invalid')).toEqual(false);
});
test('invalid', () => {
  const select = shallow(<Select invalid />);

  expect(select.hasClass('sg-select--valid')).toEqual(false);
  expect(select.hasClass('sg-select--invalid')).toEqual(true);
});
test('capitalized', () => {
  const select = shallow(<Select capitalized />);

  expect(select.hasClass('sg-select--capitalized')).toEqual(true);
});
test('error when both valid and invalid', () => {
  expect(() => {
    shallow(<Select valid invalid />);
  }).toThrow();
});
