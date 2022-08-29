import hygraphClient, { gql } from './hygraph-client'
import { EventCardFragment } from './graphql-fragments'

export const getAllEventsQuery = gql`
  query AllEventsQuery($locale: Locale!) {
    events(locales: [$locale, sv]) {
      ...EventCardFragment
    }
  }
  ${EventCardFragment}
`

async function getAllEvents({ locale = 'en' }) {
  const { events } = await hygraphClient.request(getAllEventsQuery, {
    locale
  })

  return {
    events
  }
}

export default getAllEvents