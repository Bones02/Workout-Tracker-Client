import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import WorkoutPageMain from './WorkoutPageMain'

describe(`WorkoutPageMain component`, () => {
  it('renders a .WorkoutPageMain by default', () => {
    const wrapper = shallow(<WorkoutPageMain />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})