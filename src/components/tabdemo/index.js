import React from "react";
import TabControl from "./tab-controll";

import "../../scss/common/reset";
import "../../scss/style";

class Tabdemos extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <TabControl>
                    <div name="First">
                        React的1
                    </div>
                    <div name="Second">
                        Tab切换1
                    </div>
                    <div name="Third">
                        完成了！1
                    </div>
                </TabControl>
            </div>
        )
    }
}

export default Tabdemos;