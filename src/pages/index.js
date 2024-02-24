import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { useRef, useEffect } from 'react';

function Content() {
  return (
    <>
      <p className={styles.main}>
        <img
          width="250"
          height="345"
          alt="vovk"
          src="https://github.com/finom/vovk/assets/1082083/86bfbbbb-3600-435b-a74c-c07bd0c4af4b"
        />{' '}
        <br />
        <img
          width="350"
          height="72"
          alt="vovk"
          className="invert"
          // style={colorMode === 'dark' ? { filter: 'invert(1)' } : {}}
          src='/img/vovk-text-logo.svg'
        />
      </p>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        Welcome to Vovk.ts documentation! In case of typos and mistakes, feel free to submit a pull request to this{' '}
        <a href="https://github.com/finom/docs.vovk.dev" target="_blank">documentation repository</a>.
      </p>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '10px auto' }}>
        Before you get started it's recommended to read Next.js documentation for{' '}
        <a href="https://nextjs.org/docs/app" target="_blank">
          App&nbsp;Router
        </a>{' '}
        and then come back here. Enjoy!
      </p>
      <p className={styles.buttons}>
        <a className={styles.button} href="/docs/intro">
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

      <p style={{ textAlign: 'center',  margin: '10px auto', opacity: 0.3 }}>
        Built with Docusaurus
      </p>
    </>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Vovk.ts Documentation`}
      description="Welcome to Vovk.ts documentation! It's built to help you get started as quickly as possible and contain phislisophical discussions."
    >
      <header className={styles.header}>
        <Content />
      </header>
    </Layout>
  );
}
