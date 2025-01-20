const client = 'C'
const memberShip = 'M'

export enum RoutesPath {
  // Public Routes
  PublicHome = '/',

  // Client Routes
  ClientHome = `${client}/`,
  ClientSecondPage = `${client}/pageTwo`,

  // MemberShip Routes
  MemberShipHome = `${memberShip}/`,
  MemberShipSecondPage = `${memberShip}/pageTwo`,
}
