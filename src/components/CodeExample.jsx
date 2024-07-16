import React from 'react'
import { Frontend, Backend } from "../data/Languages";
import CodeSnippets from './CodeSnippets';

function CodeExample() {
    return (
        <div className="container">
            <div className="text-center mt-10">
                <h3 className="headingBCClip">
                    Write Elegant Code
                </h3>
                <h3>
                    no clutter, no pain
                </h3>
            </div>
            <div className="grid grid-cols-2 overflow-hidden">
                <div data-aos="fade-right">
                    <CodeSnippets content={Frontend} position="left" />
                </div>
                <div data-aos="fade-left">
                    <CodeSnippets content={Backend} position="right" />
                </div>
            </div>
        </div>
    )
}

export default CodeExample
