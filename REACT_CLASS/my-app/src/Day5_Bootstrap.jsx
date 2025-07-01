// BOOTSTRAP

// import React from 'react'

// const Day5_Bootstrap = () => {
//     return (
//         <>  
//             <h1 className='text-primary'>Hello</h1>
//             <h1 className='bg-danger'>Hello</h1>
//         </>
//     )
// }

// export default Day5_Bootstrap

// import React from 'react'

// const Day5_Bootstrap = () => {
//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-4">
//                         <div className='card'>
//                             <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" />
//                             <div className="card-body">
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora deleniti, expedita ullam beatae impedit aliquam nemo placeat ea architecto, alias eaque, nulla nisi aliquid rem dolor minus voluptate explicabo!</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-4">
//                         <div className='card'>
//                             <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" />
//                             <div className="card-body">
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora deleniti, expedita ullam beatae impedit aliquam nemo placeat ea architecto, alias eaque, nulla nisi aliquid rem dolor minus voluptate explicabo!</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-4">
//                         <div className='card'>
//                             <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" />
//                             <div className="card-body">
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora deleniti, expedita ullam beatae impedit aliquam nemo placeat ea architecto, alias eaque, nulla nisi aliquid rem dolor minus voluptate explicabo!</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Day5_Bootstrap

// REACT BOOTSTRAP PACKAGE 

import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Day5_Bootstrap = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Card>
                            <Card.Header>
                                <h3>Title</h3>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ut. Provident vitae sint impedit dicta incidunt consequuntur quisquam beatae ipsa nostrum aut voluptates, deserunt, ea aliquam aspernatur eligendi velit minus quaerat rem doloremque magnam nemo. Tempore molestiae facere aliquam qui.</p>
                            </Card.Body>
                            <Card.Footer>
                                <button className='btn btn-primary'>Submit</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Header>
                                <h3>Title</h3>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ut. Provident vitae sint impedit dicta incidunt consequuntur quisquam beatae ipsa nostrum aut voluptates, deserunt, ea aliquam aspernatur eligendi velit minus quaerat rem doloremque magnam nemo. Tempore molestiae facere aliquam qui.</p>
                            </Card.Body>
                            <Card.Footer>
                                <button className='btn btn-primary'>Submit</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Header>
                                <h3>Title</h3>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ut. Provident vitae sint impedit dicta incidunt consequuntur quisquam beatae ipsa nostrum aut voluptates, deserunt, ea aliquam aspernatur eligendi velit minus quaerat rem doloremque magnam nemo. Tempore molestiae facere aliquam qui.</p>
                            </Card.Body>
                            <Card.Footer>
                                <button className='btn btn-primary'>Submit</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Day5_Bootstrap