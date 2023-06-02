import { Col, Container, Row } from "react-bootstrap"

const ListDoctor = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-start">
                        <h2 className="text-carevul fw-bold">Rekomendasi Dokter</h2>
                        <p className="text-secondary">Pilih dokter yang sesuai dengan kebutuhan kamu yuk</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ListDoctor