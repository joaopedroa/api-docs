import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ 
            fontSize: '4rem', 
            marginBottom: '1rem',
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
          }}>
            🏦💳
          </div>
        </div>
        <Heading as="h1" className="hero__title" style={{ 
          fontSize: '3.5rem',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          marginBottom: '1rem'
        }}>
          CreditCheck API
        </Heading>
        <p className="hero__subtitle" style={{ 
          fontSize: '1.4rem',
          fontWeight: '400',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          marginBottom: '2rem',
          maxWidth: '800px',
          margin: '0 auto 2rem auto'
        }}>
          Solução completa para consulta e análise de contratos de crédito. 
          Acesse informações detalhadas, valide dados e tome decisões mais assertivas.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{
              backgroundColor: '#fff',
              color: '#e67e22',
              border: '2px solid #fff',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
            📖 Documentação - 5min ⏱️
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/swagger-api-principal"
            style={{
              backgroundColor: '#d35400',
              border: '2px solid #d35400',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
            🔧 API Documentation
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/sobre-produto"
            style={{
              color: '#fff',
              border: '2px solid #fff',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
            🏦 Sobre o Produto
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
