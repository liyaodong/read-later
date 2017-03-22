import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#b9dedf",
        "minWidth": 300,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "\"Open Sans\",Arial,\"Lucida Grande\",sans-serif"
    },
    "input": {
        "lineHeight": 25,
        "outline": 0,
        "border": "none",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "background": "none",
        "color": "#fff",
        "fontSize": 12,
        "borderBottom": "1px solid #aaa"
    },
    "select": {
        "background": "none",
        "color": "#fff",
        "fontSize": 12
    },
    "label": {
        "fontSize": 16,
        "fontWeight": "bold"
    },
    "input-field": {
        "display": "flex",
        "lineHeight": 30,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "input-field label": {
        "marginRight": 10
    },
    "input-field input": {
        "flexGrow": 1
    },
    "input-field select": {
        "flexGrow": 1
    },
    "tac": {
        "textAlign": "center"
    },
    "template": {
        "display": "none"
    },
    "form": {
        "backgroundColor": "#257d97",
        "color": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "button": {
        "paddingTop": 10,
        "paddingRight": 30,
        "paddingBottom": 10,
        "paddingLeft": 30,
        "display": "block",
        "marginTop": 10,
        "marginRight": "auto",
        "marginBottom": 10,
        "marginLeft": "auto",
        "width": "80%",
        "backgroundColor": "#fff",
        "outline": 0,
        "border": 0,
        "fontSize": 16
    },
    "button:hover": {
        "backgroundColor": "#b9dedf",
        "cursor": "pointer"
    },
    "result": {
        "borderTop": "1px dashed #fff",
        "paddingTop": 10,
        "paddingRight": 5,
        "paddingBottom": 10,
        "paddingLeft": 5
    },
    "result__item": {
        "display": "flex",
        "flexWrap": "nowrap",
        "alignItems": "center",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "textDecoration": "none",
        "color": "#222"
    },
    "result__item:not(:last-of-type)": {
        "borderBottom": "1px dashed #eee"
    },
    "result__item:hover": {
        "backgroundColor": "rgba(255, 255, 255, .3)"
    },
    "result__icon": {
        "width": 32,
        "height": 32,
        "flexShrink": 0
    },
    "result__title": {
        "flexGrow": 1,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 5,
        "fontSize": 12
    }
});