import React, { useEffect, useState } from 'react';

const AppLayout = (props) => {
  console.log(props);
  return (
    <>
      {props.children}
    </>
  )
};

export const getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default AppLayout;