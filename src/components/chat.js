// CrispChat.js
import { useEffect } from 'react';

const CrispChat = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "7c25238e-bac5-4a96-a31e-ec5d792e7c2c";

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []);

  return null; // The component doesn't render any JSX/UI.
};

export default CrispChat;
