import Head from 'next/head'

export default function Home({ episodes }) {

  return (

    <>
      <h1>Hello World</h1>

    </>
  )
}

export async function getStaticProps() {
  const responser = await fetch("http://localhost:3333/episodes")
  const data = await responser.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8
  }
}