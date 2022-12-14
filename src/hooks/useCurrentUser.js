import {useEffect, useState} from "react";
import {PassageUser} from "@passageidentity/passage-auth/passage-user";

export const useCurrentUser = () => {
  const [result, setResult] = useState({
    isLoading: true,
    isAuthorized: false,
    username: '',
  });

  useEffect(() => {
    let cancelRequest = false;
    (async () => {
      const userInfo = await new PassageUser().userInfo();
      if (cancelRequest) return;

      if (userInfo === undefined) {
        setResult({
          isLoading: false,
          isAuthorized: false,
          username: '',
        });
        return;
      }
      setResult({
        isLoading: false,
        isAuthorized: true,
        username: userInfo.email ? userInfo.email : userInfo.phone
      })
      return () => {
        cancelRequest = true;
      };
    })();
  }, []);

  return result;
}
