import Card from "./Card";

export default function DataItem(props) {
  return (
    <Card>
      <h4>
        {props.tantargy}, {props.datum}
      </h4>
    </Card>
  );
}
