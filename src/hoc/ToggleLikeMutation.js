import { gql, useMutation } from "@apollo/client";

export const useLikePhoto = () => {
  const LIKE_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!) {
      likePhoto(input: $input) {
        id
        liked
        likes
      }
    }
  `;
  const [ toggleLike ] = useMutation(LIKE_PHOTO);
  
  return [ toggleLike ];
};

// import React from "react";
// import { gql } from "@apollo/client";
// import { Mutation } from "react-apollo";

// const LIKE_PHOTO = gql`
//   mutation likePhoto($input: LikePhoto!) {
//     likePhoto(input: $input) {
//       id
//       liked
//       likes
//     }
//   }
// `;

// export const ToggleLikeMutation = ({ children }) => {
//   return <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>;
// };
