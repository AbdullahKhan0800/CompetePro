import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";

function Particle() {
    const particlesInit = async (main) => {
        // console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                "detectRetina": true,
                "fpsLimit": 1000,
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
                                "force": 60,
                                "smooth": 10
                            }
                        },
                        "resize": true
                    },
                    "modes": {
                        "connect": {
                            "distance": 100,
                            "color": "#fff",
                            "lineLinked": {
                                "color": "#fff",
                                "opacity": 0.2
                            },
                            "radius": 250
                        }
                    }
                },
                "particles": {
                    "color": {
                        "value": "#1c72b8"
                    },
                    "lineLinked": {
                        "blink": false,
                        "color": "#1c72b8",
                        "consent": false,
                        "distance": 20,
                        "enable": false,
                        "opacity": 1,
                        "width": 0.7
                    },
                    "move": {
                        "attract": {
                            "enable": false,
                            "rotate": {
                                "x": 600,
                                "y": 1200
                            }
                        },
                        "bounce": false,
                        "direction": "none",
                        "enable": true,
                        "outMode": "out",
                        "random": false,
                        "speed": 6,
                        "straight": false
                    },
                    "number": {
                        "density": {
                            "enable": true,
                            "area": 380
                        },
                        "limit": 500,
                        "value": 80
                    },
                    "opacity": {
                        "animation": {
                            "enable": false,
                            "minimumValue": 0.1,
                            "speed": 1,
                            "sync": false
                        },
                        "random": false,
                        "value": 0.5
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "size": {
                        "animation": {
                            "enable": false,
                            "minimumValue": 0.1,
                            "speed": 50,
                            "sync": false
                        },
                        "random": true,
                        "value": 2
                    }
                },
                "polygon": {
                    "draw": {
                        "enable": false,
                        "lineColor": "#ffffff",
                        "lineWidth": 0.5
                    },
                    "move": {
                        "radius": 6
                    },
                    "scale": 1,
                    "type": "none",
                    "url": ""
                },
                "background": {
                    "color": "linear-gradient(to bottom right, #101118 0%, #171a8b 100%)",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}
        />
    );
}

export default Particle;
