import { useEffect } from "react";

export default function SettingScrollFunc() {
    useEffect(()=>{
        console.log("SettingScrollFunc");

        window.scroll({
            top: 0,
            left: 0,
        });
        console.log("SettingScrollFunc --- Bottom Out");
        window.scroll({
            top: 5000,
            left: 0,
        });
        console.log("SettingScrollFunc --- Top Out");
    },[]);
}
