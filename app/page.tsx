// // // import { Button } from "@/components/ui/button"
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // // import { Plus, FileText, BarChart3, Database } from "lucide-react"
// // // import Link from "next/link"
// // // import { NavBar } from "@/components/nav-bar"
// // // import { getAuthUser } from "@/lib/auth"

// // // export default async function HomePage() {
// // //   const user = await getAuthUser()

// // //   if (!user) {
// // //     return (
// // //       <>
// // //         <NavBar user={null} />
// // //         <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 px-4">
// // //           <div className="w-full max-w-2xl space-y-6">
// // //             <Card className="border-blue-200 bg-blue-50">
// // //               <CardHeader className="text-center">
// // //                 <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
// // //                   <Database className="h-6 w-6 text-white" />
// // //                 </div>
// // //                 <CardTitle className="text-xl font-bold text-blue-900">First Time Here?</CardTitle>
// // //                 <CardDescription className="text-blue-700">
// // //                   Initialize your database before creating an account
// // //                 </CardDescription>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <Link href="/setup">
// // //                   <Button variant="outline" className="w-full bg-white hover:bg-blue-50">
// // //                     Setup Database
// // //                   </Button>
// // //                 </Link>
// // //               </CardContent>
// // //             </Card>

// // //             <Card className="w-full border-slate-200 shadow-xl">
// // //               <CardHeader className="text-center">
// // //                 <CardTitle className="text-2xl font-bold text-slate-900">Welcome to FormBuilder</CardTitle>
// // //                 <CardDescription className="mt-2">Please sign in to access your forms</CardDescription>
// // //               </CardHeader>
// // //               <CardContent className="flex gap-3">
// // //                 <Link href="/login" className="flex-1">
// // //                   <Button className="w-full">Sign In</Button>
// // //                 </Link>
// // //                 <Link href="/register" className="flex-1">
// // //                   <Button variant="outline" className="w-full bg-transparent">
// // //                     Sign Up
// // //                   </Button>
// // //                 </Link>
// // //               </CardContent>
// // //             </Card>
// // //           </div>
// // //         </div>
// // //       </>
// // //     )
// // //   }

// // //   return (
// // //     <>
// // //       <NavBar user={user} />
// // //       <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 via-white to-slate-50">
// // //         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
// // //           <div className="mb-12 text-center">
// // //             <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900">Dynamic Form Builder</h1>
// // //             <p className="mx-auto max-w-2xl text-balance text-lg text-slate-600">
// // //               Create custom forms with ease, share them instantly, and collect responses in real-time
// // //             </p>
// // //           </div>

// // //           <div className="grid gap-6 md:grid-cols-3">
// // //             <Card className="border-2 border-slate-200 transition-all hover:border-blue-500 hover:shadow-lg">
// // //               <CardHeader>
// // //                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
// // //                   <Plus className="h-6 w-6 text-blue-600" />
// // //                 </div>
// // //                 <CardTitle>Create Form</CardTitle>
// // //                 <CardDescription>Build dynamic forms with custom fields tailored to your needs</CardDescription>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <Link href="/forms/new">
// // //                   <Button className="w-full">Get Started</Button>
// // //                 </Link>
// // //               </CardContent>
// // //             </Card>

// // //             <Card className="border-2 border-slate-200 transition-all hover:border-emerald-500 hover:shadow-lg">
// // //               <CardHeader>
// // //                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
// // //                   <FileText className="h-6 w-6 text-emerald-600" />
// // //                 </div>
// // //                 <CardTitle>My Forms</CardTitle>
// // //                 <CardDescription>View and manage all your created forms in one place</CardDescription>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <Link href="/forms">
// // //                   <Button variant="outline" className="w-full bg-transparent">
// // //                     View Forms
// // //                   </Button>
// // //                 </Link>
// // //               </CardContent>
// // //             </Card>

// // //             <Card className="border-2 border-slate-200 transition-all hover:border-purple-500 hover:shadow-lg">
// // //               <CardHeader>
// // //                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
// // //                   <BarChart3 className="h-6 w-6 text-purple-600" />
// // //                 </div>
// // //                 <CardTitle>Analytics</CardTitle>
// // //                 <CardDescription>Track responses and analyze form submission data</CardDescription>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <Link href="/forms">
// // //                   <Button variant="outline" className="w-full bg-transparent">
// // //                     View Analytics
// // //                   </Button>
// // //                 </Link>
// // //               </CardContent>
// // //             </Card>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   )
// // // }



// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Plus, FileText, BarChart3, Database } from "lucide-react"
// // import Link from "next/link"
// // import { NavBar } from "@/components/nav-bar"
// // import { getAuthUser } from "@/lib/auth"

// // export default async function HomePage() {
// //   const user = await getAuthUser()

