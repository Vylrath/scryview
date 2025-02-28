export interface CardSetResponse {
  object: string,
  data: CardSet[],
  has_more: boolean,
  next_page: string,
  total_cards: number,
  warnings: []
}

export interface CardSet {
    object: string,
    id: string,
    code: string,
    mtgo_code: string,
    arena_code: string,
    tcgplayer_id: number,
    name: string,
    set_type: string,
    released_at: string,
    block_code: string,
    block: string,
    parent_set_code: string,
    card_count: number,
    digital: boolean,
    foil_only: boolean,
    nonfoil_only: boolean,
    scryfall_uri: string,
    uri: string,
    icon_svg_uri: string,
    search_uri: string
}
