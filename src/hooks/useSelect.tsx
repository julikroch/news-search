import { useState } from "react"

const useSelect = (props: { initialState: string, options: any }) => {
    const [state, setState] = useState('')

    const NewsSelect = () => {
        return (
            <select
                className='browser-default'
                value={state}
                onChange={e => setState(e.target.value)}
            >
                {props.options.map((option: any) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        )
    }

    return [state, NewsSelect] as const
}

export default useSelect
