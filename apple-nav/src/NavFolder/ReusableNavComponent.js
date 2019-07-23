import React, { useState } from 'react';
import { AppleProducts } from './SubNavForLinks';

export default function Reusable() {
  const [data, useData] = useState(AppleProducts)
  let values = Object.values(data);
  console.log("keys", values);

  return (
    <div></div>
  )
}