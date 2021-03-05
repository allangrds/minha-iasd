import { render } from '@testing-library/svelte'

import ClasseBiblica from './index.svelte'

describe('ClasseBiblica', () => {
  test('should match snapshot', () => {
    const props = {}
    const { container } = render(ClasseBiblica, props)

    expect(container).toMatchSnapshot()
  })
})
