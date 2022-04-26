import React from "react";
import PropTypes from 'prop-types';
import { Zone } from "./DropZone.style";

const DropZone = (props) => {
    const { testId } = props;
    const handleFiles = (files) => console.log(files);
    const onDrop = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const dataTransfer = e.dataTransfer;
        const files = dataTransfer.files;
        handleFiles(files);
    };
    const zoneHandlers = {
        onDragEnter: (e) => { e.stopPropagation(); e.preventDefault(); },
        onDragOver: (e) => { e.stopPropagation(); e.preventDefault(); },
        onDrop: onDrop,
    };

    return (
        <Zone {...zoneHandlers} data-testid={testId}>
            Drag and Drop your Files
        </Zone>
    );
};

DropZone.propTypes = {
    testId: PropTypes.string
}

export default DropZone;