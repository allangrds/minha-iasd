import { render } from '@testing-library/svelte'

import Text from './index.svelte'

describe('Text', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Text, props)

    expect(container).toMatchSnapshot()
  })
})
