import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import QueriesGraph from "./QueriesGraph";
import {useTranslation} from "react-i18next";

const QueriesStatistics = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={
                <Typography
                    variant={"h6"}
                    mb={0}
                    sx={{fontSize: 12, color: "common.white", letterSpacing: 1.5}}
                >{t("RKM HOTO Survey Status")}</Typography>
            }
            sx={{color: "common.white"}}
            bgColor={"#53B8CA"}
            wrapperSx={{p: 0, '&:last-child': {p: 0}}}
        >
            <Div
                sx={{
                    p: 3,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                    position: 'absolute',
                }}
            >
                <Typography variant={"h2"} color={"common.white"}>5%</Typography>
                <Typography variant={"body1"} color={"common.white"} mb={0}>{"Competed"}</Typography>
            </Div>
            <QueriesGraph/>
        </JumboCardQuick>
    );
};

export default QueriesStatistics;
