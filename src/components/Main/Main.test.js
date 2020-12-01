import { render } from '@testing-library/svelte'

import Main from './index.svelte'

describe('Main', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Main, props)

    expect(container).toMatchSnapshot()
  })
})
