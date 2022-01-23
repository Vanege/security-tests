import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div style={{ margin: "20px" }}>
      <ul>
        <li>
          <Link href="/userProvided-src-of-img-in-jsx">
            <a style={{ "color": 'blue', cursor: 'pointer' }}>user provided src attribute for img element in JSX</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
