export interface Book22 {
        width: number;
        height: number;
        zoom: number;
        cover?: Cover;
        pages: BookPageSide[];
        pageWidth?: number;
        pageHeight?: number;
        startPageType?: PageType;
        endPageType?: PageType;
}
interface Cover {
    front: BookPageSide;
    back: BookPageSide;
  }
  
  enum PageType {
    Single,
    Double
  }
  
  interface BookPageSide {
    imageUrl: string;
    backgroundColor?: string;
    opacity?: number;
  }
