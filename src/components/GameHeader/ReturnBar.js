const ReturnBar = ({title}) => (
    <nav className="header"><a onClick={()=>history.go(-1)}> <i className="material-icons">arrow_back</i></a>{title}</nav>
);

export default ReturnBar;