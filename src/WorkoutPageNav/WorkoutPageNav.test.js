import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import WorkoutPageNav from './WorkoutPageNav'

describe(`WorkoutPageNav component`, () => {
  it('renders a .WorkoutPageNav by default', () => {
    const wrapper = shallow(<WorkoutPageNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})