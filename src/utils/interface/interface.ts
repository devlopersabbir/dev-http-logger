import EPurpose from "../enums/enums";

interface LogListenOptions {
  origin?: boolean;
  purpose?: EPurpose;
  showHeader?: boolean;
}

export default LogListenOptions;
