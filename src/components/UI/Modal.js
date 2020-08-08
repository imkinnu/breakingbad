import React from 'react'
import Row from './../UI/Row/Row';
import Col from './../UI/Col/Col';
import Card from './../UI/Card/Card';
import Cardbody from './../UI/Card/Cardbody/Cardbody';
import Cardheader from './../UI/Cardheader/Cardheader';
import Image from './../UI/Image/Image';

const Modal = ({ item }) => {
    return (
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
            aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <Row className="">
                        <Col className="lg-12">
                            <Card className="vh-70">
                                <Cardheader className="bg-dark text-white">
                                    <Row>
                                        <Col className="lg-6">
                                            <h6>
                                                {item.name}
                                            </h6>
                                        </Col>
                                        <Col className="lg-2 offset-lg-4 d-flex justify-content-end">
                                            <button type="button" class="close d-inline" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </Col>
                                    </Row>
                                </Cardheader>
                                <Cardbody className="bg-wrapper">
                                    <Row className="">
                                        <Col className="lg-3">
                                            <Image source={item.img} className="card-img-top" name={item.name} height="" width="" />
                                        </Col>
                                        <Col className="lg-9 mt-3">
                                            <p className="text-white font-weight-bold">Birthday :<label className="ml-3">{item.birthday}</label></p>
                                            <p className="text-white font-weight-bold">Occupation :<label className="ml-3">{item.occupation}</label></p>
                                            <p className="text-white font-weight-bold">Status :<label className="ml-3">{item.status}</label></p>
                                            <p className="text-white font-weight-bold">Nickname :<label className="ml-3">{item.nickname}</label></p>
                                            <p className="text-white font-weight-bold">Appearance :<label className="ml-3">{item.appearance}</label></p>
                                            <p className="text-white font-weight-bold">Actor Name :<label className="ml-3">{item.portrayed}</label></p>
                                        </Col>
                                    </Row>
                                </Cardbody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Modal
