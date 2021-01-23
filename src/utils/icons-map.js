import * as SvgIconsComponent from '../components/icons'

/**
 * Map icons to icon names
 *
 * @param {string} slug Slug.
 *
 * @returns {*}
 */

export const getIconComponentsByName = slug => {
  const ComponentsMap = {
    facebook: SvgIconsComponent.Facebook,
    twitter: SvgIconsComponent.Twitter,
    instagram: SvgIconsComponent.Instagram,
    youtube: SvgIconsComponent.Youtube
  }

  if (slug in ComponentsMap) {
    const IconComponent = ComponentsMap[slug]
    return <IconComponent />
  } else {
    return null
  }
}
