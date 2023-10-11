import { Spinner } from "react-bootstrap";


const Loader = () => {
  return (
    <Spinner
    animation="border"
    role="status"
    styles={{
        width: "400px",
        height: "400px",
        margin: "auto",
        display: "block"
    }}
    >

    </Spinner>
  )
}

export default Loader