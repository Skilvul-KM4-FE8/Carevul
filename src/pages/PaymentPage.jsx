import { Col, Container, Row } from "react-bootstrap"
import Calendar from "../components/Calendar"

const PaymentPage = () => {
    return (
        <>
            <h1>Payment Page</h1>
            <Container>
                <Row>
                    <Col>
                        <h1>Testttt</h1>
                        <Calendar />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PaymentPage