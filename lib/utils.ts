import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Post } from "#site/content"
import { slug } from "github-slugger"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
}

export function getAllTags(posts: Array<Post>) {
  const tags: Record<string, number> = {}
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1
    })
  })

  return tags
}

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a])
}

export function getPostsByTagSlug(posts: Array<Post>, tag: string) {
  return posts.filter((post) => {
    if (!post.tags) return false
    const slugifiedTags = post.tags.map((tag) => slug(tag))
    return slugifiedTags.includes(tag)
  })
}

export function isBlogUrl(url: string) {
  const segment = getLastPathSegment(url)
  if (segment === "blog") {
    return true
  }

  return false
}

export function isBlogPageUrl(url: string) {
  const segment = getSecondToLastPathSegment(url)
  if (segment === "blog") {
    return true
  }

  return false
}

export function isTagsUrl(url: string) {
  const segment = getLastPathSegment(url)
  if (segment === "tags") {
    return true
  }

  return false
}

export function isTagPageUrl(url: string) {
  const segment = getSecondToLastPathSegment(url)
  if (segment === "tags") {
    return true
  }

  return false
}

export function isHomeUrl(url: string) {
  const segments = getNonEmptyPathSegments(url)

  // No segment means it's base url
  return segments.length === 0
}

export function isAboutUrl(url: string) {
  const segment = getLastPathSegment(url)
  if (segment === "about") {
    return true
  }

  return false
}

export function getLastPathSegment(url: string) {
  try {
    const segments = getNonEmptyPathSegments(url)
    return segments.pop()
  } catch (error) {
    console.error("Invalid URL provided:", error)
    return null
  }
}

export function getSecondToLastPathSegment(url: string) {
  try {
    const segments = getNonEmptyPathSegments(url)
    // Check if there are at least two segments
    if (segments.length < 2) {
      return null // or throw an error or return a specific value
    }
    // Return the second-to-last segment
    return segments[segments.length - 2]
  } catch (error) {
    console.error("Invalid URL provided:", error)
    return null
  }
}

export function stripQueryParameters(url: string) {
  try {
    const parsedUrl = new URL(url)
    // Set the search property to an empty string to remove the query parameters
    parsedUrl.search = ""
    return parsedUrl.toString()
  } catch (error) {
    console.error("Invalid URL provided:", error)
    return null
  }
}

function getNonEmptyPathSegments(url: string) {
  // Create a URL object
  const parsedUrl = new URL(url)
  // Get the pathname from the URL object and split it by '/'
  const pathSegments = parsedUrl.pathname.split("/")
  // Filter out empty segments (e.g., from leading or trailing slashes)
  const filteredSegments = pathSegments.filter((segment) => segment)

  return filteredSegments
}
