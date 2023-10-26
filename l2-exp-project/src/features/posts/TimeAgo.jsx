import {parseISO, formatDistanceToNow} from "date-fns";

import React from "react";

const TimeAgo = ({timestamp}) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePriod = formatDistanceToNow(date);
    timeAgo = `${timePriod} ago`;
  }
  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
