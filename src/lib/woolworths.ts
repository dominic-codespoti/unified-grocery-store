import * as Crypto from 'expo-crypto';
import type { ProductProduct, WoolworthsResult } from './woolworthsDtos';
import type { Product } from './types';

interface WoolworthsSearchResultPage {
  merchant: 'woolworths';
  keyword: string;
  products: Product[];
}

export class Woolworths {
  private sessionId: string | null = null;
  private baseUrl = 'https://www.woolworths.com.au';
  private headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3' };

  async search(keyword: string, page = 1, category?: string): Promise<WoolworthsSearchResultPage> {
    await this.initializeSession();

    const filters: { Key: string; Items: { Term: string }[] }[] = [];
    if (category === 'Fruit & vegetables') {
      filters.push({ Key: 'Category', Items: [{ Term: '1-E5BEE36E' }] });
    } else if (category) {
      console.warn(`Unsupported category: ${category}`);
    }

    const body = {
      Filters: filters,
      IsSpecial: false,
      Location: `/shop/search/products`,
      PageNumber: page,
      PageSize: 30,
      SearchTerm: keyword,
      SortType: 'TraderRelevance',
    };

    const response = await this.post('/apis/ui/Search/products', body);
    const data = await response.json() as WoolworthsResult;

    const products: Product[] = data.Products
      .flatMap((p) => p.Products)
      .filter((p) => !p.ThirdPartyProductInfo)
      .map((p, index: number) => this.preprocessProduct(p, keyword, index));

    return { merchant: 'woolworths', keyword, products };
  }

  private preprocessProduct(product: ProductProduct, keyword: string, index: number): Product {
    const displayName = product.DisplayName;
    const size = product.PackageSize;
    const url = `https://www.woolworths.com.au/shop/productdetails/${product.Stockcode}/${product.UrlFriendlyName}`;
    const imageUrl = `https://cdn0.woolworths.media/content/wowproductimages/large/${product.Stockcode}.jpg`;
    const isOnSpecial = product.IsOnSpecial;
    const label = product.IsNew ? 'New' : product.IsHalfPrice ? 'Half price' : null;

    return {
      vendor: 'Woolworths',
      name: displayName,
      size,
      priceInCents: product.Price * 100,
      pricePerUnit: product.CupPrice * 100,
      link: url,
      imageLink: imageUrl,
      updatedAt: Date.now(),
      notes: JSON.stringify({ isOnSpecial, label, index, keyword }),
    };
  }

  private get = (url: string, options?: RequestInit): Promise<Response> => {
    return fetch(`${this.baseUrl}${url}`, {
      headers: {
        ...this.headers,
        ...options?.headers,
      },
    });
  };

  private post = (url: string, body: any): Promise<Response> => {
    return fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      headers: {
        ...this.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  private async initializeSession() {
    if (!this.sessionId) {
      await this.get('/', { headers: { 'Cache-Control': 'no-cache' } });
      this.sessionId = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, new Date().toISOString());
    }
  }
}
