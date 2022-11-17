import { render } from '@testing-library/react';

import BrWebComponents from './br-web-components';

describe('BrWebComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrWebComponents />);
    expect(baseElement).toBeTruthy();
  });
});
