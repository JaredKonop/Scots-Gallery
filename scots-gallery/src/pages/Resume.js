import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../assets/Resume.pdf";
import "../styles/styles.css";

// Ensure the correct worker is being used
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const getScaleValue = () => {
    if (width > 1200) {
      return 1.7;
    } else if (width > 992) {
      return 1.5;
    } else if (width > 790) {
      return 1.2;
    } else if (width > 650) {
      return 1;
    } else if (width > 580) {
      return 0.9;
    } else if (width > 480) {
      return 0.7;
    } else {
      return 0.6;
    }
  };

  return (
    <div className="resume-container">
      <Container fluid className="resume-section content">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download My Resume
          </Button>
        </Row>
        <div className="pdf-container">
          <Document
            file={pdf}
            renderMode="canvas"
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) =>
              console.error("Error loading document:", error)
            }
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={getScaleValue()}
              />
            ))}
          </Document>
        </div>
      </Container>
    </div>
  );
}

export default Resume;
