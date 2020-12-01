import { render } from '@testing-library/svelte'

import Footer from './index.svelte'

describe('Footer', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Footer, props)

    expect(container).toMatchSnapshot()
  })
})
