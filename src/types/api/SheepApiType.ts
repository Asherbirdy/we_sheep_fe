// * Create Sheep
export interface CreateSheepPayload {
  name: string
  ageRange: string
}

// * Get Sheep List
export interface GetSheepListResponse {
  msg: string
  list: SheepList
}

export interface SheepList {
  focusPersonList: FocusPersonList[]
  nonFocusPersonList: NonFocusPersonList[]
}

export interface FocusPersonList {
  personStatus: string
  _id: string
  name: string
  ageRange: string
  tags: any[]
  focusPerson: boolean
  userId: string
  note: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface NonFocusPersonList {
  _id: string
  name: string
  ageRange: string
  focusPerson: boolean
  userId: string
  createdAt: string
  updatedAt: string
  __v: number
  note: string
  personStatus: string
  tags: string[]
}