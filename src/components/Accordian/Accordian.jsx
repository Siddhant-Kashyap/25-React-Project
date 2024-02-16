import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState();
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [mulId, setMulId] = useState([]);

  const handleSelect = (id) => {
    setSelected(id);
  };
  const handleMultiple = (id) => {
    setMulId((prevMulId) => {
      const updatedMulId = prevMulId.includes(id)
        ? prevMulId.filter((item) => item !== id)
        : [...prevMulId, id];

      console.log("Updated mulId:", updatedMulId);
      return updatedMulId;
    });
  };

  return (
    <>
      <div className="wrapper">
        <div style={{ textAlign: "center" }}>
          <button onClick={() => setMultipleSelect(!multipleSelect)}>
            Enable set Multiple
          </button>
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  style={{ background: "red" }}
                  onClick={() =>
                    multipleSelect
                      ? handleMultiple(dataItem.id)
                      : handleSelect(dataItem.id)
                  }
                >
                  <h1>{dataItem.title}</h1>
                  {multipleSelect ? (
                   mulId.indexOf(dataItem.id) !== -1 &&(
                    <h3>{dataItem.description}</h3>
                   )
                  ) : selected === dataItem.id ? (
                    <div>
                      <h3>{dataItem.description}</h3>
                    </div>
                  ) : null}
                </div>
              </div>
            ))
          ) : (
            <div>No data </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;


