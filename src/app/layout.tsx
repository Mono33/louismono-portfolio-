// Root layout - delegates to [locale]/layout.tsx
// This file must exist for Next.js but the real layout is under [locale]
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
