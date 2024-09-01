export const SHOW_ANIMATE = {
    opacity: 1,
    display: "block"
};

export const HIDE_ANIMATE = {
    opacity: 0,
    transitionEnd: {
        display: "none"
    }
};

export const SPIN_ANIMATE = {
    rotate: [0, 360], // Rotate from 0 to 360 degrees
    transition: {
        duration: 7.5, // Animation duration
        ease: "linear", // Linear animation
        repeat: Infinity, // Infinite loop
        delay: 0.25 // Delay before animation starts
    }
};

export const COVER_STYLE = {
    display: 'block',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '4px solid #ebebed',
    margin: '1em',
};