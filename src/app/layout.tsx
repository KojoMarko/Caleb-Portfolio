import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { Raleway } from 'next/font/google';
import AiAssistant from '@/components/ai-assistant';

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caleb Senyah | Software Engineer',
  description: 'Portfolio of Caleb Senyah, a passionate software engineer and full-stack developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <AiAssistant />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
