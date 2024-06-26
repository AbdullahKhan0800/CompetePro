import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

const SubParticles = ({ option }) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => { };

    return (
        <Particles
            id="tsSubparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                "detectRetina": true,
                "fpsLimit": 600,
                "interactivity": {
                    "events": {
                        "onClick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "onDiv": {
                            "elementId": "repulse-div",
                            "enable": false,
                            "mode": "repulse"
                        },
                        "onHover": {
                            "enable": true,
                            "mode": "connect",
                            "parallax": {
                                "enable": false,
                                "force": 10,
                                "smooth": 30
                            }
                        },
                        "resize": true
                    },
                    "modes": {
                        "connect": {
                            "distance": 100,
                            "lineLinked": {
                                "opacity": 0.2
                            },
                            "radius": 250
                        }
                    }
                },
                "particles": {
                    "color": {
                        "value": "rgba(28,114,184,0.2)"
                    },
                    "move": {
                        "attract": {
                            "enable": false,
                            "rotate": {
                                "x": 600,
                                "y": 600
                            }
                        },
                        "bounce": false,
                        "direction": "none",
                        "enable": true,
                        "outMode": "bounce",
                        "random": true,
                        "speed": 1.5,
                        "straight": false
                    },
                    "number": {
                        "density": {
                            "enable": true,
                            "area": 380
                        },
                        "limit": 500,
                        "value": 120
                    },
                    "opacity": {
                        "random": false,
                        "value": 0.5,
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "size": {
                        "random": true,
                        "value": 2
                    }
                },
                "background": {
                    "color": "white",
                    "position": "center",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}
        />
    );
};

export default SubParticles;