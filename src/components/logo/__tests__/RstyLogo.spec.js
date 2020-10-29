import { render, screen } from '@testing-library/vue';
import RstyLogo from '@/components/logo';

describe('RstyLogo', () => {
  it('test', async () => {
    await render(RstyLogo);
    expect(screen.getByTestId('menyoo_logo')).toBeInTheDocument();
    expect(screen.getByTestId('menyoo_logo').tagName).toBe('IMG');
  });
});
