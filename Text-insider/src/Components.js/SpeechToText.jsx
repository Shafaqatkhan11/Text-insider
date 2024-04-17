
import { Button } from 'react-bootstrap';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText =(props)=>{
  const{ transcript,startListening,resetTranscript,browserSupportsSpeechRecognition} = useSpeechRecognition();
    
     
     const reset=()=>{
      resetTranscript()
     }
  const handleListen = () => {
    if (SpeechRecognition.browserSupportsSpeechRecognition()) {
      SpeechRecognition.startListening({continuous:true});
    } else {
      alert("Your browser doesn't support speech recognition. Please use a different browser.");
    }
  };

  return (
    <div>
    
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"20px", borderBlockStyle:"5px",}}> 
      <textarea 
      placeholder='Please Try to speak ..... '
          style={{ paddingLeft:"20px ",
            width:"50%   ", height:120,
            backgroundColor: props.mode === "dark" ? "#4D3436" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          id="mybox"
          rows="7"
          value={transcript}
        >

        </textarea>

        <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"20px", borderBlockStyle:"5px",}}> 
       <div>
       <Button onClick={handleListen}>Start listen</Button>
   
       </div>
       <div style={{margin:10,}}>
       <Button variant="danger" onClick={reset}>Reset listen</Button>
    
       
       </div>



          </div>
   
      </div>
      </div>
    </div>
  );
};

export default SpeechToText;