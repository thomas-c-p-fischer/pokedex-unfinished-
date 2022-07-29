import {Types} from "./types";
import {Sprites} from "./sprites";

export interface Pokemon {
  id: number;
  name: string;
  types: Types[];
  height: number;
  weight: number;
  sprites: Sprites
}
