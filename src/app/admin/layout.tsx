import { AdminMainNavigation } from "@/components/AdminMainNavigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminMainNavigation />
      {children}
    </>
  )
}
