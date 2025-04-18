import React from 'react';

// /C:/Users/sarka/OneDrive/Desktop/PROJECTS/FORM/testform/app/loading.js


const Loading = () => {
    return (
        <div style={styles.container}>
            <div style={styles.spinner}></div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    spinner: {
        width: '50px',
        height: '50px',
        border: '5px solid #ccc',
        borderTop: '5px solid #0070f3',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    },
};

// Add global CSS for animation
if (typeof window !== 'undefined') {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `, styleSheet.cssRules.length);
}

export default Loading;