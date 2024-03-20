export interface WoolworthsResult {
  Products: WoolworthsResultProduct[]
  Corrections: null
  SearchResultsCount: number
  VisualShoppingAisleResponse: any[]
  Aggregations: Aggregation[]
  HasTobaccoItems: boolean
  Passes: null
  SuggestedTerm: null
  FacetFilters: null
}

export interface Aggregation {
  Name: string
  DisplayName: string
  Type: string
  FilterType: string
  FilterDataType: string
  Results: Result[] | null
  ResultsGrouped: ResultsGrouped[] | null
  State: string
  Rank: number
  AdditionalResults: boolean
  DesignType: string
  ShowFilter: boolean
  Statement: null | string
  DisplayCoachMarks: boolean
  DisplayIcons: boolean
}

export interface Result {
  Name: string
  Term: string
  ExtraOutputFields: ExtraOutputFields
  Min: null
  Max: null
  Applied: boolean
  Count: number
  Statement: null | string
  DisplayCoachMarks: boolean
}

export interface ExtraOutputFields {
  description?: string
  nodelevel?: number
  displayorder?: number
  parentnodeid?: Parentnodeid | null
}

export type Parentnodeid = '1-4A3B264C';

export interface ResultsGrouped {
  Alphabet: string
  Filters: Result[]
}

export interface WoolworthsResultProduct {
  Products: ProductProduct[]
  Name: string
  DisplayName: string
}

export interface ProductProduct {
  TileID: number
  Stockcode: number
  Barcode: string
  GtinFormat: number
  CupPrice: number
  InstoreCupPrice: number
  CupMeasure: string
  CupString: string
  InstoreCupString: string
  HasCupPrice: boolean
  InstoreHasCupPrice: boolean
  Price: number
  InstorePrice: number
  Name: string
  DisplayName: string
  UrlFriendlyName: string
  Description: string
  SmallImageFile: string
  MediumImageFile: string
  LargeImageFile: string
  IsNew: boolean
  IsHalfPrice: boolean
  IsOnlineOnly: boolean
  IsOnSpecial: boolean
  InstoreIsOnSpecial: boolean
  IsEdrSpecial: boolean
  SavingsAmount: number
  InstoreSavingsAmount: number
  WasPrice: number
  InstoreWasPrice: number
  QuantityInTrolley: number
  Unit: string
  MinimumQuantity: number
  HasBeenBoughtBefore: boolean
  IsInTrolley: boolean
  Source: string
  SupplyLimit: number
  ProductLimit: number
  MaxSupplyLimitMessage: string
  IsRanged: boolean
  IsInStock: boolean
  PackageSize: string
  IsPmDelivery: boolean
  IsForCollection: boolean
  IsForDelivery: boolean
  IsForExpress: boolean
  ProductRestrictionMessage: null
  ProductWarningMessage: null
  CentreTag: Tag
  IsCentreTag: boolean
  ImageTag: Tag
  HeaderTag: null
  HasHeaderTag: boolean
  UnitWeightInGrams: number
  SupplyLimitMessage: string
  SmallFormatDescription: string
  FullDescription: string
  IsAvailable: boolean
  InstoreIsAvailable: boolean
  IsPurchasable: boolean
  InstoreIsPurchasable: boolean
  AgeRestricted: boolean
  DisplayQuantity: number
  RichDescription: null
  HideWasSavedPrice: boolean
  SapCategories: null
  Brand: null | string
  IsRestrictedByDeliveryMethod: boolean
  FooterTag: Tag
  IsFooterEnabled: boolean
  Diagnostics: string
  IsBundle: boolean
  IsInFamily: boolean
  ChildProducts: null
  UrlOverride: null
  AdditionalAttributes: Record<string, null | string>
  DetailsImagePaths: string[]
  Variety: null | string
  Rating: Record<string, number>
  HasProductSubs: boolean
  IsSponsoredAd: boolean
  AdID: null | string
  AdIndex: number | null
  IsMarketProduct: boolean
  IsGiftable: boolean
  Vendor: null
  Untraceable: boolean
  ThirdPartyProductInfo: boolean
  MarketFeatures: null
  MarketSpecifications: null
  SupplyLimitSource: string
  Tags: TagElement[] | null
  IsPersonalisedByPurchaseHistory: boolean
  IsFromFacetedSearch: boolean
  NextAvailabilityDate: Date
  NumberOfSubstitutes: number
  IsPrimaryVariant: boolean
  VariantGroupId: number
  HasVariants: boolean
  VariantTitle: null
  IsTobacco: boolean
}

export interface Tag {
  TagContent: null | string
  TagLink: null
  FallbackText: null | string
  TagType: string
  MultibuyData: null
  MemberPriceData: null
  TagContentText: null
  DualImageTagContent: null
  PromotionType: string
  IsRegisteredRewardCardPromotion: boolean
}

export interface TagElement {
  Content: Content
  TemplateId: null
  Metadata: null
}

export interface Content {
  Type: string
  Position: string
  Attributes: Attributes
}

export interface Attributes {
  ImagePath: string
  FallbackText: string
}
