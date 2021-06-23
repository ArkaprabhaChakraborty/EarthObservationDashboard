import React, {useEffect, useRef} from 'react';

export function WebMaps()
{
    const elementRef = useRef();
    useEffect( _=>{
        import("../src/webmapbackend").then(
            app => app.initialize(elementRef.current)
        );
    });
    return (
        <div className="viewDiv" ref={elementRef}>
        </div>
    );
}