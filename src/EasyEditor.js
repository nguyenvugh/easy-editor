import Tools from './components/Tools/Tools';
import {htmlToText} from 'html-to-text';

function EasyEditor(props) {

  function onChange(e) {
    const element = e.target;
    props.onChange?.(element.innerHTML, htmlToText(element.innerHTML, props?.toTextOptions));
  }

  const editorStyle = {
    width: '100%',
    height: '500px',
    padding: '10px',
    boxSizing: 'border-box',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 255)'
  };

  return (
    <div>
      <div>
        <Tools/>
      </div>
      <div
        style={editorStyle}
        className="editor"
        contentEditable="true"
        onKeyDown={(e) => onChange(e)}
      ></div>
    </div>
  );
}

export default EasyEditor;
