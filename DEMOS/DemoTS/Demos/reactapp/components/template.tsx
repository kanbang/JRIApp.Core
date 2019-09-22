import * as React from 'react';
import { ITemplate } from "jriapp/int";
import { createTemplate } from "jriapp/template";

export interface ITemplateProps {
    templateId: string;
    dataContext: object | null | undefined;
    style?: object;
    className?: string;
    onClick?: (dataContext: object | null | undefined) => void;
}

class Template extends React.Component<ITemplateProps> {
    private _div: HTMLDivElement;
    private _template: ITemplate;

    private _handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        if (!!this.props.onClick) {
            this.props.onClick(this.props.dataContext);
        }
    }

    private _setDiv(element: HTMLDivElement | null): void {
        const oldDiv = this._div;
        this._div = element;
        if (oldDiv !== this._div && !!this._template) {
            this._template.dispose();
            this._template = null;
        }
        if (!!this._div && !this._template) {
            this._template = createTemplate({ parentEl: this._div });
        }
    };

    private _updateTemplate(props: ITemplateProps) {
        if (!!this._template) {
            // template checks for changed values itself (no need to check here before assignement)
            this._template.templateID = props.templateId;
            this._template.dataContext = props.dataContext;
        } 
    }

    componentDidMount() {
        this._updateTemplate(this.props);
    }

    componentDidUpdate() {
        this._updateTemplate(this.props);
    }

    shouldComponentUpdate(nextProps: ITemplateProps) {
        const templateChanged = this.props.dataContext !== nextProps.dataContext || this.props.templateId !== nextProps.templateId;
        let res = this.props.className !== nextProps.className || this.props.style !== nextProps.style || this.props.onClick !== nextProps.onClick;
        if (templateChanged && !res) {
            if (!!this._template) {
                // only template is updated
                this._updateTemplate(nextProps);

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
