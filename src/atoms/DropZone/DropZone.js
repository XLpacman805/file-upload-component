import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { Zone } from "./DropZone.style";

const DropZone = (props) => {
    const { testId } = props;
    const [fileList, setFileList] = useState(new DataTransfer().files);
    const inputRef = useRef();

    const handleFiles = (files) => setFileList(files);
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
    useEffect(() => {
        inputRef.current.files = fileList;
    }, [fileList]);

    return (
        <Zone {...zoneHandlers} data-testid={testId}>
            <p>Drag and Drop your Files</p>
            <p> or </p>
            <input onChange={e => handleFiles(e.target.files)} ref={inputRef} type="file" multiple />
        </Zone>
    );
};

DropZone.propTypes = {
    testId: PropTypes.string
}

export default DropZone;