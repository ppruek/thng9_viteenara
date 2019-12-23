import React from 'react'

const HeaderV = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ justifyContent: 'left' }}>
                <button onClick={() => { window.location = '/' }}>logo</button>
                <button onClick={() => { window.location = '/shop' }}>go to shop</button>
            </div>
            <div style={{ justifyContent: 'right' }}>
                <form action={() => { }}>
                    Email : <input type="text" name="email" />
                    Pass : <input type="text" name="pass" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default HeaderV