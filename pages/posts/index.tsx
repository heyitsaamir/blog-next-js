import Container from '../../components/container';
import MoreStories from '../../components/more-stories';
import HeroPost from '../../components/hero-post';
import Intro from '../../components/intro';
import Layout from '../../components/layout';
import { getAllPosts } from '../../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import Post from '../../interfaces/post';
import Header from '../../components/header';
import { getRaindrops } from '../../lib/raindrop';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Container>
          <Header />
          <section className="md:mx-48">
            <MoreStories posts={allPosts} />
          </section>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};