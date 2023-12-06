let hero = {
  name: 'Batman',
  xp: 10000,
}

let level;

switch (true) {
  case (hero.xp < 1000):
    level ='Iron'
    break
  case (hero.xp >=1001 && hero.xp <=2000):
    level ='Bronze'
    break
  case (hero.xp >=2001 && hero.xp <=6000):
    level ='Silver'
    break
  case (hero.xp >=6001 && hero.xp <=7000):
    level ='Gold'
    break
  case (hero.xp >=7001 && hero.xp <=8000):
    level ='Platinum'
    break
  case (hero.xp >=8001 && hero.xp <=9000):
    level ='Ascendant'
    break
  case (hero.xp >=9001 && hero.xp < 10000):
    level ='Imortal'
    break
  case (hero.xp >= 10000):
    level ='Radiant'
    break
}

console.log(`The hero ${hero.name} is at the level ${level}.`)