// import React from 'react'

// const Day5_Bootstrap = () => {
//   return (
//     <>
//         <h1 className='text-primary'>Hello</h1>
//         <h1 className='bg-danger'>Hello</h1>
//     </>
//   )
// }

// export default Day5_Bootstrap

// import React from 'react'

// const Day5_Bootstrap = () => {
//   return (
//     <>
//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-4 col-md-6 col-12">
//                     <div className="card">
//                         <div className="card-header">
//                             <h3>Hello</h3>
//                         </div>
//                         <div className="card-body">
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, molestiae voluptas. Mollitia, officiis sapiente doloremque rerum necessitatibus provident sint architecto suscipit alias cum molestiae quo consectetur aut voluptas fugiat animi.</p>
//                         </div>
//                         <div className="card-footer">
//                             <button className='btn btn-primary'>Submit</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-12">
//                     <div className="card">
//                         <div className="card-header">
//                             <h3>Hello</h3>
//                         </div>
//                         <div className="card-body">
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, molestiae voluptas. Mollitia, officiis sapiente doloremque rerum necessitatibus provident sint architecto suscipit alias cum molestiae quo consectetur aut voluptas fugiat animi.</p>
//                         </div>
//                         <div className="card-footer">
//                             <button className='btn btn-primary'>Submit</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4">
//                     <div className="card">
//                         <div className="card-header">
//                             <h3>Hello</h3>
//                         </div>
//                         <div className="card-body">
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, molestiae voluptas. Mollitia, officiis sapiente doloremque rerum necessitatibus provident sint architecto suscipit alias cum molestiae quo consectetur aut voluptas fugiat animi.</p>
//                         </div>
//                         <div className="card-footer">
//                             <button className='btn btn-primary'>Submit</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Day5_Bootstrap

// REACT BOOTSTRAP PACKAGE 

// CARD

// import React from 'react'
// import { Container, Row, Col, Card } from 'react-bootstrap'

// const Day5_Bootstrap = () => {
//   return (
//     <>
//         <Container>
//             <Row>
//                 <Col lg={4} md={6}>
//                     <Card>
//                         <Card.Header>
//                             <h3>Title</h3>
//                         </Card.Header>
//                         <Card.Body>
//                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laudantium magnam vitae sunt voluptatem dolore cumque minima, iure itaque, repellendus autem similique tenetur dignissimos expedita optio dolor temporibus, error ullam.</p>
//                         </Card.Body>
//                         <Card.Footer>
//                             <button className='btn btn-primary'>Click</button>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col lg={4} md={6}>
//                     <Card>
//                         <Card.Header>
//                             <h3>Title</h3>
//                         </Card.Header>
//                         <Card.Body>
//                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laudantium magnam vitae sunt voluptatem dolore cumque minima, iure itaque, repellendus autem similique tenetur dignissimos expedita optio dolor temporibus, error ullam.</p>
//                         </Card.Body>
//                         <Card.Footer>
//                             <button className='btn btn-primary'>Click</button>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col lg={4} md={6}>
//                     <Card>
//                         <Card.Header>
//                             <h3>Title</h3>
//                         </Card.Header>
//                         <Card.Body>
//                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laudantium magnam vitae sunt voluptatem dolore cumque minima, iure itaque, repellendus autem similique tenetur dignissimos expedita optio dolor temporibus, error ullam.</p>
//                         </Card.Body>
//                         <Card.Footer>
//                             <button className='btn btn-primary'>Click</button>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     </>
//   )
// }

// export default Day5_Bootstrap

// MODAL 

// import React, { useState } from 'react'
// import { Modal } from 'react-bootstrap'

// const Day5_Bootstrap = () => {

//     var [ showModal, setShowModal ] = useState(false)

//     const openModalFun = () => {
//         setShowModal(true)
//     }

//     const closeModalFun = () => {
//         setShowModal(false)
//     }

//     return (
//         <>
//             <button className='btn btn-primary' onClick={openModalFun}>Click</button>

//             <Modal show={showModal}>
//                 <Modal.Header>
//                     <h3>Title</h3>
//                     <button className='btn-close' onClick={closeModalFun}></button>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe asperiores error enim! Reiciendis exercitationem expedita, voluptatibus inventore voluptatem at quidem quas et minima dolor adipisci, earum quia voluptatum odit quaerat.</p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <button className='btn btn-danger' onClick={closeModalFun}>Close</button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }

// export default Day5_Bootstrap

// OFF CANVAS 

// import React, { useState } from 'react'
// import { Offcanvas } from 'react-bootstrap'

// const Day5_Bootstrap = () => {

//     var [ showCanvas, setShowCanvas ] = useState(false)

//     const openCanvasFun = () => {
//         setShowCanvas(true)
//     }

//     const closeCanvasFun = () => {
//         setShowCanvas(false)
//     }

//     return (
//         <>
//             <button className='btn btn-primary' onClick={openCanvasFun}>Click</button>
//             <Offcanvas placement='end' show={showCanvas} className='w-75'>
//                 <Offcanvas.Header>  
//                     <h3>Title</h3>
//                     <button className='btn btn-close' onClick={closeCanvasFun}></button>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aut dolores beatae distinctio hic dolore quaerat recusandae facere? Aspernatur ab qui quia blanditiis deleniti nesciunt iure ut, officia magni sint?</p>
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     )
// }

// export default Day5_Bootstrap