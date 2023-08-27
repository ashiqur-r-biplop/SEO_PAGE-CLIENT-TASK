import { useState } from "react";

const StrodeId = (idStore) => {
  console.log(idStore);
  const [id, setId] = useState(0);
  useState(() => {
    setId(idStore);
  }, [idStore]);
  return { id, setId };
};

export default StrodeId;
