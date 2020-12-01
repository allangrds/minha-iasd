import { render } from '@testing-library/svelte'

import Box from './index.svelte'

describe('Box', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Box, props)

    expect(container).toMatchSnapshot()
  })
})
