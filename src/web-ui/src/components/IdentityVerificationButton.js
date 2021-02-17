import React, { useState } from "react";
import { Button } from "react-bootstrap";

const IdentityVerificationButton = ({ enabled, onClick }) => {
  const [started, setStarted] = useState(false);

  return (
    <Button
      variant={started ? "danger" : "success"}
      onClick={(e) => {
        setStarted(!started);
        onClick(e);
      }}
      disabled={!enabled}
      size="sm"
    >
      {started ? "Stop" : "Start"} Identity Verification
    </Button>
  );
};

export default IdentityVerificationButton;