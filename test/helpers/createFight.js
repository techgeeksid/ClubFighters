const createFight = async (club, creator) => {
  let tx = await club.createFight({ from: creator });
  return tx.logs[0].args._id;
}

export default createFight;
