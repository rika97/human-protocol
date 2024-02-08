import React from 'react'
import {Box, Text} from "grommet";
import {Outlet} from "react-router-dom";

export const AppLayout = () => {
  return <Box
    width={'700px'}
    margin={'0 auto'}
  >
    <Outlet />
  </Box>
}
