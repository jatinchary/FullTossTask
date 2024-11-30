export interface User {
  id: string;
  name: string;
  email: string;
  team: IPLTeam;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface IPLTeam {
  id: string;
  name: string;
  shortName: string;
  primaryColor: string;
  secondaryColor: string;
  logo: string;
}