// //   if (!user) {
// //     return (
// //       <>
// //         <NavBar user={null} />
// //         <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 px-4">
// //           <div className="w-full max-w-2xl space-y-6">
// //             <Card className="border-blue-200 bg-blue-50">
// //               <CardHeader className="text-center">
// //                 <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
// //                   <Database className="h-6 w-6 text-white" />
// //                 </div>
// //                 <CardTitle className="text-xl font-bold text-blue-900">First Time Here?</CardTitle>
// //                 <CardDescription className="text-blue-700">
// //                   Initialize your database before creating an account
// //                 </CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <Link href="/setup">
// //                   <Button variant="outline" className="w-full bg-white hover:bg-blue-50">
// //                     Setup Database
// //                   </Button>
// //                 </Link>
// //               </CardContent>
// //             </Card>

// //             <Card className="w-full border-slate-200 shadow-xl">
// //               <CardHeader className="text-center">
// //                 <CardTitle className="text-2xl font-bold text-slate-900">Welcome to FormBuilder</CardTitle>
// //                 <CardDescription className="mt-2">Please sign in to access your forms</CardDescription>
// //               </CardHeader>
// //               <CardContent className="flex gap-3">
// //                 <Link href="/login" className="flex-1">
// //                   <Button className="w-full">Sign In</Button>
// //                 </Link>
// //                 <Link href="/register" className="flex-1">
// //                   <Button variant="outline" className="w-full bg-transparent">
// //                     Sign Up
// //                   </Button>
// //                 </Link>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </>
// //     )
// //   }

// //   return (
// //     <>
// //       <NavBar user={user} />
// //       <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 via-white to-slate-50">
// //         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
// //           <div className="mb-12 text-center">
// //             <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900">Dynamic Form Builder</h1>
// //             <p className="mx-auto max-w-2xl text-balance text-lg text-slate-600">
// //               Create custom forms with ease, share them instantly, and collect responses in real-time
// //             </p>
// //           </div>

// //           <div className="grid gap-6 md:grid-cols-3">
// //             <Card className="border-2 border-slate-200 transition-all hover:border-blue-500 hover:shadow-lg">
// //               <CardHeader>
// //                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
// //                   <Plus className="h-6 w-6 text-blue-600" />
// //                 </div>
// //                 <CardTitle>Create Form</CardTitle>
// //                 <CardDescription>Build dynamic forms with custom fields tailored to your needs</CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <Link href="/forms/new">
// //                   <Button className="w-full">Get Started</Button>
// //                 </Link>
// //               </CardContent>
// //             </Card>

// //             <Card className="border-2 border-slate-200 transition-all hover:border-emerald-500 hover:shadow-lg">
// //               <CardHeader>
// //                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
// //                   <FileText className="h-6 w-6 text-emerald-600" />
// //                 </div>
// //                 <CardTitle>My Forms</CardTitle>
// //                 <CardDescription>View and manage all your created forms in one place</CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <Link href="/forms">
// //                   <Button variant="outline" className="w-full bg-transparent">
// //                     View Forms
// //                   </Button>
// //                 </Link>
// //               </CardContent>
// //             </Card>

// //             <Card className="border-2 border-slate-200 transition-all hover:border-purple-500 hover:shadow-lg">
// //               <CardHeader>
// //                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
// //                   <BarChart3 className="h-6 w-6 text-purple-600" />
// //                 </div>
// //                 <CardTitle>Analytics</CardTitle>
// //                 <CardDescription>Track responses and analyze form submission data</CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <Link href="/analytics">
// //                   <Button variant="outline" className="w-full bg-transparent">
// //                     View Analytics
// //                   </Button>
// //                 </Link>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }






// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Plus, FileText, BarChart3, Database, ArrowRight } from "lucide-react"
// import Link from "next/link"
// import { NavBar } from "@/components/nav-bar"
// import { getAuthUser } from "@/lib/auth"

// export const dynamic = "force-dynamic"

// export default async function HomePage() {
//   const user = await getAuthUser()

//   if (!user) {
//     return (
//       <>
//         <NavBar user={null} />
//         <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 px-4 py-8">
//           <div className="w-full max-w-2xl space-y-6">
//             <Card className="border-2 border-primary/20 bg-primary/5">
//               <CardHeader className="text-center">
//                 <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
//                   <Database className="h-6 w-6 text-primary-foreground" />
//                 </div>
//                 <CardTitle className="text-lg sm:text-xl font-bold text-primary">First Time Here?</CardTitle>
//                 <CardDescription className="text-sm sm:text-base">
//                   Initialize your database before creating an account
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Link href="/setup">
//                   <Button variant="outline" className="w-full bg-transparent">
//                     Setup Database
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="w-full border-2 shadow-xl">
//               <CardHeader className="text-center">
//                 <CardTitle className="text-2xl sm:text-3xl font-bold text-balance">Welcome to FormBuilder</CardTitle>
//                 <CardDescription className="mt-2 text-sm sm:text-base text-pretty">
//                   Please sign in to access your forms
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="flex flex-col sm:flex-row gap-3">
//                 <Link href="/login" className="flex-1">
//                   <Button className="w-full">Sign In</Button>
//                 </Link>
//                 <Link href="/register" className="flex-1">
//                   <Button variant="outline" className="w-full bg-transparent">
//                     Sign Up
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </>
//     )
//   }

