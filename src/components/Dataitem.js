import Card from "./Card";
import classes from "./Card.module.css";
import { useState } from "react";

export default function DataItem(props) {
  const [style, setSyle] = useState(classes.cardBg);
  const [isCompareDatesCalled, setIsCompareDatesCalled] = useState(false);

  function comparedates() {
    if(props.done){
      hwReady();
    }
    setIsCompareDatesCalled(true);
    const date1 = new Date(props.hatarido).getTime();
    const date2 = new Date().getTime();

    console.log({ date1 })
    console.log({ date2 })

    if (date1 < date2) {
      setSyle(classes.expired)
    }
  }

  if (!isCompareDatesCalled) {
    comparedates();
  }

  function hwReady() {
    setSyle(classes.done);
  }

  return (
    <><br /> <div className={style}>
      <Card >
        <h1 className={classes.cardHeader}>{props.milyen} <span /> {props.tantargy} : {props.temakor}</h1>
        <p className={classes.cardText}>{props.leiras}</p>
        <p className={classes.cardText}>{props.hatarido}</p>
        <input type="button" className={classes.cardBtn} value="Kész" onClick={hwReady} />
      </Card>
    </div></>


  );
}
