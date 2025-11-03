"use client"

import React, { useState } from 'react'

const ManageUseState = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
  return ({sidebarOpen, setSidebarOpen})
}

export default ManageUseState;
