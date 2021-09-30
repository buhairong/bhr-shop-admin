export interface ILoginInfo {
  logo_square: string,
  logo_rectangle: string,
  login_logo: string,
  slide: string[]
}

export interface ILoginReq {
  account: string,
  pwd: string,
  imgcode: string
}

export interface IMenu {
  path: string
  title: string
  icon: string
  header: string
  is_header: number
  children?: IMenu[]
}

export interface IUserInfo {
  id: number
  account: string
  head_pic: string
}

export interface ILoginRes {
  token: string
  expires_time: number
  menus: IMenu[]
  unique_auth: string[]
  user_info: IUserInfo
  logo: string
  logo_square: string
  version: string
  newOrderAudioLink: string
}
