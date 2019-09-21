import * as React from 'react';
import { ITemplate } from "jriapp/int";
import { createTemplate } from "jriapp/template";

export interface ITemplateProps {
    templateId: string;
    dataContext: object | null | undefined;
    style?: object;
    css?: string;
}

class Template extends React.Component<ITemplateProps> {
    private _div: HTMLDivElement;
    private _template: ITemplate;

    private _setDiv(element: HTMLDivElement | null) {
        const oldDiv = this._div;
        this._div = element;
        if (oldDiv !== this._div && !!this._template) {
            this._template.dispose();
            this._template = null;
        }

        if (!!this._div && !this._template) {
            this._template = createTemplate({ parentEl: this._div });
            this._template.templateID = this.props.templateId;
        }
    };

    componentDidMount() {
        if (!!this._template) {
            this._template.dataContext = this.props.dataContext;
        }
    }

    componentWillReceiveProps(nextProps: ITemplateProps) {
        if (!!this._template) {
            if (this.props.templateId !== nextProps.templateId) {
                this._template.templateID = nextProps.templateId;
            }
            if (this.props.dataContext !== nextProps.dataContext) {
                this._template.dataContext = nextProps.dataContext;
            }
        }

    }

    constructor(props) {
        super(props);
        this._div = null;
    }

    render(): JSX.Element {
        const setDiv = (element: HTMLDivElement | null) => {
            this._setDiv(element);
        };
        const style = this.props.style ? this.props.style : {};
        const css = this.props.css ? this.props.css : "";

        return <div className={css} style={style} ref={setDiv} />;
    }
}

export default Template;
