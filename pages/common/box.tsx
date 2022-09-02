const Box = ({ content, height, width, backgroundColor, color }: StaticBoxTypes) => {
    const boxStyle = {
        height: height || '200px',
        width: width || '200px',
        backgroundColor: backgroundColor || 'hotpink',
        color: color || '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (<span style={boxStyle}>{content || "Hi!"}</span>)
}

export default Box;

export interface StaticBoxTypes {
    content?: any;
    height?: string | number;
    width?: string | number;
    backgroundColor?: string;
    color?: string;
}
