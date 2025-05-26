// app/fonts.ts (optional helper file)
import { Nunito } from 'next/font/google';

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'], // jitne chahiye, utne add karo
});
