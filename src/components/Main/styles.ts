import { makeStyles } from "@mui/styles";

 export const useStyles = makeStyles((_theme: any) => ({
    App: {
      background: "rgba(55, 67, 115, 1)",
      minHeight: "100vh",
    },
    lineGradient: {
      margin: " 0 auto 20px",
      width: "240px",
      height: "2px",
  
      background: "linear-gradient(to right, rgb(255,45,180), #ffeb07, #FF0080)",
    },
    wrapperArea: {
      display: "flex",
      alignItems: "center",
    },
    title: {
      color: "#b2bff6",
    },
    input: {
      background: "rgb(96 106 147)",
      marginRight: "10px!important",
    },
    inputArea: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "40px",
      alignItems: "center",
      margin: "0 auto 40px",
      width: "100%",
    },
    inputArea2: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "40px",
      marginLeft: "8%",
      alignItems: "center",
    },
    button: {
      borderRadius: "16px!important",
      fontSize: "14px!important",
      height: "46px!important",
      cursor: "pointer!important",
      background:
        "linear-gradient(to right, rgb(255,45,180), #ffeb07, #FF0080)!important",
      padding: "5px 25px!important",
      color: "white!important",
    },
    button1: {
      borderRadius: "16px!important",
      fontSize: "14px!important",
      height: "40px!important",
      cursor: "pointer!important",
      background:
        "linear-gradient(to right, rgb(255,45,180), #ffeb07, #FF0080)!important",
      border: "1px solid!important",
      marginRight: " 10px!important",
      padding: "5px 22px!important",
      color: "white!important",
    },
  }));
  