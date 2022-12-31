import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../components/container';
import PostBody from '../components/post-body';
import Header from '../components/header';
import PostHeader from '../components/post-header';
import Layout from '../components/layout';
import { getPostBySlug, getAllPosts } from '../lib/api';
import PostTitle from '../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import markdownToHtml from '../lib/markdownToHtml';
import { getRaindrops } from '../lib/raindrop';
import type { Bookmark } from '../interfaces/bookmark';

type Props = {
  bookmarks: Bookmark[];
};

const SingleBookmark = ({ bookmark }: { bookmark: Bookmark }) => {
  return (
    <div className="flex flex-col">
      <div className="text-lg hover:underline underline-offset-2">
        <a href={bookmark.link}>{bookmark.title}</a>
      </div>
      <div>{bookmark.excerpt}</div>
    </div>
  );
};

export default function Test({ bookmarks }: Props) {
  return (
    <Layout>
      <Container>
        <Header />
        <div className="text-xl">Bookmarks</div>
        <ul className="flex flex-col gap-8">
          {bookmarks.map((bookmark) => {
            return (
              <li key={bookmark._id}>
                <SingleBookmark bookmark={bookmark} />
              </li>
            );
          })}
        </ul>
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const bookmarks = await getRaindrops();

  return {
    props: {
      bookmarks,
    },
  };
}
