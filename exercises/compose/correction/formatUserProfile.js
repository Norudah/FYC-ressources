import { compose } from "./compose.js";

const formatUsername = (user) => (user && user.username ? { ...user, username: user.username.toUpperCase() } : user);
const formatEmail = (user) => (user && user.email ? { ...user, email: user.email.toLowerCase() } : user);
const formatBio = (user) => (user && user.bio ? { ...user, bio: user.bio.slice(0, 61) } : user);
const getUser = (user) => user;

const formatUserProfile = compose(getUser, formatBio, formatEmail, formatUsername);

const omgJesus = {
  username: "Omjesus",
  email: "OMJesus@example.com",
  bio: "J'aime beaucoup les saucisses et les pommes de terre sautées. Le barbecue est mon ami.",
};

console.log(formatUserProfile(omgJesus));

// Result :

// const omgJesus = {
//   username: "Omjesus",
//   email: "OMJesus@example.com",
//   bio: "J'aime beaucoup les saucisses et les pommes de terre sautées. Le barbecue est mon ami.",
// };
