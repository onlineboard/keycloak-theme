import {useEffect} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    defaultKcProps,
    KcApp,
    kcContext as realKcContext,
    kcContextMocks,
    kcMessages,
    useKcLanguageTag
} from "keycloakify";

const kcContext = realKcContext ?? kcContextMocks.kcRegisterContext;

if (kcContext !== undefined) {
    console.log(kcContext);
}

ReactDOM.render(
    <Login/>,
    document.getElementById("root")
);

function Login() {

    if (kcContext === undefined) {
        throw new Error();
    }
    return (
        <>
            <KcApp
                kcContext={kcContext}
                {...{
                    ...defaultKcProps,
                    "stylesCommon": []
                }}
            />
        </>

    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
