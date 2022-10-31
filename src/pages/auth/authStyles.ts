const gray: String = "#FEFEFF"
export const styles = {
    background: {
        backgroundImage:
            "linear-gradient(209deg, rgb(6, 24, 61) 24%, rgb(11, 33, 78) 44%, rgb(10, 24, 61) 91%)",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
        alignItems: "center",
        justifyContent: "center",
    },

    innerBox: {
        backgroundImage:
            "linear-gradient(45deg, rgb(46, 111, 199) 0%, #061B63 100%);",
        minHeight: "68vh",
        width: "35vw",
        borderRadius: "15px",
        boxShadow: "rgb(00, 00, 00) 0px 20px 30px -10px",
    },

    welcomeText: {
        color: gray,
        fontWeight: 600,
        fontSize: "1.75rem",
        textAlign: "center",
        margin: "2.5rem 0 1rem",
    },

    labelText: {
        margin: "1rem 2.75rem .35rem",
        fontSize: "1rem",
        color: gray,
        fontWeight: 500,
    },

    forgotPassword: {
        color: gray,
        fontWeight: 400,
        fontSize: ".9rem",
        textAlign: "right",
        margin: ".25rem 2.75rem ",
        cursor: "pointer",
        position: "relative",
        "&:hover": {
            textDecoration: "underline"
        },
    },

    button: {
        margin: ".75rem 2.5rem",
        backgroundColor: "#FFFFFF",
        border: 0,
        borderRadius: "10px",
        boxSizing: "border-box",
        color: "#111827",
        fontSize: ".9rem",
        fontWeight: 600,
        lineHeight: "1.25rem",
        padding: ".75rem 1rem",
        textAlign: "center",
        textDecoration: "none #D1D5DB solid",
        boxShadow:
            " 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgb(249,250,251)",
        },
        "&:focus": {
            outline: "2px solid transparent",
        },
        "&:focus-visible": {
            boxShadow: " none",
        },
    },

    dontText: {
        color: gray,
        fontWeight: 400,
        fontSize: ".9rem",
        textAlign: "center",
        margin: "0 .75rem 3.5rem",

    },

    dontSpan: {
        fontWeight: 700,
        cursor: "pointer",
    },

    inputField: {
        margin: "0 2.5rem",
        "& input": {
            color: gray,
        },
        "& .MuiOutlinedInput-input": {
            padding: ".75rem 0.75rem .75rem 0rem"
        },
        "& .MuiInputLabel-root": { color: gray },
        "& .MuiOutlinedInput-root": {
            "& > fieldset": { border: `1.25px solid #FEFEFF` },
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
                borderColor: gray,
            },
            color: gray,
        },
        "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
                border: `2.5px solid #FEFEFF`,
            },
        },
    },

    iconStyle: {
        color: gray,
    },

}