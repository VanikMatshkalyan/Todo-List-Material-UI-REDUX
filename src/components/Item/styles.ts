import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((_theme: void) => ({
    addedTasks: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: " #202744",
      border: "1px solid #374373",
      width: "39%",
      margin: "0 auto",
      padding: "10px 10px",
      borderRadius: "10px",
      alignItems: "center",
      marginBottom: "20px",
      height: "25px",
    },
    buttons: {
      display: "flex",
      paddingLeft: "10px",
      "& button": {
        color: "white",
      },
    },
    text: {
      "& *": {
        color: "unset",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        color: "white",
        border: "unset",
      },
      "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
        "-webkit-text-fill-color": "unset",
      },
      "& .MuiInputBase-input": {
        color: "white",
        fontWeight: "700",
        fontSize: " 14px",
        background: "unset",
        border: "none",
        width: "300px",
        maxWidth: "100%",
      },
    },
  
    input: {
      "& .MuiInputBase-input": {
        backgroundColor: "white",
        color: "black",
        paddingRight: "10px",
        height: "10px",
      },
    },
  
    important: {
      "& .MuiInputBase-input": {
        color: "red",
        fontWeight: "700!important",
        fontSize: "14px!important",
        background: "unset!important",
        border: "none!important",
      },
      "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
        "-webkit-text-fill-color": "red",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "unset!important",
      },
    },
    edit: {
      color: "white!important",
    },
    delete: {
      color: "white!important",
    },
    done: {
      "& .MuiInputBase-input": {
        color: "green",
        fontWeight: "700!important",
        fontSize: "14px!important",
        background: "unset!important",
        border: "none!important",
      },
      "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
        "-webkit-text-fill-color": "green",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "unset!important",
      },
    },
  
    buttonArea: {
      "& .button": {
        border: "none!important",
        backgroundColor: "inherit!important",
        cursor: "pointer!important",
      },
      "& $edit": {
        color: "white!important",
        fontWeight: "bold!important",
        fontSize: "14px!important",
        paddingRight: "15px!important",
        marginLeft: "10%",
      },
      "& $edit:hover": {
        textDecoration: "underline",
      },
      "& .important": {
        color: "white!important",
        fontWeight: "bold!important",
        fontSize: "14px!important",
        paddingRight: "15px!important",
      },
      "& .important:hover": {
        textDecoration: "underline",
      },
      "& .done": {
        color: "white!important",
        fontWeight: "bold!important",
        fontSize: "14px!important",
        paddingRight: "15px!important",
      },
      "& .done:hover": {
        textDecoration: "underline",
      },
      "& $delete": {
        color: "white!important",
        fontWeight: "bold!important",
        fontSize: "14px!important",
        paddingRight: "10px!important",
      },
      "& $delete:hover": {
        textDecoration: "underline",
      },
    },
  }));