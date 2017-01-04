// @flow

export type Project = {
  name: string,
  slug: string,
  summary: string,
  links: Array<ProjectLink>,
  featuredImage: ImageWithMeta,
  images?: Array<ImageWithMeta>,
  tweets?: Array<string>
}

export type Link = {
  title: string,
  url: string
}

export type ProjectLink = Link & {
  meta?: string
}

export type ImageWithMeta = {
  src: string,
  alt: string,
  description?: string
}

export type LocationProps = {
  params: {
    project: string
  }
}
