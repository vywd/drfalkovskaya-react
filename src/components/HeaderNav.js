import React from 'react'
import LogoHeader from './LogoHeader'
import NavMenu from './NavMenu'
import FooterMenu from './FooterMenu'

export const HeaderNav = (props) => {
    return (
        <>
            <LogoHeader />
            <NavMenu />
            <main>
                {props.children}
            </main>
            <FooterMenu />
        </>
    )
}

export default HeaderNav