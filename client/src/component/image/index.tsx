import { useEffect, useRef } from "react";

export const ImageCanvas = ({ imageUrl }: {imageUrl: string}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = imageUrl;

    image.onload = () => {
        const wrh = image.width / image.height;
        let newWidth = canvas.width;
        let newHeight = newWidth / wrh;
        if (newHeight > canvas.height) {
            newHeight = canvas.height;
            newWidth = newHeight * wrh;
        }
        ctx.drawImage(image, 0, 0, newWidth , newHeight);
    };
  }, [imageUrl]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};