import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Constants/Baseurl';
import { Modal } from 'react-bootstrap';
import ViewSingleAlert from '../../RescueTeam/Alerts/ViewSingleAlert';

function Userviewallalert() {
    const [alerts, setAlerts] = useState([]);
    const [district, setDistrict] = useState("Thiruvananthapuram");

    useEffect(() => {
        if (district) {
            axiosInstance.post(`viewemergencyforallusers/${district}`)
                .then((res) => {
                    console.log(res);
                    setAlerts(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [district]);

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    };

    const [show, setShow] = useState(false);
    const [openRequests, setOpenRequests] = useState(false);
    const [selectedId, setSelectedId] = useState({ rescueId: null}); // State for storing selected job and customer IDs
    const handleClose = () => setShow(false);
    const handleShow = (rescueId) => {
    setSelectedId(rescueId);
    setShow(true);
    };

    return (
        <div className=''>
            <div className="adminmaindash-container">
                <div className="admindash-viewalert col-12">
                    <div className="admindash-shrink">Emergency Alerts</div>
                    <div className="admindash-shrink user-viewallalerts-select">
                        <select onChange={handleDistrictChange} value={district}>
                            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                            <option value="Kollam">Kollam</option>
                            <option value="Pathanamthitta">Pathanamthitta</option>
                            <option value="Alappuzha">Alappuzha</option>
                            <option value="Kottayam">Kottayam</option>
                            <option value="Idukki">Idukki</option>
                            <option value="Ernakulam">Ernakulam</option>
                            <option value="Thrissur">Thrissur</option>
                            <option value="Palakkad">Palakkad</option>
                            <option value="Malappuram">Malappuram</option>
                            <option value="Kozhikode">Kozhikode</option>
                            <option value="Wayanad">Wayanad</option>
                            <option value="Kannur">Kannur</option>
                            <option value="Kasargod">Kasargod</option>
                        </select>
                    </div>

                    <div className="row d-flex">
                        {alerts && alerts.length ? (
                            alerts.slice().reverse().map((alert, index) => (
                                <div className="col-3" key={index}>
                                    <div className="admin-alert-boxinside">
                                        <div className="admin-alert-content">
                                            <p>{alert?.title} <span style={{ justifyContent: "end" }}>{new Date(alert.date).toLocaleDateString()}</span></p>
                                            <p>Time: {new Date(alert.date).toLocaleTimeString()}</p>
                                            <p>Reported By: {alert?.userid?.name}</p>
                                            <p>Location: {alert?.district}</p>
                                            <p>Security Level: <span>{alert?.securitylevel}</span></p>
                                        </div>
                                        <button onClick={()=>handleShow(alert?._id)} style={{border:'none'}}>
                                        <div className="viewmore-dashbox viewmore-btnbgrd"><p>View More</p></div></button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ color: "red", fontSize: "20px" }}>No Alerts Available</div>
                        )}
                    </div>
                </div>
                {/* <Modal show={show} onHide={handleClose} centered>
                    <div className='modal-use-postjob'>
                        <Acptrjtreq close={handleClose} alertId={selectedAlertId} />
                    </div>
                </Modal> */}

<Modal show={show} onHide={handleClose} centered>
                <div className='modal-use-postjob'>
                    <ViewSingleAlert close={handleClose}  alertId={selectedId} />
                </div>
            </Modal>

            </div>
        </div>
    );
}

export default Userviewallalert;
