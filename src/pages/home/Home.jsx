import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/Herosection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
import { useEffect } from 'react'


export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <HeroSection />
      <BlogPostCard />
    </Layout>
  )
}
