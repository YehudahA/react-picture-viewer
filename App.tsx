import * as React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import PictureDialog from './PictureDialog';

export default class App extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { shopPopup: false, pictureUrl: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    this.setState({ pictureUrl: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setModal(true);
  }

  setModal(state: boolean) {
    this.setState({ shopPopup: state });
  }

  render() {
    return (
      <main>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="url">Set Url:</Form.Label>
            <Form.Control
              id="url"
              placeholder="Picture Url"
              type="url"
              value={this.state['pictureUrl']}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Button type="submit">Show Picture</Button>
          </Form.Group>
        </Form>

        <Modal
          show={this.state['shopPopup']}
          onHide={() => this.setModal(false)}
          dialogClassName="modal-50"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Try Zoop Picture
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PictureDialog {...{ url: this.state['pictureUrl'] }} />
          </Modal.Body>
        </Modal>
      </main>
    );
  }
}
