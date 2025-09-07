import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Consulta Rápida e Segura',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Acesse informações de contratos de crédito de forma instantânea e segura. 
        Nossa API oferece resposta em menos de 200ms com criptografia end-to-end.
      </>
    ),
  },
  {
    title: 'Análise Inteligente',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Utilize nossa inteligência artificial para análise de risco, 
        scoring de crédito e recomendações personalizadas baseadas no histórico do cliente.
      </>
    ),
  },
  {
    title: 'Integração Simples',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        SDKs disponíveis para múltiplas linguagens e documentação interativa. 
        Integre em minutos com nossa API RESTful completa.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
