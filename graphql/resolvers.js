const peoples = [
  {
    id: 1,
    name: "genie1",
    age: 4,
  },
  {
    id: 2,
    name: "genie2",
    age: 8,
  },
];

const resolvers = {
  Query: {
    people: () => peoples,
    person: (_, { id }) => peoples.filter((people) => people.id === id)[0],
  },
};

export default resolvers;
