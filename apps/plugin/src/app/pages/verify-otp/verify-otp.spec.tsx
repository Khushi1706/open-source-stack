import { render } from '@testing-library/react';

import VerifyOtp from './verify-otp';

describe('VerifyOtp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VerifyOtp />);
    expect(baseElement).toBeTruthy();
  });
});
