import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const drawBranches = (context, startX, startY, trunkWidth, level) => {
  if (level < 12) {
    var changeX = 100 / (level + 1);
    var changeY = 200 / (level + 1);

    var topRightX = startX + Math.random() * changeX;
    var topRightY = startY - Math.random() * changeY;

    var topLeftX = startX - Math.random() * changeX;
    var topLeftY = startY - Math.random() * changeY;
    // draw right branch
    context.beginPath();
    context.moveTo(startX + trunkWidth / 4, startY);
    context.quadraticCurveTo(
      startX + trunkWidth / 4,
      startY - trunkWidth,
      topRightX,
      topRightY
    );
    context.lineWidth = trunkWidth;
    context.lineCap = "round";
    context.stroke();

    // draw left branch
    context.beginPath();
    context.moveTo(startX - trunkWidth / 4, startY);
    context.quadraticCurveTo(
      startX - trunkWidth / 4,
      startY - trunkWidth,
      topLeftX,
      topLeftY
    );
    context.lineWidth = trunkWidth;
    context.lineCap = "round";
    context.stroke();

    drawBranches(context, topRightX, topRightY, trunkWidth * 0.7, level + 1);
    drawBranches(context, topLeftX, topLeftY, trunkWidth * 0.7, level + 1);
  }
};

class GameCanvas extends React.Component {
  state = {
    initialized: false
  };

  componentDidMount() {
    const { canvas, container } = this;

    if (!canvas) {
      return;
    }

    const { initialized } = this.state;

    if (!initialized) {
      const width = container.clientWidth;
      const height = container.clientHeight;

      canvas.width = width;
      canvas.height = height;
    }

    const context = canvas.getContext("2d");
    drawBranches(context, canvas.width / 2, canvas.height, 10, 4);
  }

  render() {
    return (
      <Container
        ref={el => {
          this.container = el;
        }}
      >
        <Canvas
          ref={el => {
            this.canvas = el;
          }}
        >
          You need to update your browser to play this Game.
        </Canvas>
      </Container>
    );
  }
}

export default GameCanvas;
