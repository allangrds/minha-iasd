import { render } from '@testing-library/svelte'

import Live from './index.svelte'

describe('Live', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Live, props)

    expect(container).toMatchSnapshot()
  })
})
