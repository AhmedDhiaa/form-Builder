// import { NavBar } from "@/components/nav-bar"
// import { requireAuth } from "@/lib/auth"
// import { NewFormContent } from "@/components/new-form-content"

// export default async function NewFormPage() {
//   const user = await requireAuth()

//   return (
//     <>
//       <NavBar user={user} />
//       <NewFormContent userId={user.id} />
//     </>
//   )
// }





import { NavBar } from "@/components/nav-bar"
import { requireAuth } from "@/lib/auth"
import { NewFormContent } from "@/components/new-form-content"

export const dynamic = "force-dynamic"

export default async function NewFormPage() {
  const user = await requireAuth()

  return (
    <>
      <NavBar user={user} />
      <NewFormContent userId={user.id} />
    </>
  )
}
