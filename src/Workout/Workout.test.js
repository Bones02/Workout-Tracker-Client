import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Workout from './Workout'

describe(`Workout component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    modified: new Date(2018, 12, 15),
  }

  it('renders a .Workout by default', () => {
    const wrapper = shallow(<Workout />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Workout given props', () => {
    const wrapper = shallow(<Workout {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})