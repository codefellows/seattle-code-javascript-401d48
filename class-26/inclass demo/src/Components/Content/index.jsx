import './style.css'

const Content = (props) => {

  let { changeTitle } = props;

  return (
    <>
      <h3>You can make changes to the document!</h3>

      <button data-testid="content-button" onClick={() => changeTitle('It WORKED!')}>
        Change Title
      </button>
    </>
  )
}

export default Content;
