import React from 'react';
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient';

const ShaderGradientBackground = () => {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Places the gradient behind all other content
      }}
    >
      <ShaderGradient
        animate="on"
        brightness={1.2}
        cAzimuthAngle={180}
        cDistance={2.9}
        cPolarAngle={120}
        cameraZoom={1}
        color1="#ebedff"
        color2="#f3f2f8"
        color3="#dbf8ff"
        envPreset="city"
        lightType="3d"
        positionX={0}
        positionY={1.8}
        positionZ={0}
        reflection={0.1}
        rotationX={0}
        rotationY={0}
        rotationZ={-90}
        type="waterPlane"
        uDensity={1}
        uFrequency={5.5}
        uSpeed={0.2}
        uStrength={3}
        uTime={0.2}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
};

export default ShaderGradientBackground;