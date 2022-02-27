import React, { ReactNode, useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import './reactRoot.css';

interface StatsUIProps {
  children: ReactNode | ReactNode[];
}

export const ReactRoot: React.FC<StatsUIProps> = ({ children }) => {
  const [rootStyle, setRootStyle] = useState({});
  const uiRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const phaserParent = document.getElementById("phaser-parent");
    const copySize = () => {
      window.setTimeout(() => {
        if (phaserParent) {
          const phaserCanvas = phaserParent.getElementsByTagName("canvas")[0];
          if (phaserCanvas && uiRootRef.current) {
            setRootStyle((prev) => ({
              ...prev,
              marginLeft: phaserCanvas.style.marginLeft,
              marginTop: phaserCanvas.style.marginTop,
              height: phaserCanvas.style.height,
              width: phaserCanvas.style.width
            }));
          }
        }
      }, 0);
    };
    window.addEventListener("resize", copySize);
    copySize();
    return () => {
      window.removeEventListener("resize", copySize)
    }
  }, []);

  return <div className="react-root" ref={uiRootRef} style={rootStyle}>{children}</div>;
};

const mapStateToProps = (state /*, ownProps*/) => {
  return { ...state };
};

export default connect(mapStateToProps)(ReactRoot);
