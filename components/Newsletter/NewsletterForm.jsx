import Link from 'next/link';
import styles from './NewsletterForm.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';

const NewsletterForm = ({ handleAddNewsletter }) => {
    const route = useRouter()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [privatePolicy, setPrivatePolicy] = useState(false);

    const handleForm = (event) => {
        event.preventDefault();

        const userData = {
            firstName,
            lastName,
            userEmail
        }

        handleAddNewsletter(userData);

        route.push('/');
    }

    return (
        <div className={`${styles.newsletterDiv}`}>
            <div className={`container`}>
                <form onSubmit={handleForm}>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            <div className={`${styles.titleDiv}`}>
                                <h1>Sign up for newsletters</h1>
                            </div>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-6`}>
                            <div className={`${styles.inputDiv}`}>
                                <label htmlFor="firstName">First name</label>
                                <input 
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className={`${styles.input}`}
                                    id="firstName"
                                    placeholder="Brenda"
                                />
                            </div>
                        </div>
                        <div className={`col-6`}>
                            <div className={`${styles.inputDiv}`}>
                                <label htmlFor="lastName">Last name</label>
                                <input 
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className={`${styles.input}`}
                                    id="lastName"
                                    placeholder="McBride"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            <div className={`${styles.emailDiv}`}>
                                <label htmlFor="userEmail">Email</label>
                                <input 
                                    type="text"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    className={`${styles.input}`}
                                    id="userEmail"
                                    placeholder="brenda.mcbride@domain.com"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-6`}>
                            <div className={`${styles.checkboxDiv}`}>
                                <Link href="/private-policy">
                                    <a>Accept private policy</a>
                                </Link>
                                <input
                                    type="checkbox"
                                    value={privatePolicy}
                                    onChange={() => setPrivatePolicy(!privatePolicy)}
                                    className={`${styles.checkbox}`}
                                />
                            </div>
                        </div>
                        <div className={`col-6`}>
                            <div className={`${styles.buttonDiv}`}>
                                <button
                                    type="submit"
                                    disabled={!privatePolicy}
                                >Sign Up</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewsletterForm;