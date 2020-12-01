import { render } from '@testing-library/svelte'

import Wrapper from './index.svelte'

describe('Wrapper', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Wrapper, props)

    expect(container).toMatchSnapshot()
  })
})
