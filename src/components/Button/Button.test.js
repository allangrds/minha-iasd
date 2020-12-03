import { render } from '@testing-library/svelte'

import Button from './index.svelte'

describe('Button', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Button, props)

    expect(container).toMatchSnapshot()
  })
})
