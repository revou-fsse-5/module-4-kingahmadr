import React from "react";

interface ErrorHandlingProps {
  functionParam: string;
  responseStatus: string | boolean;
}
const ErrorHandling: React.FC<ErrorHandlingProps> = ({
  functionParam,
  responseStatus,
}) => {
  if (functionParam === "getCategories")
    switch (responseStatus) {
      case responseStatus == "404":
        alert(`${functionParam} fetching data Not Found`);
        break;
      case responseStatus == "400":
        alert(`${functionParam} bad request fetching data`);
        break;
      case responseStatus == "403":
        alert("Forbidden Access fetching the categories");
        break;
      default:
        console.log("Categories ");
    }
  return <div>ErrorHandling</div>;
};

export default ErrorHandling;
