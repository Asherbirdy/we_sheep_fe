/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable max-len */
import {
  Routes, Route,
} from 'react-router-dom'

import {
  DefaultLayout, DashboardLayout,
} from '@/layout'
import type { ComponentType } from 'react'
import {
  Home, NotFound, ClientMain, ClientPageTwo, MemberShipMain, MemberShipPageTwo,
} from '@/pages'

import { RoutesPath } from '@/enums'
import { config } from '@/config'

const Routing = () => {
  const base = config.env.baseUrl

  // Layout
  const Default = (Component: ComponentType) => <DefaultLayout><Component /></DefaultLayout>
  const Dashboard = (Component: ComponentType) => <DashboardLayout><Component /></DashboardLayout>

  return (
    <Routes>
      {/* Public Routes */}
      <Route path={`${base}${RoutesPath.PublicHome}`} element={Default(Home)} />

      {/* Client Routes */}
      <Route path={`${base}${RoutesPath.ClientHome}`} element={Dashboard(ClientMain)} />
      <Route path={`${base}${RoutesPath.ClientSecondPage}`} element={Dashboard(ClientPageTwo)} />

      {/* MemberShip Routes */}
      <Route path={`${base}${RoutesPath.MemberShipHome}`} element={Dashboard(MemberShipMain)} />
      <Route path={`${base}${RoutesPath.MemberShipSecondPage}`} element={Dashboard(MemberShipPageTwo)} />

      {/* 404 */}
      <Route path="*" element={Default(NotFound)} />
    </Routes>
  )
}

export default Routing
