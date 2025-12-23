import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Teste básico para verificar se Jest está funcionando
describe('Jest Setup', () => {
  it('should pass a basic test', () => {
    expect(true).toBe(true);
  });

  it('should render a basic component', () => {
    render(<div>Hello World</div>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});