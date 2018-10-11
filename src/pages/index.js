import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>My name is Amata Rahman and I'm a Web Developer. I'm very excited to participate in this hackathon</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
