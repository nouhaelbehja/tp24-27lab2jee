import {Categorie} from "./Categorie";

export class Appareil {
  id?: number
  label?: string;
  description?: string;
  piece?: string;
  consommationWatts?: number;
  dateInstallation?: string;
  state?: boolean
  photo?: string;
  categorie?: Categorie;
}

