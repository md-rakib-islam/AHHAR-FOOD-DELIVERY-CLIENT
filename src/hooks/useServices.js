import { useEffect, useState } from "react";

const useservices = () => {
  const [services, setservices] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const size = 9;
  useEffect(() => {
    fetch(
      `https://ghostly-flesh-74666.herokuapp.com/services?size=${size}&&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setservices(data.services);
        const totalData = data.count;
        const pages = Math.ceil(totalData / size);
        setTotalPage(pages);
      });
  }, [currentPage]);
  return { services, setservices, totalPage, currentPage, setCurrentPage };
};

export default useservices;
