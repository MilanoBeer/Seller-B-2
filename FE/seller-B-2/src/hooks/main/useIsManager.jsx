import React, { useEffect, useState } from "react";
export default function useIsManager() {

    const [seq, setSeq] = useState("");
    const [isManager, setIsManager] = useState(true);

    // useEffect(() => {
    //     if (sessionStorage.getItem("adminCheck") === "ROLE_ADMIN") {
    //         setIsManager(true);
    //     } else {
    //         setIsManager(false);
    //     }
    //     setSeq(sessionStorage.getItem("seq"));

    // }, []);

  return {
    seq,
    isManager,
  }
}
