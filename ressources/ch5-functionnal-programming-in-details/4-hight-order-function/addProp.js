function addProp(something) {
  return function (prop, value) {
    return {
      ...something,
      [prop]: value,
    };
  };
}

const sword = {
  name: "Master Sword",
  type: "One handed sword",
};

const upgradeWeapon = addProp(sword);

upgradedSword1 = upgradeWeapon("pommel", "copper");
// { name: 'Master Sword', type: 'One handed sword', pommel: 'copper' }

upgradedSword2 = upgradeWeapon("grip", "leather");
// { name: 'Master Sword', type: 'One handed sword', grip: 'leather' }
