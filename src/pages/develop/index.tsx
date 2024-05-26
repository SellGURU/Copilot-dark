/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "symphony-ui"
import {useSelector } from 'react-redux'
const Develop = () => {
    const theme = useSelector((state:any) => state.theme.value.name)
    return (
        <>
            <h1>Componets:</h1>
            <div>
                <Button theme={theme}>button</Button>
            </div>
        </>
    )
}

export default Develop