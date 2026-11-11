import site from '../data/site.json'
import pricing from '../data/pricing.json'

// 料金データから構造化データ用のオファー一覧を組み立てる（数値化できる行のみ）
const offers = pricing.groups.flatMap((group) =>
  group.rows.flatMap((row) => {
    const priceIndex = group.columns.length - row.values.length
    return row.values
      .map((value, i) => {
        const amount = value.replace(/,/g, '').match(/^(\d+)円/)
        if (!amount) return null
        const column = group.columns[priceIndex + i]
        return {
          '@type': 'Offer',
          name: `${group.title}｜${row.label}${column && column !== '料金' ? `（${column}）` : ''}`,
          price: Number(amount[1]),
          priceCurrency: 'JPY',
        }
      })
      .filter(Boolean)
  })
)

export const studioJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PhotographyBusiness',
  '@id': `${site.url}/#studio`,
  name: site.name,
  alternateName: [site.nameShort, site.nameEn],
  description: site.description,
  url: site.url,
  image: [new URL(site.ogImage, site.url).href],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    postalCode: site.address.postalCode,
    addressRegion: site.address.region,
    addressLocality: site.address.locality,
    streetAddress: site.address.street,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  // 24時間予約可（2026-11〜）
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: site.opens,
    closes: site.closes,
  },
  priceRange: site.priceRange,
  currenciesAccepted: 'JPY',
  paymentAccepted: '現金, PayPay, クレジットカード',
  sameAs: [site.links.instagram, site.links.x, site.links.instabase, site.links.spacemarket],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '料金プラン',
    itemListElement: offers,
  },
}
