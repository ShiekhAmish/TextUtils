import React,{useState} from 'react'

export default function TextForm(props) {

    const HandleUpClick =()=>
        {
            console.log("Upper Case Click");
            let newtext = text.toUpperCase();
            setText(newtext);
            props.showAlert("Convert to Upper Case Successfully","success");
        }
        const HandleExtraSpaces =()=>
        {
            
            let newText = text.split(/[ ]+/);
		setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces Successfully","success");
        }
        const HandleLowClick =()=>
        {
            console.log("Lower Case Click");
            let newtext = text.toLowerCase();
            setText(newtext);
            props.showAlert("Convert to Lower Case Successfully","success");
        }
        const HandleCopy =()=>
        {
            
            var text = document.getElementById("MyText");
		text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text Copied Successfully","success");
        }
        const HandleClearClick =()=>
        {
            
            let newtext = '';
            setText(newtext);
            props.showAlert("Cleared Successfully..!","success");
        }
        const HandleOnChange =(event)=>
        {
            console.log("On Change Click");
            setText(event.target.value);
        }
    const [text, setText] = useState("");

  return (
    <>
    <div className='container'style={{color: props.mode=== 'light' ? 'black':'white'}}>
   
   <div className="container">
   <div className="mb-3">
     <label htmlfor="MyText" className="form-label">{props.heading}</label>
     <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode=== 'light' ? 'white':'grey', color: props.mode=== 'light' ? 'black':'white'}} id="MyText" rows="10"></textarea>
   </div>
   <button className="btn btn-primary mx-1" onClick={HandleUpClick}>
       Convert Upper Case
   </button>

   <button className="btn btn-primary mx-1" onClick={HandleLowClick}>
       Convert Lower Case
   </button>
   <button className="btn btn-primary mx-1" onClick={HandleClearClick}>
       Clear
   </button>
   <button className="btn btn-primary mx-1" onClick={HandleCopy}>
       Copy
   </button>
   <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces}>
       Set Spaces
   </button>
   </div>
       </div>
       <div className="container my-3" style={{color: props.mode=== 'light' ? 'black':'white'}}>
        <h2>Your Text Summary:</h2>
        <p>{text.split(" ").length} words and {text.length} charecters..</p>
        <p>{0.008 * text.split(" ").length} Minutes Read..</p>
        <h2>Preview:</h2>
        <p>{text.length>0? text: "Enter Some Text in the textbox to Preview here"}</p>
       </div>
    </>
  )
}
