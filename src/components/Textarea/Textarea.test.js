import { render } from '@testing-library/svelte'

import Textarea from './index.svelte'

describe('Textarea', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Textarea, props)

    expect(container).toMatchSnapshot()
  })
})