//   return (
//     <>
//       <NavBar user={user} />
//       <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-primary/5 via-background to-accent/10">
//         <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
//           <div className="mb-8 sm:mb-12 text-center">
//             <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
//               Dynamic Form Builder
//             </h1>
//             <p className="mx-auto max-w-2xl text-balance text-base sm:text-lg text-muted-foreground text-pretty">
//               Create custom forms with ease, share them instantly, and collect responses in real-time
//             </p>
//           </div>

//           <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
//             <Card className="border-2 border-border transition-all hover:border-primary hover:shadow-lg">
//               <CardHeader>
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
//                   <Plus className="h-6 w-6 text-primary" />
//                 </div>
//                 <CardTitle className="text-lg sm:text-xl">Create Form</CardTitle>
//                 <CardDescription className="text-sm sm:text-base">
//                   Build dynamic forms with custom fields tailored to your needs
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Link href="/forms/new">
//                   <Button className="w-full group">
//                     Get Started
//                     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="border-2 border-border transition-all hover:border-chart-2 hover:shadow-lg">
//               <CardHeader>
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10">
//                   <FileText className="h-6 w-6 text-chart-2" />
//                 </div>
//                 <CardTitle className="text-lg sm:text-xl">My Forms</CardTitle>
//                 <CardDescription className="text-sm sm:text-base">
//                   View and manage all your created forms in one place
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Link href="/forms">
//                   <Button variant="outline" className="w-full group bg-transparent">
//                     View Forms
//                     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="border-2 border-border transition-all hover:border-chart-3 hover:shadow-lg">
//               <CardHeader>
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10">
//                   <BarChart3 className="h-6 w-6 text-chart-3" />
//                 </div>
//                 <CardTitle className="text-lg sm:text-xl">Analytics</CardTitle>
//                 <CardDescription className="text-sm sm:text-base">
//                   Track responses and analyze form submission data
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Link href="/analytics">
//                   <Button variant="outline" className="w-full group bg-transparent">
//                     View Analytics
//                     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }



import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, FileText, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"
import { getAuthUser } from "@/lib/auth"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const user = await getAuthUser()

  if (!user) {
    return (
      <>
        <NavBar user={null} />
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 dark:from-primary/10 dark:via-background dark:to-accent/5 px-4 py-8">
          <div className="w-full max-w-2xl space-y-6">
            <Card className="w-full border-2 shadow-xl dark:shadow-2xl bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20">
                  <span className="text-2xl font-bold text-primary-foreground">F</span>
                </div>
                <CardTitle className="text-3xl sm:text-4xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Welcome to FormBuilder
                </CardTitle>
                <CardDescription className="mt-2 text-base sm:text-lg text-pretty text-muted-foreground">
                  Create dynamic forms, share them instantly, and collect responses in real-time
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-3 pt-6">
                <Link href="/login" className="flex-1">
                  <Button className="w-full h-11 text-base">Sign In</Button>
                </Link>
                <Link href="/register" className="flex-1">
                  <Button variant="outline" className="w-full h-11 text-base">
                    Sign Up
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <NavBar user={user} />
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-primary/5 via-background to-accent/10 dark:from-primary/10 dark:via-background dark:to-accent/5">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Dynamic Form Builder
            </h1>
            <p className="mx-auto max-w-2xl text-balance text-lg sm:text-xl text-muted-foreground px-4">
              Create custom forms with ease, share them instantly, and collect responses in real-time
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl dark:hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <Plus className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Create Form</CardTitle>
                <CardDescription className="text-base">
                  Build dynamic forms with custom fields tailored to your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/forms/new">
                  <Button className="w-full h-11 text-base group/btn">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-chart-2/50 hover:shadow-xl dark:hover:shadow-chart-2/10 bg-card/50 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-chart-2/20 to-chart-2/10 group-hover:from-chart-2/30 group-hover:to-chart-2/20 transition-all duration-300">
                  <FileText className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">My Forms</CardTitle>
                <CardDescription className="text-base">
                  View and manage all your created forms in one place
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/forms">
                  <Button variant="outline" className="w-full h-11 text-base group/btn">
                    View Forms
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-chart-3/50 hover:shadow-xl dark:hover:shadow-chart-3/10 bg-card/50 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-chart-3/20 to-chart-3/10 group-hover:from-chart-3/30 group-hover:to-chart-3/20 transition-all duration-300">
                  <BarChart3 className="h-7 w-7 text-chart-3" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Analytics</CardTitle>
                <CardDescription className="text-base">
                  Track responses and analyze form submission data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/analytics">
                  <Button variant="outline" className="w-full h-11 text-base group/btn">
                    View Analytics
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
