import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="dhivas sugumar|software developer">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
