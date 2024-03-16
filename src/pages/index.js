import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { useRef, useEffect } from 'react';

function Content() {
  return (
    <div className={styles.main}>
      <p>
        <img
          width="250"
          alt="vovk"
          src="https://vovk.dev/vovk-logo.svg"
        />{' '}
      </p>
      <p>
        Welcome to Vovk.ts documentation! In case of typos and inaccuracies, feel free to submit a direct pull request to this{' '}
        <a href="https://github.com/finom/docs.vovk.dev" target="_blank">documentation repository</a>.
      </p>
      <p>
        Before you get started it's recommended to read Next.js documentation for{' '}
        <a href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers" target="_blank">
          Route&nbsp;Handlers
        </a>{' '}
        and then come back here. Enjoy!
      </p>
      <p>
        <a href="/docs/intro">
          <span>Getting Started</span>{' '}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <br />
        <br />
        <a href="https://vovk.dev" target="_blank">
          Website
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/finom/vovk" target="_blank">
          Github
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://vovk-examples.vercel.app/" target="_blank">
          Examples
        </a>
      </p>

      <p style={{ textAlign: 'center',  margin: '50px auto' }}>
        Built with{' '}
        <a href="https://docusaurus.io/" target="_blank">
          Docusaurus
        </a>
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
