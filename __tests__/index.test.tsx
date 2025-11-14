// __tests__/index.test.tsx
import React from 'react';
import App from '../app/index';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

describe('App Component', () => {
  it('renders the main screen with open button', () => {
    const { getByTestId, getByText } = render(<App />);
    expect(getByTestId('open-modal-button')).toBeTruthy();
    expect(getByText('Open Welcome Modal')).toBeTruthy();
  });

  // it('opens modal when button is pressed', async () => {
  //   const { getByTestId, getByText } = render(<App />);
  //   const openButton = getByTestId('open-modal-button');

  //   fireEvent.press(openButton);

    await waitFor(() => {
      expect(getByText('Welcome!')).toBeTruthy();
    });
  });

  it('closes modal when Get Started is pressed', async () => {
    const { getByTestId, queryByText } = render(<App />);

    // 1. Open modal
    fireEvent.press(getByTestId('open-modal-button'));

    // 2. Modal is now visible
    await waitFor(() => {
      expect(getByTestId('get-started-button')).toBeTruthy();
    });

    // 3. Press Get Started
    fireEvent.press(getByTestId('get-started-button'));

    // 4. Run pending timers (fix async modal closing)
    jest.runAllTimers();

    // 5. Wait for modal to close
    await waitFor(() => expect(queryByText('Welcome!')).toBeNull(), {
      timeout: 3000,
    });
  });

  // it('closes modal on backdrop press (via onRequestClose)', async () => {
  //   const { getByTestId, queryByText } = render(<App />); // Changed to queryByText
  //   fireEvent.press(getByTestId('open-modal-button'));

  //   await waitFor(() => expect(getByTestId('modal-overlay')).toBeTruthy());

  //   // Simulate backdrop press
  //   fireEvent(getByTestId('modal-overlay'), 'press');

  //   await waitFor(() => {
  //     expect(queryByText('Welcome!')).toBeNull(); // Changed from testID to text
  //   });
  // });
});
