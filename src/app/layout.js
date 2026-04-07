export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning tells Next.js to ignore browser extensions */}
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, backgroundColor: '#04040a' }}>
        {children}
      </body>
    </html>
  );
}
