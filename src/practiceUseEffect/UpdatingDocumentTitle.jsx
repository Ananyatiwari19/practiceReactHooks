import React, { useCallback, useEffect, useState } from "react";

export default function UpdatingDocumentTitle() {
  //const[title, newTitle]=useState('');

  useEffect(() => {
    document.title = "New Title";
  }, []);
  return (
    <div>
      <h1>UpdatingDocumentTitle</h1>
    </div>
  );
}
