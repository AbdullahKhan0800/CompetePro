import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

const MainParticles = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => { };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute"
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
                        "value": "rgba(255,255,255, 1)"
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
                        "random": true,
                        "value": 0.3,
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
                    "image": "linear-gradient(to bottom right,#0f1012,#181b90)",
                    "position": "center",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}
        />
    );
};

export default MainParticles;