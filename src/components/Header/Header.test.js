import { render } from '@testing-library/svelte'

import Header from './index.svelte'

describe('Header', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Header, props)

    expect(container).toMatchSnapshot()
  })
})
