import News from '../News'
import styles from './NewsList.module.css'

const NewsList = (props: { news: any }) => {
    const { news } = props

    return (
        <div className={`${styles.card_container} row`}>
            {news.map((item: any) => (
                <News
                    key={item.url}
                    item={item}
                />
            ))}
        </div>
    )
}


export default NewsList
