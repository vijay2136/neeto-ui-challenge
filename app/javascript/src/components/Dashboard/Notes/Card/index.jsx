import React, { useState } from "react";

import DeleteAlert from "components/Common/DeleteAlert";

import Body from "./Body";
import Footer from "./Footer";

const Card = ({ note }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const { title, description, action, tag, time, img } = note;
  const onClose = () => {
    setShowDeleteAlert(false);
  };

  return (
    <div className="border divide-y neeto-ui-shadow-s px-4">
      <Body
        title={title}
        description={description}
        setShowDeleteAlert={setShowDeleteAlert}
      />
      <Footer action={action} tag={tag} time={time} img={img} />
      <DeleteAlert
        onClose={onClose}
        showDeleteAlert={showDeleteAlert}
        title="Note"
      />
    </div>
  );
};

export default Card;
