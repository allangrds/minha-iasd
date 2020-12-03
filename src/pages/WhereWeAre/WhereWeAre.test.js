import { render } from '@testing-library/svelte'

import WhereWeAre from './index.svelte'

describe('WhereWeAre', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(WhereWeAre, props)

    expect(container).toMatchSnapshot()
  })
})
