import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    url: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'API Reference',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>Structured view of API endpoints </>
        ),
        url: '/docs/cocreate-api-reference'
    },
    {
        title: 'API Definition',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>Structured view of API endpoints </>
        ),
        url: '/api'
    },
    {
        title: 'Documentation improvement strategy',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
        url: '/docs/cocreate-api-docs-improvement-strategy'
    },
];

function Feature({ title, url }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <h3>
                    <a href={url}>{title}</a>
                </h3>

            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
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
