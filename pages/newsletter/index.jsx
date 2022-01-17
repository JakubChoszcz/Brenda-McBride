// http://localhost:3000/newsletter

import Head from "next/head";
import NewsletterForm from "../../components/Newsletter/NewsletterForm";

const Newsletter = () => {
    return (
        <>
            <Head>
                <title>Brenda McBride - Newsletter</title>
            </Head>
            <NewsletterForm/>
        </>
    )
}

export default Newsletter;