import { request, gql } from 'graphql-request';

const graphQLAPI = 'https://api-ap-south-1.hygraph.com/v2/cl7bpw7za3xcj01uld5rwh4m2/master';
export const getProducts = async () => {
  const query = gql`
    query getProducts {
      products {
        id
        image {
          url
        }
        name
        price
        rating
        brand
        totalRatingCount
      }
    }
  `;

  const results = await request(graphQLAPI, query);

  return results.products;
};
