import { render } from '@testing-library/svelte'

import Content from './index.svelte'

describe('Content', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Content, props)

    expect(container).toMatchSnapshot()
  })
})
