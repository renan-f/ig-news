import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import styles from './styles.module.scss';

export default function Posts() {
    return (<>
        <Head>
            <title>Posts | Ignews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="">
                    <time>05 de novembro de 2021</time>
                    <strong>Creating a Monorepo with Lerna & Yarn Workspace</strong>
                    <p>In this guide, you will lean how to create a Monorepo to manage
                        multiple packages with a sared build,
                        test, and realease process.
                    </p>
                </a>
                <a href="">
                    <time>05 de novembro de 2021</time>
                    <strong>Creating a Monorepo with Lerna & Yarn Workspace</strong>
                    <p>In this guide, you will lean how to create a Monorepo to manage
                        multiple packages with a sared build,
                        test, and realease process.
                    </p>
                </a>
                <a href="">
                    <time>05 de novembro de 2021</time>
                    <strong>Creating a Monorepo with Lerna & Yarn Workspace</strong>
                    <p>In this guide, you will lean how to create a Monorepo to manage
                        multiple packages with a sared build,
                        test, and realease process.
                    </p>
                </a>
            </div>
        </main>
    </>);
}

export const getStaticProps: GetStaticProps = async () => {
    const nameDocument = 'post';
    const fieldsDocument = [`${nameDocument}.title`, `${nameDocument}.content`];
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', nameDocument)
    ], {
        fetch: fieldsDocument,
        pageSize: 100,
    }
    );

    console.log(JSON.stringify(response, null, 2));
    return { props: {} }
}