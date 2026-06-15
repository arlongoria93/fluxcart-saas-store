import Navbar from '@/components/Navbar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 App Router Example</title>
      </head>
      <body>
        <Navbar />
        {children}</body>
    </html>
  )
}