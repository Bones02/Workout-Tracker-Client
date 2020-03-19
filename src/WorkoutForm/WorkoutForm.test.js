import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import WorkoutForm from './WorkoutForm'

describe(`WorkoutForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.WorkoutForm by default', () => {
    const wrapper = shallow(<WorkoutForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the WorkoutForm given props', () => {
    const wrapper = shallow(<WorkoutForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})