import { useEffect, useState } from "react";
import useFirebase from "./useFirebase.js";

const useCart = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [selectedservice, setSelectedservice] = useState([]);

  useEffect(() => {
    fetch(`https://aqueous-dawn-65962.herokuapp.com/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setSelectedservice(data);
        }
      });
  }, [uid]);

  function addToCart(service) {
    const isHave = selectedservice.find(
      (selected) => selected._id === service._id
    );
    delete service._id;
    service.uid = uid;
    service.status = "pending";

    if (isHave) {
      alert("service has been selected!");
    } else {
      fetch("https://aqueous-dawn-65962.herokuapp.com/service/add", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(service),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            const newSelection = [...selectedservice, service];
            setSelectedservice(newSelection);
          }
        });
    }
  }

  function remove(id) {
    fetch(`https://aqueous-dawn-65962.herokuapp.com/delete/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const selectAfterRemove = selectedservice.filter(
            (service) => service._id !== id
          );
          setSelectedservice(selectAfterRemove);
        } else {
          alert("something went wrong!!");
        }
      });
  }

  return { setSelectedservice, remove, addToCart, selectedservice };
};

export default useCart;
