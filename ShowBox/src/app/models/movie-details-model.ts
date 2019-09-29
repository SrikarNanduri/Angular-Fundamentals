
// tslint:disable-next-line: no-namespace
namespace MovieDetailsModel {

    export interface BelongsToCollection {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    }

    export interface Genre {
        id: number;
        name: string;
    }

    export interface ProductionCompany {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }

    export interface ProductionCountry {
        iso_3166_1: string;
        name: string;
    }

    export interface SpokenLanguage {
        iso_639_1: string;
        name: string;
    }

    export interface VideoResults {
        id: string;
        iso_639_1: string;
        iso_3166_1: string;
        key: string;
        name: string;
        site: string;
        size: number;
        type: string;
    }

    export interface Videos {
        results: VideoResults[];
    }

    export interface Cast {
        cast_id: number;
        character: string;
        credit_id: string;
        gender: number;
        id: number;
        name: string;
        order: number;
        profile_path: string;
    }

    export interface Crew {
        credit_id: string;
        department: string;
        gender: number;
        id: number;
        job: string;
        name: string;
        profile_path: string;
    }

    export interface Credits {
        cast: Cast[];
        crew: Crew[];
    }

    export interface ReviewResults {
        author: string;
        content: string;
        id: string;
        url: string;
    }

    export interface Reviews {
        page: number;
        results: ReviewResults[];
        total_pages: number;
        total_results: number;
    }

    export interface ExternalIds {
        imdb_id: string;
        facebook_id: string;
        instagram_id: string;
        twitter_id: string;
    }

    export interface SimilarResults {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        popularity: number;
    }

    export interface Similar {
        page: number;
        results: SimilarResults[];
        total_pages: number;
        total_results: number;
    }

    export interface MovieDetails {
        adult: boolean;
        backdrop_path: string;
        belongs_to_collection: BelongsToCollection;
        budget: number;
        genres: Genre[];
        homepage: string;
        id: number;
        imdb_id: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        production_companies: ProductionCompany[];
        production_countries: ProductionCountry[];
        release_date: string;
        revenue: number;
        runtime: number;
        spoken_languages: SpokenLanguage[];
        status: string;
        tagline: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        videos: Videos;
        credits: Credits;
        reviews: Reviews;
        external_ids: ExternalIds;
        similar: Similar;
    }
}
