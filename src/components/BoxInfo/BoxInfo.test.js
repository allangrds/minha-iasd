import { render } from '@testing-library/svelte'

import BoxInfo from './index.svelte'

describe('BoxInfo', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(BoxInfo, props)

    expect(container).toMatchSnapshot()
  })
})
