import './Banner.css'


const Banner = () => {
    return (
        <section className='banner-container'>
            <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            <div className='banner-content'>
            <h1 className='banner-title'>Book your Hotel Today!</h1>
            <p className='banner-subtitle'>You can choose from a wide Vqriety of Hotel</p>
            </div>
            
        </section>
    )
}

export default Banner;
