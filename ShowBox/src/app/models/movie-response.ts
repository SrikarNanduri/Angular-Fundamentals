import {Result} from './results';

export interface MovieResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Result[];
}
