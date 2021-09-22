const News = (props: { item: any }) => {

    const { urlToImage, url, title, description, source } = props.item

    const img = urlToImage ? <img src={urlToImage} alt={title} /> : null

    return (
        <div className='col card-container s12 m6 l4'>
            <div className='card'>
                <div className='card-image'>
                    {img}
                    <span className='card-title'>{source.name}</span>
                </div>

                <div className='card-content'>
                    <h5>{title}</h5>
                    <p>{description}</p>

                    <div className='card-action'>
                        <a
                            href={url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='waves-effect waves-light button'
                        >
                            Go to complete new
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
