import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Post = ({ children, frontMatter }) => {
  const { title } = frontMatter;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <div>{children}</div>
        <p>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Post;
