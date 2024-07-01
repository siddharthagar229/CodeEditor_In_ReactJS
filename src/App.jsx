
import SimpleEditor from './components/SimpleEditor'                // importing    SimpleEditor    component
import SimpleEditorHeading from './components/SimpleEditorHeading'      // importing     SimpleEditorHeading     component
import ReactEditorHeading from './components/ReactEditorHeading'      // importing     ReactEditorHeading    component
import ReactEditor from './components/ReactEditor'                   // importing     ReactEditor      component


function App() {

  return (
    <>
      <div >

        <div style={{ marginBottom: "70px" }}>
          <SimpleEditorHeading />      {/* this is   SimpleEditorHeading    component  */}
          <SimpleEditor />             {/* this is   SimpleEditor    component =>  this is created using PrismJS and HTML Textarea element */}
        </div>


        <div >
          <ReactEditorHeading />         {/*  this is     ReactEditorHeading    component   */}
          <ReactEditor />              {/*     this is     ReactEditor     component  =>  this is created using PrismJS and Editor given by react using "react-simple-code-editor" */}
        </div>

      </div>
    </>
  )
}

export default App
