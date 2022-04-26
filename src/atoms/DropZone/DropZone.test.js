import React from "react";
import {render, screen} from '@testing-library/react';
import DropZone from "./DropZone";

const testId = 'drag-and-drop-area-test';
test('DropZone renders', () => {
    render(<DropZone testId={testId} />);
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
});