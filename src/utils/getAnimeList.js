import { gql } from "graphql-tag"

const GET_ANIME_LIST_QUERY = gql`
    query ($id: Int, $id_in: [Int], $page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (id: $id, id_in: $id_in , search: $search) {
                id
                title {
                    romaji
                    english
                }
                episodes
                duration
                genres
                description
                averageScore
                popularity
                coverImage {
                    extraLarge
                    large
                    medium
                    color
                }
                status
                season
                characters {
                    nodes {
                        name {
                            full
                        }
                        image {
                            large
                            medium
                        }
                    }
                }
            }
        }
    }
`;

const GET_ANIME_DETAIL_QUERY = gql`
    query ($id: Int) {
        Media (id: $id) {
            id
            title {
                romaji
                english
            }
            episodes
            duration
            genres
            description
            averageScore
            popularity
            coverImage {
                extraLarge
                large
                medium
                color
            }
            status
            season
            characters {
                nodes {
                    name {
                        full
                    }
                    image {
                        large
                        medium
                    }
                }
            }
        }
    }
`;

export {
    GET_ANIME_LIST_QUERY,
    GET_ANIME_DETAIL_QUERY
}