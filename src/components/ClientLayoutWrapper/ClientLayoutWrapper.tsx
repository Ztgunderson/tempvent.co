// components/ClientLayoutWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}