import React from "react";
import TabControl from "./tab-controll";

import "../../scss/common/reset";
import "../../scss/tabdemo";
import "../../scss/style";

class Tabdemo extends React.Component {
    render() {
        return (
            <div className="container">
                <TabControl>
                    <div name="first">
                        第一帧
                    </div>
                    <div name="second">
                        第二帧
                    </div>
                    <div name="third">
                        第三帧
                    </div>
                </TabControl>
            </div>
        )
    }
}

export default Tabdemo;