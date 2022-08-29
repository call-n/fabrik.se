import { gql } from './hygraph-client'

export const CategoryFragment = gql`
  fragment CategoryFragment on Category {
    id
    description
    name
    slug
  }
`
export const CollectionFragment = gql`
  fragment CollectionFragment on Collection {
    id
    description
    name
    slug
  }
`

export const ImageFragment = gql`
  fragment ImageFragment on Asset {
    id
    height
    url
    width
  }
`

export const EventFragment = gql`
  fragment EventFragment on Event {
    id
    description
    images {
      ...ImageFragment
    }
    name
    price
    slug
    variants {
      ...EventVariantFragment
    }
  }
  ${[ImageFragment]}
`

export const EventCardFragment = gql`
  fragment EventCardFragment on Event {
    id
    images(first: 1) {
      ...ImageFragment
    }
    name
    price
    slug
    variants(first: 1) {
      ...EventVariantFragment
    }
  }
  ${[ImageFragment]}
`