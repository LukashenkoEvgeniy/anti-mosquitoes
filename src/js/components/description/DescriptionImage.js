import React from 'react';
import styled from 'styled-components'
import posed from 'react-pose';

import desc_1 from '../../../static/img/desc_1.JPG';
import desc_2 from '../../../static/img/desc_2.JPG';
import desc_3 from '../../../static/img/desc_3.JPG';
import ZoomImg from "../../common/ZoomImg";

export default class DescriptionImage extends React.Component{

    state = {isZoomed: false };

    render() {
        const { isZoomed } = this.state;
        const pose = isZoomed ? 'zoomedIn' : 'zoomedOut';
        return (
            <ImageWrapper>
                <ZoomImg
                    imageWidth={600}
                    imageHeight={400}
                    src={desc_1}
                />
                 <ZoomImg
                    imageWidth={600}
                    imageHeight={400}
                    src={desc_2}
                />
                 <ZoomImg
                    imageWidth={600}
                    imageHeight={400}
                    src={desc_3}
                />

            </ImageWrapper>
        )
    }
}

const ImageWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
    }
    img {
     
    }
 `;
const Image = posed.img({
    zoomedIn: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        flip: true
    },
    zoomedOut: {
        position: 'static',
        width: 'auto',
        height: 'auto',
        flip: true
    }
});

const StyledImage = styled(Image)`
    width: 80%;
`;
