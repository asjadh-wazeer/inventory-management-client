import React, {useState} from 'react';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button} from "react-bootstrap";

function Modalpop()
                 {
                    const[show,popup]=useState(false);
                    const modalOpen=() => popup(true);
                    const modalClose=() => popup(false);
                        return(
                            <div>
                                <Modal>
                                <Button variant="primary">Primary</Button>
                                    <Modal.body>
                                            <Sidebar />
                                    </Modal.body>
                                </Modal>
                            </div>
                            )

                    };

                    export default Modalpop;