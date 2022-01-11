interface Meta {
  page: number;
  take: number;
  item_count: number;
  page_count: number;
  has_previous_page: boolean;
  has_next_page: boolean;
}

export interface Pagination<T> {
  data: T[];
  dataFilter?: T[];
  meta: Meta;
}
