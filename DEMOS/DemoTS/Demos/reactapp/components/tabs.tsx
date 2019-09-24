import * as React from "react";
import { ITabContent, ITabProps, ITabsProps } from "../abstractions/tabs";
import Template from "../components/template";

class Tabs extends React.Component<ITabsProps> {
    public static Tab: React.SFC<ITabProps> = props => {
        return (
            <React.Fragment>
                <Template onClick={() => {
                    if (props.onClick) {
                        props.onClick(props.name);
                    } }} className={props.isActive ? "demo-tab active" : "demo-tab"} templateId={props.heading.templateId} dataContext={props.heading.dataContext} />
            </React.Fragment>
        );
    };

    constructor(props) {
        super(props);
    }

    public render() {
        let activeTab: ITabContent = null;
        const { tabs, activeName } = this.props;

        if (!!activeName) {
            const temp = tabs.filter((t) => t.name === activeName);
            if (temp.length > 0)
                activeTab = temp[0];
        }

        if (!activeTab) {
            activeTab = tabs[0];
        }

        return (
            <React.Fragment>
                <div className="demo-tabs">{tabs.map((tab) => {
                    return (
                        <Tabs.Tab key={tab.name} onClick={this._handleTabClick} name={tab.name} heading={tab.heading} isActive={activeTab === tab} />
                    );
                })}</div>

                {!!activeTab && (
                    <React.Fragment>
                        <Template className="demo-tabs-content" templateId={activeTab.content.templateId} dataContext={activeTab.content.dataContext} />
                    </React.Fragment>
                )}

                {!activeTab && (
                    <div className="demo-tabs-content"></div>
                )}
            </React.Fragment>
        );
    }

    private _handleTabClick = (name: string) => {
        if (!!this.props.onClick)
            this.props.onClick(name);
    };
}

export default Tabs;
