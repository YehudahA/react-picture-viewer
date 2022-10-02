import * as React from 'react';
import Draggable from 'react-draggable';

export default class PictureDialog extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { scale: 1 };
  }

  scale(units: number) {
    const scale: number = this.state['scale'];
    this.setState({
      scale: scale + units / 100,
      offsetX: 0,
      offsetY: 0,
    });
  }

  onDragStart(ev: React.DragEvent<HTMLImageElement>) {
    const rect = (ev.target as any).getBoundingClientRect();

    const offsetX = ev.clientX - rect.x;
    const offsetY = ev.clientY - rect.y;

    this.setState({
      offsetX,
      offsetY,
    });
  }

  drop_handler(ev) {
    console.log(ev);
  }

  render() {
    return (
      <div className="img-wrapper">
        <Draggable>
          <div className="img-drag-wrapper">
            <img
              src={this.props['url']}
              className="popup-img"
              style={{
                transform: `scale(${this.state['scale']})`,
                transformOrigin: 'center',
              }}
              draggable="true"
              onDragStart={(e) => this.onDragStart(e)}
              onDragEnd={(e) => this.drop_handler(e)}
            />
          </div>
        </Draggable>
        <div className="img-zoom-cmds">
          <button className="img-zoom-btn" onClick={() => this.scale(10)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" />
              <path
                d="
            M 6,12 
            L 18,12
            M 12,6
            L 12,18
            "
              />
            </svg>
          </button>

          <button className="img-zoom-btn" onClick={() => this.scale(-10)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" />
              <path
                d="
            M 6,12 
            L 18,12
            "
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
