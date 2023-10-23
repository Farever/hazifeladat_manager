import AddNewDataForm from "./AddNewDataForm";
import DataList from "./DataList";

export default function Home(props){
    return(
        <>
        <AddNewDataForm OnSaveHandler={props.OnSaveHandler}/>
        <br/>
        <DataList data={props.data} />
        </>
    )
}