import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import WorkoutListNav from './WorkoutListNav'

describe(`WorkoutListNav component`, () => {
    it('renders a .WorkoutListNav by default', () => {
      const wrapper = shallow(<WorkoutListNav />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
}) 