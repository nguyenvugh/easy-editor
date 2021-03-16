
function Tools() {

  function execCommand(element, cmd) {
    document.execCommand(cmd);
  }



  const toolsStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '5px',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 255)'
  };

  const toolStyle = {
    margin: '5px',
    cursor: 'pointer'
  };
  return (
    <div style={toolsStyle}>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'bold')}><i className="fas fa-bold"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'italic')}><i className="fas fa-italic"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'underline')}><i className="fas fa-underline"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'strikeThrough')}><i className="fas fa-strikethrough"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'superscript')}><i className="fas fa-superscript"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'subscript')}><i className="fas fa-subscript"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'justifyLeft')}><i className="fas fa-align-left"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'justifyCenter')}><i className="fas fa-align-center"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'justifyRight')}><i className="fas fa-align-right"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'justify')}><i className="fas fa-align-justify"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'link')}><i className="fas fa-link"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'image')}><i className="fas fa-images"></i></button>
      <button style={toolStyle} onClick={(e) => execCommand(e, 'foreColor')}><i className="fas fa-paint-brush"></i></button>
    </div>
  );
}

export default Tools;
