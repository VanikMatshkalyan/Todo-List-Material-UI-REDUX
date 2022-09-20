import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((_theme: void) => ({
  buttons: {
    display: "flex",
    paddingLeft: "10px",
    "& button": {
      color: "white",
    },
  },
  important: {
    color: "red",
    fontWeight: "700!important",
    fontSize: "14px!important",
    background: "unset!important",
    border: "none!important",
  },
  edit: {
    color: "white!important",
  },
  delete: {
    color: "white!important",
  },
  done: {
    color: "green",
    fontWeight: "700!important",
    fontSize: "14px!important",
    background: "unset!important",
    border: "none!important",
  },
}));
