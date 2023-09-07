import React from "react";
import Home from "../../src/Components/Home/Home.js";
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup)

// Arrange Act Assertions

describe('Home Component Test',()=>{

    // Arrange
    it('Text is showing', () => {
    
    // Act
        render(<Home/>)

    // Assertions
        expect(screen.getByTestId('para1').innerHTML).toBe("Watch on Smart TVs, Playstation, Xbox, <br>Chromecast, Apple TV, Blu-ray players, and<br>more.")
        expect(screen.getByTestId('para2').innerHTML).toBe("Stream unlimited movies and TV shows on <br>your phone, tablet, laptop, and TV without paying more.")
    });
})