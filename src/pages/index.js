import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className={styles.featureImage} src='img/Bloom.png' alt="Easy to Use"/>
        <h1 className="hero__title"><Translate>
        	Bloom Documentation</Translate></h1>
        <p className="hero__subtitle"><Translate>
        Be part of the movement to share 200 free books for each minority language on Earth.
        </Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://vimeo.com/channels/bloomlibrary"><Translate>
            Bloom Training Videos ⏱️
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
<main>
  <div className={clsx('col-*-9', styles.feature)}>
    <div className="text--center">
      <p>
      <Translate>
          .
      </Translate>
      </p>
    </div>
  </div>
</main>    </Layout>
  );
}
