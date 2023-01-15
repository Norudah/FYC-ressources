const destroyTheEnemy = (enemy) => {
  const target = identifyTheTarget(enemy);
  const oblivion = new Machine({
    type: "battleship",
  });
  oblivion.lunchTheNuclearMissile(target);
  enemy.health = 0;
  return enemy;
};
