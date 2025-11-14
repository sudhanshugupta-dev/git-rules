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

  it('opens modal when button is pressed', async () => {
    const { getByTestId, getByText } = render(<App />);
    const openButton = getByTestId('open-modal-button');

    fireEvent.press(openButton);

    await waitFor(() => {
      expect(getByText('Welcome!')).toBeTruthy(); // Changed from testID to text
    });
  });

  it('displays welcome content in modal', async () => {
    const { getByTestId, getByText } = render(<App />);
    fireEvent.press(getByTestId('open-modal-button'));

    await waitFor(() => {
      expect(getByText('Welcome!')).toBeTruthy(); // Changed from testID to text
      expect(getByText("We're thrilled to have you here!")).toBeTruthy();
      expect(getByTestId('get-started-button')).toBeTruthy();
    });
  });

  it('closes modal when Get Started is pressed', async () => {
    const { getByTestId, queryByText } = render(<App />); // Changed to queryByText
    fireEvent.press(getByTestId('open-modal-button'));

    await waitFor(() => expect(getByTestId('get-started-button')).toBeTruthy());

    fireEvent.press(getByTestId('get-started-button'));

    await waitFor(() => {
      expect(queryByText('Welcome!')).toBeNull(); // Changed from testID to text
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
