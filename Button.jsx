// function printHello(){
//     console.log("hello");
// };

function HandleClick(event){
    console.log("Bye!");
    console.log(event);
};

function HandleMouseOver(){
    console.log("hii!");
};
function HandleDoubleClick(){
    console.log("double!");
};



export default function Button(){
    return (
        <div>
           <button onClick={HandleClick}>Click me</button>
           <p onMouseOver={HandleMouseOver}>this is my first event</p>
           <button onDoubleClick={HandleDoubleClick}>double Click</button>
       </div>
    );

};