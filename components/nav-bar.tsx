"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { LogOut, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface NavBarProps {
  user?: { email: string; name?: string; is_admin: boolean } | null
}

export function NavBar({ user: initialUser }: NavBarProps) {
  const router = useRouter()
  const [user, setUser] = useState(initialUser)

  useEffect(() => {
    // Fetch current user on mount
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch(() => setUser(null))
  }, [])

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      setUser(null)
      router.push("/login")
    } catch (error) {
      console.error("[v0] Logout failed:", error)
    }
  }

  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
              <span className="text-base sm:text-lg font-bold text-white">F</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-slate-900">FormBuilder</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            {user ? (
              <>
                <div className="hidden sm:flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="max-w-[100px] truncate">{user.name || user.email}</span>
                  {user.is_admin && (
                    <span className="rounded-full bg-blue-100 px-1.5 sm:px-2 py-0.5 text-xs font-medium text-blue-700">
                      Admin
                    </span>
                  )}
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout} className="text-xs sm:text-sm">
                  <LogOut className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                    <span className="hidden sm:inline">Login</span>
                    <span className="sm:hidden">Sign In</span>
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="text-xs sm:text-sm">
                    <span className="hidden sm:inline">Sign Up</span>
                    <span className="sm:hidden">Sign Up</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
