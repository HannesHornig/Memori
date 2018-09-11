import React from 'react'
import GameHeader from './GameHeader'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('GameHeader Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<GameHeader />)
        .find('button')
        .exists()
    ).toBe(true)
  })
})
