type MessageProps = {
    text: string;
    color?: string;
}
function Message(props: MessageProps){
//function Message(props: {text: string, color?: string})
//function Message(props: any){
const {text,color} = props;  //destructuring
    console.log("Message props :", props)
return(
    <div>
        <h4 style={{color: color}}>Message : {text}</h4>
        <p>This is a function component</p>
        <p>Generated at {new Date().toLocaleString()}</p>
    </div>
);
}
export default Message;