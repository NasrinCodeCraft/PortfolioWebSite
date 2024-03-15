import React, { useEffect } from 'react';

function Spinner() {
    useEffect(() => {
        const hideSpinner = () => {
          const spinnerElement = document.getElementById('spinner');
    
          if (spinnerElement) {
            spinnerElement.classList.remove('show');
          }
        };
    
        const spinnerTimeout = setTimeout(hideSpinner, 1);
    
        return () => clearTimeout(spinnerTimeout); // Cleanup on component unmount
    
      }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

      return(
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{ width: "3rem" , height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
      )
}

export default Spinner;
    