export type Responses = {
  id: number
  name: string
  description: string
  key_work: {
    id?: number
    acmi_id?: string
    title?: string
    title_annotation?: string
    slug?: string
    creator_credit?: string
    credit_line?: string
    headline_credit?: string
    thumbnail?: {
      image_url?: string
      has_video?: boolean
      animated_image_url?: string
      [k: string]: unknown
    }
    video_links?: {
      id: number
      name: string
      uri: string
      [k: string]: unknown
    }[]
    record_type?: string
    type?: string
    is_on_display?: boolean
    last_on_display_place?: string | null
    last_on_display_date?: string | null
    is_context_indigenous?: boolean
    material_description?: string
    unpublished?: boolean
    external?: boolean
    first_production_date?: string | null
    commissioned?: boolean
    external_references?: {
      id: number
      source: {
        name?: string
        slug?: string
        [k: string]: unknown
      }
      source_identifier: string
      [k: string]: unknown
    }[]
    brief_description?: string
    constellations_primary?: {
      id: number
      name: string
      description: string
      [k: string]: unknown
    }[]
    constellations_other?: {
      id: number
      name: string
      description: string
      [k: string]: unknown
    }[]
    recommendations?: {
      display_name?: string
      job_title?: string
      avatar_image?: string
      quote?: string
      [k: string]: unknown
    }[]
    [k: string]: unknown
  }
  date_created: string
  date_updated: string
  authors: {
    id: number
    full_name: string
    job_title: string
    [k: string]: unknown
  }[]
  links: {
    id: number
    start: {
      id?: number
      acmi_id?: string
      title?: string
      title_annotation?: string
      slug?: string
      creator_credit?: string
      credit_line?: string
      headline_credit?: string
      thumbnail?: {
        image_url?: string
        has_video?: boolean
        animated_image_url?: string
        [k: string]: unknown
      }
      video_links?: {
        id: number
        name: string
        uri: string
        [k: string]: unknown
      }[]
      record_type?: string
      type?: string
      is_on_display?: boolean
      last_on_display_place?: null | string
      last_on_display_date?: null | string
      is_context_indigenous?: boolean
      material_description?: string
      unpublished?: boolean
      external?: boolean
      first_production_date?: string | null
      commissioned?: boolean
      external_references?: {
        id: number
        source: {
          name?: string
          slug?: string
          [k: string]: unknown
        }
        source_identifier: string
        [k: string]: unknown
      }[]
      brief_description?: string
      constellations_primary?: {
        id: number
        name: string
        description: string
        [k: string]: unknown
      }[]
      constellations_other?: {
        id: number
        name: string
        description: string
        [k: string]: unknown
      }[]
      recommendations?: {
        display_name: string
        job_title: string
        avatar_image: string | null
        quote: string
        [k: string]: unknown
      }[]
      [k: string]: unknown
    }
    end: {
      id?: number
      acmi_id?: string
      title?: string
      title_annotation?: string
      slug?: string
      creator_credit?: string
      credit_line?: string
      headline_credit?: string
      thumbnail?: {
        image_url?: string
        has_video?: boolean
        animated_image_url?: string
        [k: string]: unknown
      }
      video_links?: {
        id: number
        name: string
        uri: string
        [k: string]: unknown
      }[]
      record_type?: string
      type?: string
      is_on_display?: boolean
      last_on_display_place?: null | string
      last_on_display_date?: null | string
      is_context_indigenous?: boolean
      material_description?: string
      unpublished?: boolean
      external?: boolean
      first_production_date?: string | null
      commissioned?: boolean
      external_references?: {
        id: number
        source: {
          name?: string
          slug?: string
          [k: string]: unknown
        }
        source_identifier: string
        [k: string]: unknown
      }[]
      brief_description?: string
      constellations_primary?: {
        id: number
        name: string
        description: string
        [k: string]: unknown
      }[]
      constellations_other?: {
        id: number
        name: string
        description: string
        [k: string]: unknown
      }[]
      recommendations?: {
        display_name: string
        job_title: string
        avatar_image: string | null
        quote: string
        [k: string]: unknown
      }[]
      [k: string]: unknown
    }
    description: string
    [k: string]: unknown
  }[]
  published: boolean
  shape: null
  [k: string]: unknown
}[]
