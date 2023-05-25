import './Banner.css'

const Banner = () => {
    return (
        <section className='banner-container'>
            <section className="banner-title">
                <h1 >Welcome!</h1>
                <p>This is my first Aplication</p>
            </section>
            <img src="https://images.unsplash.com/photo-1683899266164-219e1ebdf029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="" />
        </section>
    )
}

export default Banner;