import React from "react";

class TabControl extends React.Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 0
        }
    }

    check_title_index(index) {
        return index === this.state.currentIndex ? "tab_title active" : "tab_title";
    }

    check_item_index(index) {
        return index === this.state.currentIndex ? "tab_item show" : "tab_item";
    }

    render() {
        return (
            <div>
                <div className="tab_title_wrap">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return(
                                <div
                                    onClick={() => {
                                        this.setState({
                                            currentIndex: index
                                        });
                                        console.log(index);
                                    }}
                                    className={
                                        this.check_title_index(index)
                                    }
                                >
                                    { element.props.name }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="tab_item_wrap">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return (
                                <div
                                    className={
                                        this.check_item_index(index)
                                    }
                                >
                                    { element }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TabControl;