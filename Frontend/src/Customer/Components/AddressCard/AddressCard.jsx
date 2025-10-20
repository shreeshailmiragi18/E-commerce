import React from "react";

const AddressCard = () => {
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">John Doe</p>
        <p>Karnataka, Bengaluru, 56009</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>+91 9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
