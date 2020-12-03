import { render } from '@testing-library/svelte'

import Home from './index.svelte'

describe('Home', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Home, props)

    expect(container).toMatchSnapshot()
  })
})
