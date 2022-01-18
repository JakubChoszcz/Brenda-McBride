// http://localhost:3000/newsletter

import Head from "next/head";
import NewsletterForm from "../../components/Newsletter/NewsletterForm";

const Newsletter = () => {
    const handleAddNewsletter = async (userData) => {
        const res = await fetch('/api/newsletter/postNewsletter', {
            method: 'POST',
            body: JSON.stringify(userData)
        })
    }

    return (
        <>
            <Head>
                <title>Brenda McBride - Newsletter</title>
            </Head>
            <NewsletterForm handleAddNewsletter={handleAddNewsletter}/>
        </>
    )
}

export default Newsletter;