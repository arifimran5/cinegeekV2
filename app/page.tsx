import { redirect } from 'next/navigation'
export default function Home() {
  redirect("/movie")
  return (
    <main className="">
      <h1>Movie Page</h1>
    </main>
  )
}
