import Container from "./Container"
import Link from "next/link"

function Header() {
  return (
    <header className='bg-accent'>
      <Container>
        <nav className='flex items-center justify-between py-3'>
          <div className='flex items-center gap-8'>
            <Link href='/movie'>
              <h1 className='text-2xl'>cinegeek</h1>
            </Link>
            <div className='flex items-center gap-4'>
              <p>Movies</p>
              <p>TV Shows</p>
            </div>
          </div>
          <button>Search</button>
        </nav>
      </Container>
    </header>
  )
}

export default Header
