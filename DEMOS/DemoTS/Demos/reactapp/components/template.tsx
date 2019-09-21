import * as React from 'react';
import { ITemplate } from "jriapp/int";
import { createTemplate } from "jriapp/template";

export interface ITemplateProps {
    templateId: string;
    dataContext: object | null | undefined;
    style?: object;
    css?: string;
    onClick?: (dataContext: object | null | undefined) => void;
}

class Template extends React.Component<ITemplateProps> {
    private _div: HTMLDivElement;
    private _template: ITemplate;

    private _setDiv(this: Template, element: HTMLDivElement | null) {
        const oldDiv = this._div;
        this._div = element;
        if (oldDiv !== this._div && !!this._template) {
            this._template.dispose();
            this._template = null;
        }
        if (!!this._div && !this._template) {
            this._template = createTemplate({ parentEl: this._div });
            this._template.templateID = this.props.templateId;
            this._template.dataContext = this.props.dataContext;
        }
    };

    componentWillReceiveProps(nextProps: ITemplateProps) {
        if (!!this._template) {
            // template checks for changed values itself (no need to check here)
            this._template.templateID = nextProps.templateId;
            this._template.dataContext = nextProps.dataContext;
        }
    }

    shouldComponentUpdate(nextProps: ITemplateProps) {
        const res = this.props.dataContext !== nextProps.dataContext || this.props.templateId !== nextProps.templateId ||
            this.props.css !== nextProps.css || this.props.style !== nextProps.style || this.props.onClick !== nextProps.onClick;
        return res;
    }

    constructor(props) {
        super(props);
        this._div = null;
    }

    render(): JSX.Element {
        const { dataContext } = this.props;

        const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (!!this.props.onClick) {
                this.props.onClick(dataContext);
            }
        }; 
        const setDiv = (element: HTMLDivElement | null) => {
            this._setDiv(element);
        };
        const style = this.props.style ? this.props.style : {};
        const css = this.props.css ? this.props.css : "";

        return <div onClick={handleClick} className={css} style={style} ref={setDiv} />;
    }
}

export default Template;
