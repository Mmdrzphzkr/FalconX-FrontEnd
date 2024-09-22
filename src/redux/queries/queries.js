import { gql } from "@apollo/client";

const queries = {
  GET_HEADER_ITEMS: gql`
    query MenuItems {
      menu {
        menuItemsList {
          menuItems {
            ... on LinkMenuItem {
              contentItemVersionId
              displayText
              linkMenuItem {
                url
              }
            }
          }
        }
      }
    }
  `,
};

export default queries;
