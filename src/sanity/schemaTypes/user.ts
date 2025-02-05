export const userSchema = {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'userID',
      type: 'string',
      title: 'User ID',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'password',
      type: 'string',
      title: 'Password',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    },
  ],
};





// export const userSchema = {
//     name: 'user',
//     type: 'document',
//     title: 'User',
//     fields: [
//         {
//             name: 'userId',
//             type: 'string',
//             title: 'User ID',
//           },
//       {
//         name: 'name',
//         type: 'string',
//         title: 'Name',
//       },
//       {
//         name: 'email',
//         type: 'string',
//         title: 'Email',
        
//       },
//       {
//         name: 'password',
//         type: 'string',
//         title: 'Password',
//       },
//       {
//         name: 'image',
//         type: 'url',
//         title: 'user Image',
//         },
//     ],
// };