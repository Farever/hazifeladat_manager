import DataItem from "./DataItem";

export default function DataList(props) {
    return (
        <>
            {props.data.map((data) => (
                <DataItem
                    id={data.id}
                    tantargy={data.tantargy}
                    datum={data.datum}
                    temakor={data.temakor}
                    hatarido={data.hatarido}
                    milyen={data.milyen}
                    leiras={data.leiras}
                />
            ))}
        </>
    );
}