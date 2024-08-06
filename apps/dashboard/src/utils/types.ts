export interface UserInfoTypes {
  id: number;
  username: string;
  email: string;
  otp: string | null;
  profilePic: string | null;
  name: string | null;
  role: 'ADMIN' | 'USER';
  createdAt: string;
  updatedAt: string;
  iat: number | null;
  exp: number | null;
}

export interface DashboardItemProps {
  link: string;
  name: string;
  createdAt: string;
  branch: string;
  status: string;
  Icon?: any;
  _id?: string | number;
}

export interface SectionType {
  id: number;
  options: Array<{ name: string; _id: string }>;
  type: {
    name: string;
    _id: string;
  };
  value: string;
}

export interface FormType {
  id: string;
  form: {
    description: string;
    name: string;
    sections: Array<SectionType>;
  };
}
