"use client"
import { Button, Container, Dropdown, Image, Navbar } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import './AdminDashboard.css';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AdminNav from "./AdminNav";

const AdminDashboard = () => {
    const router = useRouter()
    const handleLogout = (event) => {
        event.preventDefault();
        toast('Logout successfully!')
        router.push('/')
    }
    return (
        <div className="py-5" data-aos="fade-up">
            <Container>
                <div className="d-flex text-start py-3">
                    <h3 className="text-capitalize"><span style={{ borderBottom: '2px solid #333' }}>Rahat</span> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}>your dahsboard</span></h3>
                </div>

                <div className="shadow p-3">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" className="tabone">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className="">Update informations</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className="">Profile settings</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four" className="">Booked events</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="five" className="">Booking history</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="six" className="">Notifications</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seven" className="" onClick={handleLogout}>Logout</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <AdminNav />
                                        <Form className="border-top py-3 shadow-sm p-3 rounded">
                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className="text-muted">Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" defaultValue="kazi rahat" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label className="text-muted">Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" defaultValue="gahgauhjag" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>

                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" defaultValue="dhaka, bangladesh" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label className="text-muted">City</Form.Label>
                                                    <Form.Control defaultValue="dhaka" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>
                                            <div className="py-3">
                                                <h4 className="text-secondary">Activities:</h4>
                                                <Table striped bordered responsive hover className="rounded shadow-sm">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-secondary">S/N</th>
                                                            <th className="text-secondary">Name</th>
                                                            <th className="text-secondary">Last login</th>
                                                            <th className="text-secondary">Profile Updated</th>
                                                            <th className="text-secondary">Notifications</th>
                                                            <th className="text-secondary">Total Comments</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-muted">1</td>
                                                            <td className="text-muted">Kazi Rahat</td>
                                                            <td className="text-muted">14/10/2024 10:34AM</td>
                                                            <td className="text-muted">14/10/2024 10:34AM</td>
                                                            <td className="text-muted">12</td>
                                                            <td className="text-muted">25</td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <AdminNav />
                                        <Form className="border-top py-2 shadow-sm p-3 rounded">
                                            <Form.Group className="mb-4 d-flex justify-content-center align-items-center flex-column">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Image src="/assets/user-1.png"
                                                    className="shadow"
                                                    style={{ width: '6rem', height: '6rem', objectFit: 'contain', }} />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className="text-muted">Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" defaultValue="kazi rahat" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label className="text-muted">Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" defaultValue="gahgauhjag" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>

                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" defaultValue="dhaka, bangladesh" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Form.Control type="file" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label className="text-muted">City</Form.Label>
                                                    <Form.Control defaultValue="dhaka" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>
                                            <Button className="btn_up" type="submit">
                                                Update
                                            </Button>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="third">
                                        <AdminNav />
                                        <Form className="border-top py-2 shadow-sm p-3 rounded">
                                            <Form.Group className="mb-4 d-flex justify-content-center align-items-center flex-column">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Image src="/assets/user-1.png"
                                                    className="shadow"
                                                    style={{ width: '6rem', height: '6rem', objectFit: 'contain', }} />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className="text-muted">Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" defaultValue="kazi rahat" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label className="text-muted">Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" defaultValue="gahgauhjag" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>

                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" defaultValue="dhaka, bangladesh" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Form.Control type="file" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label className="text-muted">City</Form.Label>
                                                    <Form.Control defaultValue="dhaka" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>
                                            <Button className="btn_up" type="submit">
                                                Update
                                            </Button>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="four">
                                        <AdminNav />
                                        <Table striped bordered responsive hover className="rounded shadow-sm mt-4">
                                            <thead>
                                                <tr>
                                                    <th className="text-secondary">S/N</th>
                                                    <th className="text-secondary">First Name</th>
                                                    <th className="text-secondary">Event Name</th>
                                                    <th className="text-secondary">Payment Status</th>
                                                    <th className="text-secondary">Start Date</th>
                                                    <th className="text-secondary">End Date</th>
                                                    <th className="text-secondary">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-muted">1</td>
                                                    <td className="text-muted">Kazi Rahat</td>
                                                    <td className="text-muted">Kaptai tour</td>
                                                    <td className="text-muted">
                                                        <Button className="btn_paid">half paid</Button>
                                                    </td>
                                                    <td className="text-muted">21/10/2023</td>
                                                    <td className="text-muted">25/10/2023</td>
                                                    <td>
                                                        <Button className="btn_up">Cancel</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-muted">1</td>
                                                    <td className="text-muted">Kazi Rahat</td>
                                                    <td className="text-muted">Kaptai tour</td>
                                                    <td className="text-muted">
                                                        <Button className="btn_unpaid">unpaid</Button>
                                                    </td>
                                                    <td className="text-muted">21/10/2023</td>
                                                    <td className="text-muted">25/10/2023</td>
                                                    <td>
                                                        <Button className="btn_up">Cancel</Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="five">
                                        <AdminNav />
                                        <Table striped bordered responsive hover className="rounded shadow-sm mt-4">
                                            <thead>
                                                <tr>
                                                    <th className="text-secondary">S/N</th>
                                                    <th className="text-secondary">First Name</th>
                                                    <th className="text-secondary">Event Name</th>
                                                    <th className="text-secondary">Payment Status</th>
                                                    <th className="text-secondary text-center">Payment method</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-muted">1</td>
                                                    <td className="text-muted">Kazi Rahat</td>
                                                    <td className="text-muted">Kaptai tour</td>
                                                    <td className="text-muted">
                                                        <Button className="btn_paid">half paid</Button>
                                                    </td>
                                                    <td className="text-muted text-center">
                                                        <Image src="/assets/bkash.png" style={{ width: '3.66rem', height: '3rem', objectFit: 'contain' }} />
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                        <AdminNav />
                                        <Table striped bordered responsive hover className="rounded shadow-sm mt-4">
                                            <thead>
                                                <tr>
                                                    <th className="text-secondary">S/N</th>
                                                    <th className="text-secondary">First Name</th>
                                                    <th className="text-secondary">Event Name</th>
                                                    <th className="text-secondary">Payment Status</th>
                                                    <th className="text-secondary text-center">Payment method</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-muted">1</td>
                                                    <td className="text-muted">Kazi Rahat</td>
                                                    <td className="text-muted">Kaptai tour</td>
                                                    <td className="text-muted">
                                                        <Button className="btn_paid">half paid</Button>
                                                    </td>
                                                    <td className="text-muted text-center">
                                                        <Image src="/assets/bkash.png" style={{ width: '3.66rem', height: '3rem', objectFit: 'contain' }} />
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    <ToastContainer />
                </div>
            </Container>
        </div>
    )
}

export default AdminDashboard  