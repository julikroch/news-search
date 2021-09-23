import useSelect from '../../hooks/useSelect'
import styles from './Form.module.css'

const Form = (props: { saveCategory: any }) => {

    const OPTIONS = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
        { value: 'science', label: 'Science' },
        { value: 'sports', label: 'Sports' },
        { value: 'technology', label: 'Technology' }
    ]

    const [category, NewsSelect] = useSelect({
        initialState: 'general',
        options: OPTIONS
    })

    const searchNews = (e: any) => {
        e.preventDefault()
        props.saveCategory(category)
    }

    return (
        <div className={`${styles.search} row`}>
            <div className='col s12 m12 offset-2'>
                <form onSubmit={searchNews}>
                    <h2 className={styles.heading}>Find your news by category</h2>
                    <NewsSelect />
                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value='Find'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
