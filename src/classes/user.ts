export enum Profile {
  ADMIN,
  USER,
  MANAGER
}

export class User {
  id: number;
  email: String;
  complete_name: String;
  birthday: string;
  cellphone: null;
  referral_code: String;
  id_number: null;
  code_to_refer: String;
  address: null;
  company: String;
  auth_token: String;
  id_photo: String;
  profile_photo: String;
  driving_license_photo: String;
  driving_license_back: String;
  district: null;
  finished_registration: false;
  active: false;
  country: {
    id: number;
    name: String;
  };
  city: null;
  profession: null;
  service_use: null;
  constructor(username: string, email: string) {
    this.complete_name = username;
    this.email = email;
  }
}
