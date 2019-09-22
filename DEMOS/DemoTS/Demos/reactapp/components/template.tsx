import * as React from 'react';
import { ITemplate } from "jriapp/int";
import { createTemplate } from "jriapp/template";
import { createWeakMap } from "jriapp_shared/utils/weakmap";

const weakmap = createWeakMap();

export interface ITemplateProps {
    templateId: string;
    dataContext: object | null | undefined;
    style?: object;
    className?: string;
    onClick?: (dataContext: object | null | undefined) => void;
}

class Template extends React.Component<ITemplateProps> {
    private _div: HTMLElement;

    private _handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        if (!!this.props.onClick) {
            this.props.onClick(this.props.dataContext);
        }
    }

    private _setDiv(div: HTMLElement | null): void {
        if (this._div !== div) {
            Template._disposeTemplate(this._div);
            this._div = div;
        }
    };

    private static _updateTemplate(div: HTMLElement, props: ITemplateProps) {
        if (!!div) {
            const template = Template._getTemplate(div);
            if (!!template) {
                // template checks for changed values itself (no need to check here before assignement)
                template.templateID = props.templateId;
                template.dataContext = props.dataContext;
            }
        } 
    }

    private static _disposeTemplate(div: HTMLElement) {
        if (!!div) {
            const template = weakmap.get(div) as ITemplate;
            if (!!template) {
                template.dispose();
                weakmap.delete(div);
            }
        }
    }

    private static _getTemplate(div: HTMLElement): ITemplate {
        if (!!div) {
            let template = weakmap.get(div) as ITemplate;
            if (!template) {
                template = createTemplate({ parentEl: div });
                weakmap.set(div, template);
            }
            return template;
        } else {
            return null;
        }
    }

    componentDidMount() {
        Template._updateTemplate(this._div, this.props);
    }

    componentDidUpdate() {
        Template._updateTemplate(this._div, this.props);
    }

    componentWillUnmount() {
        Template._disposeTemplate(this._div);
    }

    shouldComponentUpdate(nextProps: ITemplateProps) {
        const templateChanged = this.props.dataContext !== nextProps.dataContext || this.props.templateId !== nextProps.templateId;
        let res = this.props.className !== nextProps.className || this.props.style !== nextProps.style || this.props.onClick !== nextProps.onClick;

        if (templateChanged && !res) {
            if (!!this._div) {
                // only template is updated
                Template._updateTemplate(this._div, nextProps);
            } else {
                res = true;
            }
        }
        return res;
    }

    constructor(props) {
        super(props);
        this._div = null;
        this._handleClick = this._handleClick.bind(this);
        this._setDiv = this._setDiv.bind(this);
    }

    render(): JSX.Element {
        const style = this.props.style ? this.props.style : {};
        const css = this.props.className ? this.props.className : "";

        return <div onClick={this._handleClick} className={css} style={style} ref={this._setDiv} />;
    }
}

export default Template;
