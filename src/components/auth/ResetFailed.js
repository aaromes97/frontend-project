import Button from '../common/Button';
import { Link } from 'react-router-dom';

export const ResetFailed = () => (
    <div style={{ textAlign: 'center', display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <p>Vaya, parece que el token para restablecer la contraseña es inválido...</p>
        <Button as={Link} to="/login" variant="primary">
            Volver al Login
        </Button>
    </div>
);