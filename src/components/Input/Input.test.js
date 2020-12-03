import { render } from '@testing-library/svelte'

import Input from './index.svelte'

describe('Input', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Input, props)

    expect(container).toMatchSnapshot()
  })
})
