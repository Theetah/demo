// Here we go again...

class Spell {

  constructor(name, casting_time, mp, sanity, components, dreamlands, description) {
    this.name = name;
    this.casting_time = casting_time;
    this.mp = mp;
    this.sanity = sanity;
    this.components = components;
    this.dreamlands = dreamlands;
    this.description = description;
  }

  get listStats() {
    return [this.name, this.casting_time, this.mp, this.sanity, this.components, this.dreamlands];
  }

}

var spells = [
  new Spell(
    "Shield",
    "Instantaneous",
    "1",
    "0",
    "---",
    true,
    `An invisible barrier of magical force appears and protects you.
    Until the start of your next turn, you have a -5 modifier to all
    damage you take, including against the triggering attack, and
    you take no damage from magic missile.`,
  ),
  new Spell(
    "Draft of the Sleepless",
    "5 hours",
    "4*",
    "2",
    "1 ounce of gold*",
    false,
    `\tFashions a drug that facilitates entry into a world of dream for
    one or more participants. Those drinking a draught fall asleep very
    quickly, for around four hours. The subjective length of the dream
    may be long or short (normally days or even years) and the memories
    of the dream may be distorted. All who drink of the same drug find
    themselves together in the dream. By the origin and proportion of
    the ingredients, the caster may guide dream entry into a specific
    area correlative to the Waking World, such as a specific city or
    to some special place or other dimension. The location may include
    the Dreamlands, or specific isolated dream realities.\n\t
    Casting the spell and mixing the drug takes about five hours. While
    most of the ingredients are reasonably easy to obtain, others may
    present a challenge. Differing versions of the recipe may exist,
    but one ingredient common to all is one ounce of gold. The result
    is a sweet, thin, brown, liquid. A mild narcotic effect relaxes
    the drinker and inclines him or her towards dreams. After the
    first, each additional draught made at the same time costs an
    additional magic point.`
  ),
  new Spell(
    "Freak Weather",
    "2 rounds",
    "10",
    "1d4",
    "---",
    false,
    `Causes freak weather events to occur. The caster can cause a
    lightning bolt to strike a certain area, a small hailstorm to
    occur, a semipowerful, localized wind to blow up from nowhere,
    or other similar effects. The caster has no direct control over
    the effect, and can only cause it to manifest in a given location.
    The location must be within sight of the caster.`
  ),
  new Spell(
    "Detect Thoughts",
    "1 round",
    "10",
    "1d2",
    "A copper piece",
    false,
    `\tFor the duration, you can read the thoughts of a certain creature.
    When you cast the spell you focus your mind on any one creature that
    you can see within 30 feet of you. If the creature you choose has an
    INT of 5 or lower or doesn’t speak any language, the creature is unaffected.
    You initially learn the surface thoughts of the creature—what is most on its
    mind in that moment. As an action, you can either shift your attention to another
    creature’s thoughts or attempt to probe deeper into the same creature’s mind.\n\t
    If you probe deeper, the target must make a contested POW roll.
    If it fails, you gain insight into its reasoning (if any), its emotional state,
    and something that looms large in its mind (such as something it worries over, loves, or hates).
    If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind
    and unless you shift your attention to another creature’s thoughts, the creature can use its
    action on its turn to make another contested POW roll; if it succeeds, the spell ends.
    Questions verbally directed at the target creature naturally shape the course of its thoughts,
    so this spell is particularly effective as part of an interrogation.`
  ),

  new Spell(
    "Moonlight",
    "1 round",
    "1*",
    "0",
    "Small silvery ball",
    false,
    `The wizard must first craft a small silvery ball, which when used
    with the spell, emits light equal to that of a full moon. The light
    dissipates darkness, shadows, and mist for 10 minutes (possibly even
    darkness or mist caused by another spell). The light is said to also
    reveal the outline of invisible creatures to the trained eye (a
    successful Spot Hidden roll is required). The area illuminated is
    equal to 3 cubic yards per magic point invested.`
  ),

  new Spell(
    "Siren's Song",
    "2 rounds",
    "6",
    "5",
    "---",
    false,
    `\tThrough an enchanting song or melody the caster beguiles a target
    into believing that the caster is all his or her heart desires.
    For the spell to take effect the caster must succeed in an opposed
    POW roll with the target: if successful, the target acts as if
    completely charmed by the caster—willing to act and say as the caster
    desires. If the target is compelled to undertake an action that would
    inflict harm on another whom the caster loves or upon the target him
    or herself a second opposed POW roll may be called for.
    \n\tThe spell affects all who hear the song, with each person affected
    needing to win an opposed POW roll with the caster to be unaffected.
    The spell’s effect lasts for 1D10 hours.`
  ),
  new Spell(
    "Goodwill of the Forest",
    "1 round",
    "1*",
    "0",
    "---",
    false,
    `\tCauses a target animal to treat the caster as a friend. The
    spell costs 1 magic point for every SIZ 5 points of the animal,
    and lasts for 24 hours. After this time, the animal remembers nothing
    of its previous friendliness. The spell does not allow supernatural
    communication between the caster and the animal but, instead affects
    the animal’s behavior. The animal cannot be used to run errands or
    engage in combat, as these acts require complicated direction that
    the caster cannot impart. However, friendly animals will share their
    warmth during sleep, and those that are normally predators will
    share hunted game.`
  ),
  new Spell(
    "Animate Flesh Thing",
    "3 minutes",
    "1*",
    "1d6",
    "Flesh",
    false,
    `\tUsed to animate dead skin and flesh, causing the resultant
    fleshy mass to become sentient and able to attack as the caster
    desires. As the words are spoken, the caster points at the carcass
    and the flesh melts from any bones, as do any organs, transforming
    into a thick, fleshy semi-liquid, which can move to capture or
    attack at the caster’s direction. The caster invests 1 magic point
    per 5 SIZ points animated.
    \n\tThe flesh thing continues to live for 24 hours unless killed,
    whereupon it seems to melt again into to a pool of smoking and
    stinking flesh. Within minutes the flesh has dissolved, leaving a
    nasty-smelling oily smear on the ground.`
  ),
];

window.addEventListener("load", function() {
  const tableHeader =
  `
  <tr>
    <th>Name</th>
    <th>Casting Time</th>
    <th>MP</th>
    <th>Sanity</th>
    <th>Components</th>
  </tr>
  `;
  const tbody = document.getElementById("table-body");

  var retStr = tableHeader;

  for (let i = 0; i < spells.length; i++) {

    const e = spells[i];

    var stats = e.listStats;

    var name = stats[0] + (stats[5] ? "<sup>D</sup>" : "");
    var castingTime = stats[1];
    var mpCost = stats[2];
    var sanityCost = stats[3];
    var components = stats[4];

    retStr += `<tr>`;
    retStr += `<td>${name}</td>`;
    retStr += `<td>${castingTime}</td>`;
    retStr += `<td>${mpCost}</td>`;
    retStr += `<td>${sanityCost}</td>`;
    retStr += `<td>${components}</td>`;
    retStr += `</tr>`;
  }

  tbody.innerHTML = retStr;
});
