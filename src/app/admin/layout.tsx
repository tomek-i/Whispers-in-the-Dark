import { AdminMainNavigation } from "@/components/AdminMainNavigation"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminMainNavigation />
      {children}
    </>
  )
}
