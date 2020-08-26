import React from "react";

/* Bootstrap & FontAwesome */
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// Gallery & Array
import Gallery from "react-grid-gallery";
import arr from "../array.json";

export function ArtCafe(props) {
  let Art = arr.artcafe.map((obj) => ({
    key: obj.id,
    src: obj.src,
    thumbnail: obj.thumbnail,
    thumbnailWidth: obj.width,
    thumbnailHeight: obj.height,
    caption: obj.caption,
  }));

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onEnter={() =>
          (document.getElementById("html-doc").style.overflow = "hidden")
        }
        onExit={() =>
          (document.getElementById("html-doc").style.overflow = "scroll")
        }
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <a href="https://g.page/ArtCafeArad">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Art Cafe, Arad
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Gallery onClick={() => {}} backdropClosesModal={true} images={Art} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ borderRadius: 0 }}
            variant="outline-dark"
            onClick={props.onHide}
          >
            Închide
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function NukaCluj(props) {
  let Nuka = arr.nukacluj.map((obj) => ({
    key: obj.id,
    src: obj.src,
    thumbnail: obj.thumbnail,
    thumbnailWidth: obj.width,
    thumbnailHeight: obj.height,
    caption: obj.caption,
  }));

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onEnter={() =>
          (document.getElementById("html-doc").style.overflow = "hidden")
        }
        onExit={() =>
          (document.getElementById("html-doc").style.overflow = "scroll")
        }
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <a href="https://goo.gl/maps/cyTe8PdpbEYTNTqM6">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Nuka, Cluj-Napoca
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Gallery
            onClick={() => {}}
            backdropClosesModal={true}
            images={Nuka}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ borderRadius: 0 }}
            variant="outline-dark"
            onClick={props.onHide}
          >
            Închide
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function AtraPraova(props) {
  let Atra = arr.atraprahova.map((obj) => ({
    key: obj.id,
    src: obj.src,
    thumbnail: obj.thumbnail,
    thumbnailWidth: obj.width,
    thumbnailHeight: obj.height,
    caption: obj.caption,
  }));

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onEnter={() =>
          (document.getElementById("html-doc").style.overflow = "hidden")
        }
        onExit={() =>
          (document.getElementById("html-doc").style.overflow = "scroll")
        }
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <a href="https://g.page/atra-doftana-896">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Atra Doftana, Prahova
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Gallery
            onClick={() => {}}
            backdropClosesModal={true}
            images={Atra}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ borderRadius: 0 }}
            variant="outline-dark"
            onClick={props.onHide}
          >
            Închide
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function VinSibiu(props) {
  let Sibiu = arr.vinsibiu.map((obj) => ({
    key: obj.id,
    src: obj.src,
    thumbnail: obj.thumbnail,
    thumbnailWidth: obj.width,
    thumbnailHeight: obj.height,
    caption: obj.caption,
  }));

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onEnter={() =>
          (document.getElementById("html-doc").style.overflow = "hidden")
        }
        onExit={() =>
          (document.getElementById("html-doc").style.overflow = "scroll")
        }
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <a href="https://goo.gl/maps/YtWNfdetX7RYYmEx7">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Degustare vinuri, Sibiu
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Gallery
            onClick={() => {}}
            backdropClosesModal={true}
            images={Sibiu}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ borderRadius: 0 }}
            variant="outline-dark"
            onClick={props.onHide}
          >
            Închide
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}