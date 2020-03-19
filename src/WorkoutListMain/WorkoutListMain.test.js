import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import WorkoutListMain from './WorkoutListMain'

describe(`WorkoutListMain component`, () => {
  it('renders a .WorkoutListMain by default', () => {
    const wrapper = shallow(<WorkoutListMain />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
