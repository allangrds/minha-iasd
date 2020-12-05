import { render } from '@testing-library/svelte'

import DizimosEOfertas from './index.svelte'

describe('DizimosEOfertas', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(DizimosEOfertas, props)

    expect(container).toMatchSnapshot()
  })
})
