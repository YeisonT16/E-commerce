import PropTypes from 'prop-types'

function Layout({children}){

    return(
        <div className="flex flex-col items-center mt-20">
            {children}
        </div>

    )
}

export { Layout };

Layout.propTypes = {
    children: PropTypes.node
}