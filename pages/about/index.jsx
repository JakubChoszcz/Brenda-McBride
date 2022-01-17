// http://localhost:3000/about

import Head from "next/head";
import AboutContent from "../../components/About/AboutContent/AboutContent";
import AboutImageSpace from "../../components/About/AboutImageSpace/AboutImageSpace";
import AboutText from "../../components/About/AboutText/AboutText";
import AboutWelcome from "../../components/About/AboutWelcome/AboutWelcome";

const About = () => {
    return (
        <>
            <Head>
                <title>Brenda McBride - About</title>
            </Head>
            <AboutWelcome/>
            <AboutContent/>
            <AboutImageSpace/>
            <AboutText/>
        </>
    )
}

export default About;