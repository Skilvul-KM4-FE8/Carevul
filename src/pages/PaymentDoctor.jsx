import { LocalizationProvider } from "@mui/x-date-pickers";
import { Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";

import { Link } from "react-router-dom";

const PaymentDoctor = () => {
  return (
    <>
      <h1>Payment Doctor</h1>
      <Container>
        <Row>
          <Col>
            {/* <LocalizationProvider dateAdapter={AdapterMoment}>
                            {children}
                        </LocalizationProvider>
                        <Calendar /> */}
            <Calendar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentDoctor;
