import { render } from '@testing-library/svelte'

import RightSidebarLogo from './index.svelte'

describe('RightSidebarLogo', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(RightSidebarLogo, props)

    expect(container).toMatchSnapshot()
  })
})
