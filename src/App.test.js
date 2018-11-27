import React from 'react';
import App from './App';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('App Test', () => {
  it('should match snapshot correctly', () => {
    const wrapper = render(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
