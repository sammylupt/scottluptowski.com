// @flow

export type Project = {
  name: string,
  slug: string,
  summary: string,
  links: Array<ProjectLink>,
  featuredImage: ImageWithMeta,
  images: Array<ImageWithMeta>
}

export type ProjectLink = {
  url: string,
  name: string,
  meta?: string
}

export type ImageWithMeta = {
  src: string,
  alt: string,
  description?: string
}

export type Post = {
  title: string,
  url: string
}

export type LocationProps = {
  params: {
    project: string
  }
}
