import { useEffect, useState } from "react";

const StrodeId = (idStore) => {
  const [id, setId] = useState(0);

  useEffect(() => {
    setId(idStore);
  }, [idStore]);
  return { id, setId };
};

export default StrodeId;
