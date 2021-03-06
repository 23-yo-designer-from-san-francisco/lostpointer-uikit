export abstract class Component<TProps> {
    protected props: TProps;

    constructor(props?: TProps) {
        this.props = { ...props };
    }

    abstract render(): void;

    getProps(): TProps {
        return this.props;
    }
}
