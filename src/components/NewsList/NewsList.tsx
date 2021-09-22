import News from '../News'
import styles from './NewsList.module.css'

const NewsList = (props: { news: any }) => {
    return (
        <div className={`${styles.card_container} row`}>
            {props.news.map((item: any) => (
                <News
                    key={item.url}
                    item={item}
                />
            ))}
        </div>
    )
}


export default NewsList
