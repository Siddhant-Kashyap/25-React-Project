import { useEffect, useState } from "react";

const ImageSlider = () => {
  const url = `https://picsum.photos/v2/list?page=1&limit=10`;
  const [images, setImage] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const imageURLs = data.map((item) => item.download_url);
        setImage(imageURLs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    // Clear interval when component unmounts or when images change
    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>Image Slider</h1>
      </div>
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={images[currentImage]} alt={`Image ${currentImage}`} style={{ width: "200px", height: "200px" }} />
      </div>
    </>
  );
};

export default ImageSlider;
