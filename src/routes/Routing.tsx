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
  Home, DashboardMain, SecondPage, NotFound,
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

      {/* Dashboard Routes */}
      <Route path={`${base}${RoutesPath.DashboardHome}`} element={Dashboard(DashboardMain)} />
      <Route path={`${base}${RoutesPath.DashboardSecondPage}`} element={Dashboard(SecondPage)} />

      {/* 404 */}
      <Route path="*" element={Default(NotFound)} />
    </Routes>
  )
}

export default Routing
