// Use generics and interfaces to fix the type issue in the following classes:

interface Props {
  title: string;
}

class Component<T extends Props> {
  constructor(public props: T) {}
}

class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
