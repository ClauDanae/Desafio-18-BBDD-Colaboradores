import Button from 'react-bootstrap/Button';
const Boton = (props) => {
    
    return (
        <Button disabled={props.disabled} type="submit">{props.label}</Button>
    )
}
export default Boton