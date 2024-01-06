import React from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function Ambalance() {
  const componentRef = useRef();
  const printPage = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "UrgentHotLines",
    onAfterPrint: () => alert("Print success"),
  });

  return (
    <>
      <div
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight }}
      >
        <section className={styles["mainWrapper"]}>
          <div className={styles["introTextWrapper"]}>
            <h1>
              緊急救助熱線
              <AddIcCallRoundedIcon style={{ fontSize: 40 }} />
            </h1>
          </div>
          <br />

          <section className={styles["introWrapper"]}>
            <div className={styles["introTextWrapper"]}>
              <Card
                sx={{
                  minWidth: 550,
                  padding: 3,
                  display: "block",
                  margin: "20px 5px",
                }}
              >
                <CardContent style={{ textAlign: "center" }}>
                  <Typography
                    sx={{ fontSize: 22 }}
                    color="text.secondary"
                    component="div"
                  >
                    指揮及控制中心
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    <Link to="tel:852999">999</Link>
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className={styles["introTextWrapper"]}>
              <Card
                sx={{
                  minWidth: 550,
                  padding: 3,
                  display: "block",
                  margin: "20px 5px",
                }}
              >
                <CardContent style={{ textAlign: "center" }}>
                  <Typography
                    sx={{ fontSize: 22 }}
                    color="text.secondary"
                    component="div"
                  >
                    消防處救護車調派中心
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    <Link to="tel:85227353355">27353355</Link>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className={styles["introTextWrapper"]}>
            <h3>聖約翰救護車</h3>
          </div>

          <section className={styles["introWrapper"]}>
            {data.map((item, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: 295,
                  padding: 3,
                  display: "block",
                  margin: "20px 5px",
                }}
              >
                <CardContent style={{ textAlign: "center" }}>
                  <Typography
                    sx={{ fontSize: 22 }}
                    color="text.secondary"
                    component="div"
                  >
                    {item.機構}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    <Link to={`tel:${item.電話}`}>{item.電話}</Link>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </section>
        </section>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={printPage}>列印</button>
        </div>
        <div className={styles["footer-wrapper"]}>
          <footer>© 資料歸香港公立醫院版權所有</footer>
        </div>
      </div>
    </>
  );
}

export default Ambalance;

const data = [
  {
    機構: "聖約翰救護車熱線",
    電話: 1878000,
  },
  {
    機構: "聖約翰救護車－港島",
    電話: 25766555,
  },
  {
    機構: "聖約翰救護車－九龍",
    電話: 27135555,
  },
  {
    機構: "聖約翰救護車－新界",
    電話: 26392555,
  },
];