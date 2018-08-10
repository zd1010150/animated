const loadScript = (url: string, callback: () => {}) => {
  const script = document.createElement("script");
  script.type = "text/javascript";

  script.onload = () => {
    callback();
  };

  script.src = url;
  return document.getElementsByTagName("head")[0].appendChild(script);
};

export default loadScript;
