import React from 'react';
import Slider from './slider'
import Navbars from './navbar'
import { Container} from 'reactstrap';
export default class Home extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Container>
                <Navbars />
                <Slider />
           </Container>

        )
    }
}