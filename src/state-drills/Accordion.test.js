import { shallow } from 'enzyme'
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { isTSAnyKeyword } from '@babel/types';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

//for no input
// it('renders empty given no sections', () => {
//   const wrapper = shallow(<Accordion />)
//   expect(toJson(wrapper)).toMatchSnapshot()
// })

it('opens a section when a button is clicked', () => {
  const wrapper = shallow(<Accordion sections={sections} />)
  wrapper.find('button').at(1).simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot()
})

// describe('Accordion Test', () => {
//   // //smoke test
//   // it('render with no props', () => {
//   //   const div = document.createElement('div');
//   //   ReactDOM.render(<Accordion />, div);
//   //   ReactDOM.unmountComponentAtNode(div);
//   // })

//   // it('renders without open items', () => {
//   //   const tree = renderer
//   //     .create(<Accordion sections={sections} />)
//   //     .toJSON();
//   //     expect(tree).toMatchSnapshot();
//   // });

//   // it('renders an open item when clicked', () => {
//   //   const tree = renderer
//   //     .create(<Accordion sections={sections} />)
//   //     .toJSON();
//   //     expect(tree).toMatchSnapshot();
//   // })
  
// });