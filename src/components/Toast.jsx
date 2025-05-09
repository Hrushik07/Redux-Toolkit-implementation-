import React from "react";

const Toast = ({ message, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 5000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={styles.toastContainer}>
      <div style={styles.toast}>{message}</div>
    </div>
  );
};

const styles = {
  toastContainer: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
  },
  toast: {
    background: "#333",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    fontSize: "14px",
    minWidth: "200px",
    textAlign: "center",
  },
};

export default Toast;
