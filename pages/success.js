import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

function success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      {" "}
      <div className="success">
        {" "}
        <p className="icon">
          {" "}
          <BsBagCheckFill />
        </p>
        <h2>Merci pour votre commande !</h2>
        <p className="email-msg">Votre reçu se trouve dans votre boite mail.</p>
        <p className="description">
          {" "}
          Si vous avez la moindre question, s'il vous plait contactez moi :
          <a className="email" href="mailto:order@example.com">
            commade@exemple.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Reprendre votre shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default success;
