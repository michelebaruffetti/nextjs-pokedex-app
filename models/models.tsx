interface PokemonBase {
  name: string;
  url: string;
}

interface ResponsePokemonBase {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonBase[];
}

interface PaginationData {
  totalCount: number;
  nextPage: string | null;
  prevPage: string | null;
}

//single pokemon detail interface
interface PokemonDetail {
  abilities?: Ability[];
  base_experience: number;
  forms?: PokemonForm[];
  game_indices?: GameIndex[];
  height: number;
  held_items?: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves?: PokemonMove[];
  name: string;
  order: number;
  past_abilities?: Ability[];
  past_types?: PokemonType[];
  species: PokemonSpecies;
  sprites: PokemonSprites;
  stats?: PokemonStat[];
  types?: PokemonType[];
  weight: number;
}

interface Ability {
  ability: NamedResource;
  is_hidden: boolean;
  slot: number;
}

interface NamedResource {
  name: string;
  url: string;
}

interface PokemonForm {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: NamedResource;
}

interface HeldItem {
  // Define fields for HeldItem
}

interface PokemonMove {
  move: NamedResource;
  version_group_details?: VersionGroupDetails[];
}

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: NamedResource;
  version_group: NamedResource;
}

interface PokemonSpecies {
  name: string;
  url: string;
}

interface PokemonSprites {
  back_default: string;
  back_female?: string | null;
  back_shiny: string;
  back_shiny_female?: string | null;
  front_default: string;
  front_female?: string | null;
  front_shiny: string;
  front_shiny_female?: string | null;
  other: OtherSprites;
  versions: Versions;
}

interface OtherSprites {
  dream_world: DreamWorldOrIcons;
  home: HomeOrOmegarubyAlphasapphireOrXYOrUltraSunUltraMoon;
  official_artwork: OfficialArtworkOrEmerald;
}

interface DreamWorldOrIcons {
  front_default: string;
  front_female?: string | null;
}

interface HomeOrOmegarubyAlphasapphireOrXYOrUltraSunUltraMoon {
  front_default: string;
  front_female?: string | null;
  front_shiny: string;
  front_shiny_female?: string | null;
}

interface OfficialArtworkOrEmerald {
  front_default: string;
  front_shiny: string;
}

interface Versions {
  generation_i: GenerationI;
  generation_ii: GenerationII;
  generation_iii: GenerationIII;
  generation_iv: GenerationIV;
  generation_v: GenerationV;
  generation_vi: GenerationVI;
  generation_vii: GenerationVII;
  generation_viii: GenerationVIII;
}

interface GenerationI {
  red_blue: RedBlueOrYellow;
  yellow: RedBlueOrYellow;
}

interface RedBlueOrYellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface GenerationII {
  crystal: Crystal;
  gold: GoldOrSilver;
  silver: GoldOrSilver;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface GoldOrSilver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface GenerationIII {
  emerald: OfficialArtworkOrEmerald;
  firered_leafgreen: FireredLeafgreenOrRubySapphire;
  ruby_sapphire: FireredLeafgreenOrRubySapphire;
}

interface FireredLeafgreenOrRubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface GenerationIV {
  diamond_pearl: DiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated;
  heartgold_soulsilver: DiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated;
  platinum: DiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated;
}

interface DiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated {
  back_default: string;
  back_female?: string | null;
  back_shiny: string;
  back_shiny_female?: string | null;
  front_default: string;
  front_female?: string | null;
  front_shiny: string;
  front_shiny_female?: string | null;
}

interface GenerationV {
  black_white: BlackWhite;
}

interface BlackWhite {
  animated: DiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated;
  back_default: string;
  back_female?: string | null;
  back_shiny: string;
  back_shiny_female?: string | null;
  front_default: string;
  front_female?: string | null;
  front_shiny: string;
  front_shiny_female?: string | null;
}

interface GenerationVI {
  omegaruby_alphasapphire: HomeOrOmegarubyAlphasapphireOrXYOrUltraSunUltraMoon;
  x_y: HomeOrOmegarubyAlphasapphireOrXYOrUltraSunUltraMoon;
}

interface GenerationVII {
  icons: DreamWorldOrIcons;
  ultra_sun_ultra_moon: HomeOrOmegarubyAlphasapphireOrXYOrUltraSunUltraMoon;
}

interface GenerationVIII {
  icons: DreamWorldOrIcons;
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedResource;
}

interface PokemonType {
  slot: number;
  type: NamedResource;
}
