'use client';

import '@/styles/globals.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider theme={theme}>
      <html>
        <head>
          <title>How ya doin buddy?</title>
        </head>
        <body className="overflow-y-scroll bg-zinc-900">
          <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
            <div className="col-start-2">
              <GlobalNav />
            </div>

            <div className="col-start-3 space-y-6">
              <AddressBar />

              <div className="rounded-xl border border-zinc-800 bg-black p-8">
                {children}
              </div>
            </div>

            <div className="col-start-3 col-end-4 mt-28 flex items-center justify-center">
              <div className="text-sm text-zinc-600">
                Created by the <b>Next.js</b>
                {' team at '}
                <a href="https://vercel.com">
                  <b>Vercel</b>
                </a>
                {'. '}
                <a
                  className="underline decoration-dotted underline-offset-4"
                  href="https://github.com/vercel/next.js/examples/with-turbopack"
                >
                  View the code
                </a>
                {' or '}
                <a
                  className="underline decoration-dotted underline-offset-4"
                  href="https://vercel.com/templates/next.js"
                >
                  deploy your own
                </a>
                {'.'}
              </div>
            </div>
          </div>
        </body>
      </html>
    </ChakraProvider>
  );
}
