import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { useRef, useEffect } from 'react';

function Content() {
  return (
    <div className={styles.main}>
      <h1>❗ The documentation has been moved to <a href='https://vovk.dev/'>vovk.dev</a>
      ❗
      </h1>
      <br />
      <br />
      <p>
        <img
          width="250"
          alt="vovk"
          className='invert'
          src="https://vovk.dev/vovk-logo.svg"
        />{' '}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Vovk.ts Documentation`}
      description="Transforms Next.js into a powerful and extensible REST API platform. Made with TypeScript, inspired by NestJS."
    >
      <header className={styles.header}>
        <Content />
      </header>
    </Layout>
  );
}
