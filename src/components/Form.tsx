import useSelect from '../hooks/useSelect'
import styles from './Form.module.css'

const Form = () => {

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

    return (
        <div className={`${styles.search} row`}>
            <div className="col s12 m8 offset-2">
                <form>
                    <h2 className={styles.heading}>Find your news by category</h2>

                    <NewsSelect />
                    <div className="input-field col s12">
                        <input
                            type='submit'
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
