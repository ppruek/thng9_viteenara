import React, { useState } from 'react'

const FooterV = () => {
    const [email, setEmail] = useState('email')
    return (
        <div>
            <form action={() => { }}>
                Email : <input type="text" name="email" />
                Pass : <input type="text" name="pass" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FooterV