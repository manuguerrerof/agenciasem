// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogDocumentDataSlicesSlice = never;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Date Published field in *Blog*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.date_published
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_published: prismic.DateField;

  /**
   * Title field in *Blog*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Content field in *Blog*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice> /**
   * Meta Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

type BlogListingDocumentDataSlicesSlice = never;

/**
 * Content for Blog Listing documents
 */
interface BlogListingDocumentData {
  /**
   * Heading field in *Blog Listing*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_listing.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Content field in *Blog Listing*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_listing.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Featured Post field in *Blog Listing*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_listing.featured_post
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  featured_post: prismic.ContentRelationshipField<"blog">;

  /**
   * Other Blogs Title field in *Blog Listing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_listing.other_blogs_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  other_blogs_title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Blog Listing*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_listing.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogListingDocumentDataSlicesSlice> /**
   * Meta Title field in *Blog Listing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_listing.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Blog Listing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_listing.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog Listing*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_listing.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Blog Listing document from Prismic
 *
 * - **API ID**: `blog_listing`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogListingDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<BlogListingDocumentData>,
    "blog_listing",
    Lang
  >;

type FooterDocumentDataSlicesSlice = FooterBlockSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Logo field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Disclaimer field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.disclaimer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  disclaimer: prismic.RichTextField;

  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

/**
 * Item in *Header → Navigation Items*
 */
export interface HeaderDocumentDataNavigationItemsItem {
  /**
   * Label field in *Header → Navigation Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation_items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Small Label field in *Header → Navigation Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation_items[].small_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  small_label: prismic.KeyTextField;

  /**
   * Link field in *Header → Navigation Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation_items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Logo field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * CTA Icon field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cta_icon: prismic.ImageField<never>;

  /**
   * CTA Text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;

  /**
   * CTA Link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * Navigation Items field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation_items: prismic.GroupField<
    Simplify<HeaderDocumentDataNavigationItemsItem>
  >;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | OurTeamSlice
  | LeadMagnetSlice
  | FaqSlice
  | VideoTestimonialSlice
  | CtaSlice
  | FeatureSlice
  | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Primary Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.primary_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  primary_color: prismic.ColorField;

  /**
   * Secondary Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.secondary_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  secondary_color: prismic.ColorField;

  /**
   * Text Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.text_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  text_color: prismic.ColorField;

  /**
   * Background Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.background_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background_color: prismic.ColorField;

  /**
   * GTM_ID field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.gtm_id
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  gtm_id: prismic.KeyTextField;

  /**
   * favicon field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.favicon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  favicon: prismic.ImageField<never> /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: Default Meta Info
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Default Meta Info
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Default Meta Info
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Item in *Video Testimonials → Video Testimonials*
 */
export interface VideoTestimonialsDocumentDataVideoTestimonialsItem {
  /**
   * Thumbnail Image field in *Video Testimonials → Video Testimonials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: video_testimonials.video_testimonials[].thumbnail_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail_image: prismic.ImageField<never>;

  /**
   * Name field in *Video Testimonials → Video Testimonials*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_testimonials.video_testimonials[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Short Review field in *Video Testimonials → Video Testimonials*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_testimonials.video_testimonials[].short_review
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  short_review: prismic.RichTextField;

  /**
   * Video Iframe field in *Video Testimonials → Video Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_testimonials.video_testimonials[].video_iframe
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  video_iframe: prismic.KeyTextField;
}

/**
 * Content for Video Testimonials documents
 */
interface VideoTestimonialsDocumentData {
  /**
   * Title field in *Video Testimonials*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_testimonials.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * CTA Text (for each video) field in *Video Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_testimonials.cta_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;

  /**
   * Video Testimonials field in *Video Testimonials*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: video_testimonials.video_testimonials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  video_testimonials: prismic.GroupField<
    Simplify<VideoTestimonialsDocumentDataVideoTestimonialsItem>
  >;
}

/**
 * Video Testimonials document from Prismic
 *
 * - **API ID**: `video_testimonials`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type VideoTestimonialsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<VideoTestimonialsDocumentData>,
    "video_testimonials",
    Lang
  >;

export type AllDocumentTypes =
  | BlogDocument
  | BlogListingDocument
  | FooterDocument
  | HeaderDocument
  | PageDocument
  | SettingsDocument
  | VideoTestimonialsDocument;

/**
 * Primary content in *Cta → Primary*
 */
export interface CtaSliceDefaultPrimary {
  /**
   * Top Small Icon field in *Cta → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.top_small_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  top_small_icon: prismic.ImageField<never>;

  /**
   * Main Text field in *Cta → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.main_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  main_text: prismic.RichTextField;

  /**
   * Secondary Text field in *Cta → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.secondary_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  secondary_text: prismic.RichTextField;

  /**
   * Below Text field in *Cta → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.below_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  below_text: prismic.RichTextField;

  /**
   * CTA Link field in *Cta → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * After CTA Text field in *Cta → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.after_cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  after_cta_text: prismic.RichTextField;
}

/**
 * Default variation for Cta Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CtaSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Cta → Primary*
 */
export interface CtaSliceIFramePrimary {
  /**
   * Top Small Icon field in *Cta → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.top_small_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  top_small_icon: prismic.ImageField<never>;

  /**
   * iFrame field in *Cta → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.iframe
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  iframe: prismic.KeyTextField;

  /**
   * After CTA Text field in *Cta → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.after_cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  after_cta_text: prismic.RichTextField;

  /**
   * Height(px) Affects Performnce Score field in *Cta → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.height
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  height: prismic.NumberField;

  /**
   * Maximum Width (px) (optional) field in *Cta → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.primary.max_width
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  max_width: prismic.NumberField;
}

/**
 * iFrame variation for Cta Slice
 *
 * - **API ID**: `iFrame`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSliceIFrame = prismic.SharedSliceVariation<
  "iFrame",
  Simplify<CtaSliceIFramePrimary>,
  never
>;

/**
 * Slice variation for *Cta*
 */
type CtaSliceVariation = CtaSliceDefault | CtaSliceIFrame;

/**
 * Cta Shared Slice
 *
 * - **API ID**: `cta`
 * - **Description**: Cta
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSlice = prismic.SharedSlice<"cta", CtaSliceVariation>;

/**
 * Primary content in *Faq → Primary*
 */
export interface FaqSliceDefaultPrimary {
  /**
   * Title field in *Faq → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *Faq → Items*
 */
export interface FaqSliceDefaultItem {
  /**
   * Question field in *Faq → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.items[].question
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  question: prismic.RichTextField;

  /**
   * Answer field in *Faq → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.items[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField;
}

/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FaqSliceDefaultPrimary>,
  Simplify<FaqSliceDefaultItem>
>;

/**
 * Slice variation for *Faq*
 */
type FaqSliceVariation = FaqSliceDefault;

/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: Faq
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSlice = prismic.SharedSlice<"faq", FaqSliceVariation>;

/**
 * Primary content in *Feature → Primary*
 */
export interface FeatureSliceDefaultPrimary {
  /**
   * Left Side Small Icon field in *Feature → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.left_side_small_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  left_side_small_icon: prismic.ImageField<never>;

  /**
   * Display Date? field in *Feature → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: feature.primary.display_date
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  display_date: prismic.BooleanField;

  /**
   * Heading_h2 field in *Feature → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.heading_h2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading_h2: prismic.RichTextField;

  /**
   * Content field in *Feature → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for Feature Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeatureSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Feature*
 */
type FeatureSliceVariation = FeatureSliceDefault;

/**
 * Feature Shared Slice
 *
 * - **API ID**: `feature`
 * - **Description**: Feature
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSlice = prismic.SharedSlice<
  "feature",
  FeatureSliceVariation
>;

/**
 * Primary content in *FooterBlock → Primary*
 */
export interface FooterBlockSliceDefaultPrimary {
  /**
   * Title field in *FooterBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_block.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *FooterBlock → Items*
 */
export interface FooterBlockSliceDefaultItem {
  /**
   * label field in *FooterBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_block.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * link field in *FooterBlock → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_block.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for FooterBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterBlockSliceDefaultPrimary>,
  Simplify<FooterBlockSliceDefaultItem>
>;

/**
 * Slice variation for *FooterBlock*
 */
type FooterBlockSliceVariation = FooterBlockSliceDefault;

/**
 * FooterBlock Shared Slice
 *
 * - **API ID**: `footer_block`
 * - **Description**: FooterBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterBlockSlice = prismic.SharedSlice<
  "footer_block",
  FooterBlockSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Left Side Small Icon field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.left_side_small_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  left_side_small_icon: prismic.ImageField<never>;

  /**
   * Heading H1 field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading_h1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading_h1: prismic.TitleField;

  /**
   * Heading H2 field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading_h2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading_h2: prismic.RichTextField;

  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Video Popup Iframe field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.video_popup_iframe
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  video_popup_iframe: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *LeadMagnet → Primary*
 */
export interface LeadMagnetSliceDefaultPrimary {
  /**
   * Intro field in *LeadMagnet → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: lead_magnet.primary.intro
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro: prismic.RichTextField;

  /**
   * Title field in *LeadMagnet → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: lead_magnet.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Image field in *LeadMagnet → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: lead_magnet.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Iframe field in *LeadMagnet → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: lead_magnet.primary.iframe
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  iframe: prismic.KeyTextField;
}

/**
 * Default variation for LeadMagnet Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LeadMagnetSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LeadMagnetSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *LeadMagnet*
 */
type LeadMagnetSliceVariation = LeadMagnetSliceDefault;

/**
 * LeadMagnet Shared Slice
 *
 * - **API ID**: `lead_magnet`
 * - **Description**: LeadMagnet
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LeadMagnetSlice = prismic.SharedSlice<
  "lead_magnet",
  LeadMagnetSliceVariation
>;

/**
 * Primary content in *OurTeam → Primary*
 */
export interface OurTeamSliceDefaultPrimary {
  /**
   * Title field in *OurTeam → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_team.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *OurTeam → Items*
 */
export interface OurTeamSliceDefaultItem {
  /**
   * Avatar field in *OurTeam → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: our_team.items[].avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;

  /**
   * Name field in *OurTeam → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_team.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Designation field in *OurTeam → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_team.items[].designation
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  designation: prismic.KeyTextField;
}

/**
 * Default variation for OurTeam Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurTeamSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OurTeamSliceDefaultPrimary>,
  Simplify<OurTeamSliceDefaultItem>
>;

/**
 * Slice variation for *OurTeam*
 */
type OurTeamSliceVariation = OurTeamSliceDefault;

/**
 * OurTeam Shared Slice
 *
 * - **API ID**: `our_team`
 * - **Description**: OurTeam
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurTeamSlice = prismic.SharedSlice<
  "our_team",
  OurTeamSliceVariation
>;

/**
 * Primary content in *VideoTestimonial → Primary*
 */
export interface VideoTestimonialSliceDefaultPrimary {
  /**
   * Select Video Testimonials field in *VideoTestimonial → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: video_testimonial.primary.select_video_testimonials
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  select_video_testimonials: prismic.ContentRelationshipField<"video_testimonials">;
}

/**
 * Default variation for VideoTestimonial Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoTestimonialSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoTestimonialSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *VideoTestimonial*
 */
type VideoTestimonialSliceVariation = VideoTestimonialSliceDefault;

/**
 * VideoTestimonial Shared Slice
 *
 * - **API ID**: `video_testimonial`
 * - **Description**: VideoTestimonial
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoTestimonialSlice = prismic.SharedSlice<
  "video_testimonial",
  VideoTestimonialSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      BlogListingDocument,
      BlogListingDocumentData,
      BlogListingDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataNavigationItemsItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      VideoTestimonialsDocument,
      VideoTestimonialsDocumentData,
      VideoTestimonialsDocumentDataVideoTestimonialsItem,
      AllDocumentTypes,
      CtaSlice,
      CtaSliceDefaultPrimary,
      CtaSliceIFramePrimary,
      CtaSliceVariation,
      CtaSliceDefault,
      CtaSliceIFrame,
      FaqSlice,
      FaqSliceDefaultPrimary,
      FaqSliceDefaultItem,
      FaqSliceVariation,
      FaqSliceDefault,
      FeatureSlice,
      FeatureSliceDefaultPrimary,
      FeatureSliceVariation,
      FeatureSliceDefault,
      FooterBlockSlice,
      FooterBlockSliceDefaultPrimary,
      FooterBlockSliceDefaultItem,
      FooterBlockSliceVariation,
      FooterBlockSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      LeadMagnetSlice,
      LeadMagnetSliceDefaultPrimary,
      LeadMagnetSliceVariation,
      LeadMagnetSliceDefault,
      OurTeamSlice,
      OurTeamSliceDefaultPrimary,
      OurTeamSliceDefaultItem,
      OurTeamSliceVariation,
      OurTeamSliceDefault,
      VideoTestimonialSlice,
      VideoTestimonialSliceDefaultPrimary,
      VideoTestimonialSliceVariation,
      VideoTestimonialSliceDefault,
    };
  }
}
