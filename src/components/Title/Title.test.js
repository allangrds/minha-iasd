import { render } from '@testing-library/svelte'

import Title from './index.svelte'

describe('Title', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(Title, props)

    expect(container).toMatchSnapshot()
  })
})
