export interface IDropdownSettings {
  singleSelection?: boolean;
  idField?: string;
  textField?: string;
  tooltipField?:string;
  enableCheckAll?: boolean;
  selectAllText?: string;
  unSelectAllText?: string;
  allowSearchFilter?: boolean;
  clearSearchFilter?: boolean;
  maxHeight?: number;
  itemsShowLimit?: number;
  limitSelection?: number;
  searchPlaceholderText?: string;
  noDataAvailablePlaceholderText?: string;
  closeDropDownOnSelection?: boolean;
  showSelectedItemsAtTop?: boolean;
  defaultOpen?: boolean;
}

export class ListItem {
  id: String;
  text: String;
  tooltip: String;

  public constructor(source: any) {
    if (typeof source === 'string') {
      this.id = this.text = this.tooltip = source;
    }
    if (typeof source === 'object') {
      console.log(source);
      this.id = source.id;
      this.text = source.text;
      this.tooltip = source.tooltip;
    }
  }
}
