// import { Index } from "@/components"
import { Table } from "@/components";
import { Outlet } from 'react-router-dom';

const PatientList = () => {
    return (
        <>
        <div className="bg-black-background w-full h-full" >
            <Table></Table>
            <Outlet /> 
        </div>
        </>
    )
}

export default PatientList;