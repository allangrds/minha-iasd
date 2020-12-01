import { render } from '@testing-library/svelte'

import Container from './index.svelte'

describe('Container', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Container, props)

    expect(container).toMatchSnapshot()
  })
})
