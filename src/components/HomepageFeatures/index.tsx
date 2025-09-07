import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  metrics: string;
  highlight: string;
  features: string[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Performance Excepcional',
    icon: '⚡',
    description: (
      <>
        Nossa infraestrutura de alta performance garante respostas ultra-rápidas 
        para consultas de contratos de crédito, com latência média de 150ms.
      </>
    ),
    metrics: '< 150ms',
    highlight: 'Ultra-rápido',
    features: ['Criptografia AES-256', 'Cache inteligente', 'CDN global', '99.9% uptime']
  },
  {
    title: 'Inteligência Artificial Avançada',
    icon: '🤖',
    description: (
      <>
        Algoritmos de machine learning proprietários para análise de risco em tempo real, 
        scoring de crédito preciso e detecção de fraudes.
      </>
    ),
    metrics: '95%',
    highlight: 'Precisão',
    features: ['ML em tempo real', 'Scoring automático', 'Detecção de fraudes', 'Recomendações IA']
  },
  {
    title: 'Integração Enterprise',
    icon: '🔗',
    description: (
      <>
        SDKs nativos para todas as principais linguagens, documentação interativa 
        e suporte completo para integração em ambientes corporativos.
      </>
    ),
    metrics: '8+',
    highlight: 'Linguagens',
    features: ['SDKs nativos', 'RESTful API', 'Webhooks', 'Documentação viva']
  },
];

function Feature({title, icon, description, metrics, highlight, features}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        {/* Header com ícone e métrica */}
        <div className={styles.featureHeader}>
          <div className={styles.featureIcon}>
            <span className={styles.iconEmoji}>{icon}</span>
          </div>
          <div className={styles.featureMetrics}>
            <div className={styles.metricValue}>{metrics}</div>
            <div className={styles.metricLabel}>{highlight}</div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
          
          {/* Lista de features */}
          <div className={styles.featureList}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                <span className={styles.featureText}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradiente de fundo */}
        <div className={styles.featureGradient}></div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
