import { render } from '@testing-library/svelte'

import BoletimWhatsapp from './index.svelte'

describe('BoletimWhatsapp', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(BoletimWhatsapp, props)

    expect(container).toMatchSnapshot()
  })
})
