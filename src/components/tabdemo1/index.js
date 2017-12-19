import React from "react";
import TabControl from "./tab-control";

import "../../scss/style";

class Tabdemo1 extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <TabControl>
                    <div name="first">
                        React的
                    </div>
                    <div name="second">
                        TAB切换
                    </div>
                    <div name="third">
                        完成了！
                    </div>
                </TabControl>
            </div>
        )
    }
}

export default Tabdemo1;
