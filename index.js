marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

function App(){
  const [text, setText] = React.useState(`
  Normal Text
  # Heading
  ## Heading2

  >Block quotes!

  **Bold**

  [Visit my Web](https://alejandrocampos.com)

  - List item 1
  - List item 2
  - List item 3

  \`<div></div>\`

  \`\`\`
  let a = 1;
  let b = 2;
  let c = a + b;
  \`\`\`

  ![react](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
  `);

  return(
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center m-4">Markdown Previewer</h1>
          <div className="col-6">
              <h5 className="text-center">Enter your markdown:</h5>
              <textarea 
              id="editor" 
              onChange={(event) => {setText(event.target.value)}} 
              value={text} 
              className="form-control"
              ></textarea>
          </div>
          <div className="col-6">
            <h5 className="text-center">Here the result:</h5>
            <Preview markdown={text} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, {renderer: renderer}),
      }}
      id="preview"
      className="col-6 rounded"
    ></div>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'))