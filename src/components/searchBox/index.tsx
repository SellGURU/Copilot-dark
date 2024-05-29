/* eslint-disable @typescript-eslint/no-explicit-any */
interface SearchBoxProps {
    theme:string
    placeholder:string
}
const SearchBox:React.FC<SearchBoxProps> = ({theme,placeholder}) => {
    return (
        <>
            <div className={`${theme}-SearchBox-container`}>
                <input type="text" placeholder={placeholder} className={`${theme}-SearchBox-input`} />
                <img className={`${theme}-icons-Search ${theme}-SearchBox-input-icon`} alt="" />
            </div>        
        </>
    )
}

export default SearchBox