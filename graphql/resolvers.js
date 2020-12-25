const genie = {
  name: "genie",
  age: 4,
};

const resolvers = {
  Query: {
    person: () => genie,
  },
};

export default resolvers;
