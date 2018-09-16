import React from 'react';
import posed from 'react-pose';
import styled from "styled-components";

class ZoomImg extends React.Component {
    state = { isZoomed: false };

    zoomIn() {
        window.addEventListener('scroll', this.zoomOut);
        this.setState({ isZoomed: true });
    }

    zoomOut = () => {
        window.removeEventListener('scroll', this.zoomOut);
        this.setState({ isZoomed: false });
    };

    toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());

    render() {
        const { isZoomed } = this.state;
        const { imageWidth, imageHeight, ...props } = this.props;
        const pose = isZoomed ? 'zoom' : 'init';

        return (
            <div
                style={{ width: imageWidth, height: imageHeight }}
                onClick={this.toggleZoom}
            >
                <StyledFrame pose={pose} className="frame" />
                <StyledImage pose={pose} {...props} />
            </div>
        );
    }
}

export default ZoomImg;

const Frame = posed.div({
    init: {
        applyAtEnd: { display: 'none' },
        opacity: 0
    },
    zoom: {
        applyAtStart: { display: 'block' },
        opacity: 1
    }
});

const StyledFrame = styled(Frame)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background: white;
  transform: translateZ(0);
`;

const transition = {
    duration: 400,
    ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = posed.img({
    init: {
        position: 'static',
        width: '100%',
        height: 'auto',
        transition,
        flip: true
    },
    zoom: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition,
        flip: true
    }
});

const StyledImage = styled(Image)`
  cursor: zoom-in;
`;
