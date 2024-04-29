export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={roboto.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <RegistrationSucessPage />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    );
  }