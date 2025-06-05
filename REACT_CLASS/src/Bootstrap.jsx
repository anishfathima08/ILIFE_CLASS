// CARD, MODAL, OFFCANVAS

// CARD

    // import React from 'react'
    // import { Row, Col, Card, CardBody, CardFooter, CardHeader, Container, Button } from 'react-bootstrap'

    // const Bootstrap = () => {
    //   return (
    //     <>
    //         <Container>
    //             <Row>
    //                 <Col lg={3} md={6}>
    //                     <Card>
    //                         <CardHeader>
    //                             <h1>Title</h1>
    //                         </CardHeader>
    //                         <CardBody>
    //                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perspiciatis voluptatibus, adipisci commodi est sapiente saepe nemo iusto sit possimus unde laboriosam tempora eos eligendi dicta corporis atque magni. Cupiditate exercitationem sunt praesentium culpa eligendi illum ut quibusdam velit quas accusantium odit, architecto ipsum dolor iusto iste repellat, magnam eos.</p>
    //                         </CardBody>
    //                         <CardFooter>
    //                             <Button className='btn btn-primary float-end'>Click</Button>
    //                         </CardFooter>
    //                     </Card>
    //                 </Col>
    //                 <Col lg={3} md={6}>
    //                     <Card>
    //                         <CardHeader>
    //                             <h1>Title</h1>
    //                         </CardHeader>
    //                         <CardBody>
    //                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perspiciatis voluptatibus, adipisci commodi est sapiente saepe nemo iusto sit possimus unde laboriosam tempora eos eligendi dicta corporis atque magni. Cupiditate exercitationem sunt praesentium culpa eligendi illum ut quibusdam velit quas accusantium odit, architecto ipsum dolor iusto iste repellat, magnam eos.</p>
    //                         </CardBody>
    //                         <CardFooter>
    //                             <Button className='btn btn-primary float-end'>Click</Button>
    //                         </CardFooter>
    //                     </Card>
    //                 </Col>
    //                 <Col lg={3} md={6}>
    //                     <Card>
    //                         <CardHeader>
    //                             <h1>Title</h1>
    //                         </CardHeader>
    //                         <CardBody>
    //                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perspiciatis voluptatibus, adipisci commodi est sapiente saepe nemo iusto sit possimus unde laboriosam tempora eos eligendi dicta corporis atque magni. Cupiditate exercitationem sunt praesentium culpa eligendi illum ut quibusdam velit quas accusantium odit, architecto ipsum dolor iusto iste repellat, magnam eos.</p>
    //                         </CardBody>
    //                         <CardFooter>
    //                             <Button className='btn btn-primary float-end'>Click</Button>
    //                         </CardFooter>
    //                     </Card>
    //                 </Col>
    //                 <Col lg={3} md={6}>
    //                     <Card>
    //                         <CardHeader>
    //                             <h1>Title</h1>
    //                         </CardHeader>
    //                         <CardBody>
    //                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perspiciatis voluptatibus, adipisci commodi est sapiente saepe nemo iusto sit possimus unde laboriosam tempora eos eligendi dicta corporis atque magni. Cupiditate exercitationem sunt praesentium culpa eligendi illum ut quibusdam velit quas accusantium odit, architecto ipsum dolor iusto iste repellat, magnam eos.</p>
    //                         </CardBody>
    //                         <CardFooter>
    //                             <Button className='btn btn-primary float-end'>Click</Button>
    //                         </CardFooter>
    //                     </Card>
    //                 </Col>
    //             </Row>
    //         </Container>
    //     </>
    //   )
    // }

    // export default Bootstrap


// MODAL

    // import React, { useState } from 'react'
    // import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'

    // const Bootstrap = () => {

    //     var [ modal, setModal ] = useState(false)

    //     const closeFun = () => {
    //         setModal(false)
    //     }

    //     const openFun = () => {
    //         setModal(true)
    //     }

    //     return (
    //         <>
    //             <Container>
    //                 <Button onClick={openFun}>Modal Click</Button>
    //                 <Modal show={modal}>
    //                     <ModalHeader>
    //                         <h1>Login</h1>
    //                         <Button className='btn-close btn-danger' onClick={closeFun}></Button>
    //                     </ModalHeader>
    //                     <ModalBody>
    //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque tempore corrupti culpa deserunt eos unde debitis voluptatem. Ipsa possimus eaque ab explicabo praesentium neque voluptatibus quos distinctio dolorum esse magnam tempore aliquid modi nesciunt odit mollitia, ratione dolorem quas aspernatur sint, eius porro ea! Repellat doloribus dolorem sequi tempore.</p>
    //                     </ModalBody>
    //                     <ModalFooter>
    //                         <Button className='btn btn-primary'>Submit</Button>
    //                     </ModalFooter>
    //                 </Modal>
    //             </Container>
    //         </>
    //     )
    // }

    // export default Bootstrap

// OFFCANVAS

    // import React, { useState } from 'react'
    // import { Button, Container, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap'

    // const Bootstrap = () => {

    //     var [ canvas, setCanvas ] = useState(false)

    //     const openFun = () => {
    //         setCanvas(true)
    //     }

    //     const closeFun = () => {
    //         setCanvas(false)
    //     }

    //     return (
    //         <>
    //             <Container>
    //                 <Button onClick={openFun} >Click</Button>
    //                 <Offcanvas show={canvas} placement="end">
    //                     <OffcanvasHeader>
    //                         <h4>Title</h4>
    //                         <Button className='btn btn-close btn-danger' onClick={closeFun}></Button>
    //                     </OffcanvasHeader>
    //                     <OffcanvasBody>
    //                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat incidunt in iste nulla accusantium sequi aliquam sunt alias ad voluptatem odit commodi error dolores repellat ab neque eius quibusdam ut quisquam vel necessitatibus explicabo, officiis animi adipisci! Consectetur exercitationem, dolor perferendis doloribus voluptatibus vel corporis minima voluptatem ipsa fugit. Velit.</p>
    //                     </OffcanvasBody>
    //                 </Offcanvas>
    //             </Container>
    //         </>
    //     )
    // }

    // export default Bootstrap