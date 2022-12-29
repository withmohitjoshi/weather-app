import React, { useEffect, useState } from "react";

const RenderIcon = ({ icon, className }) => {
  const [iconLocation, setIconLocation] = useState("");
  useEffect(() => {
    import(`../assets/icons/${icon}.svg`).then((module) =>
      setIconLocation(module.default)
    );
  }, [icon]);
  return (
    iconLocation && <img src={iconLocation} className={className} alt={icon} />
  );
};

export default RenderIcon;
