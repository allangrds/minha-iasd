import { render } from '@testing-library/svelte'

import ContactUs from './index.svelte'

describe('ContactUs', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(ContactUs, props)

    expect(container).toMatchSnapshot()
  })
})
