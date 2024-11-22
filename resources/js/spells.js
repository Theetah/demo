// Here we go again...

class Spell {
  constructor(name, castingTime, mp, sanity, components, dreamlands, description, href) {
    this.name = name;
    this.castingTime = castingTime;
    this.mp = mp;
    this.sanity = sanity;
    this.components = components;
    this.dreamlands = dreamlands;
    this.description = description;
    this.href = href;
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
    "/demo/spells/shield.html"
  ),

  new Spell(
    "Draft of the Sleepless",
    "5 hours",
    "4<sup>*</sup>",
    "2",
    "1 ounce of gold<sup>*</sup>",
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
    additional magic point.`,
    "/demo/spells/draft-of-the-sleepless.html"
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
    The location must be within sight of the caster.`,
    "/demo/spells/freak-weather.html"
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
    so this spell is particularly effective as part of an interrogation.`,
    "/demo/spells/detect-thoughts.html"
  ),

  new Spell(
    "Moonlight",
    "1 round",
    "1<sup>*</sup>",
    "0",
    "Small silvery ball",
    false,
    `The wizard must first craft a small silvery ball, which when used
    with the spell, emits light equal to that of a full moon. The light
    dissipates darkness, shadows, and mist for 10 minutes (possibly even
    darkness or mist caused by another spell). The light is said to also
    reveal the outline of invisible creatures to the trained eye (a
    successful Spot Hidden roll is required). The area illuminated is
    equal to 3 cubic yards per magic point invested.`,
    "/demo/spells/moonlight.html"
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
    The spell’s effect lasts for 1D10 hours.`,
    "/demo/spells/siren-song.html"
  ),

  new Spell(
    "Goodwill of the Forest",
    "1 round",
    "1<sup>*</sup>",
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
    share hunted game.`,
    "/demo/spells/goodwill-of-the-forest.html"
  ),

  new Spell(
    "Animate Flesh Thing",
    "3 minutes",
    "1<sup>*</sup>",
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
    nasty-smelling oily smear on the ground.`,
    "/demo/spells/animate-flesh-thing.html"
  ),
];

spells.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

let path = window.location.pathname;
let page = path.split("/").pop();

// wait for load, since JS runs even when the page elements aren't even loaded
window.addEventListener("load", function() {
  if (page == "spells.html") {
    // ...then page is spell-list
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

      const spell = spells[i];

      // state if the spell is dreamlands only
      var name = spell.name + (spell.dreamlands ? "<sup>D</sup>" : "");
      // "link-ify" the name if a page for it exists
      name = typeof(spell.href) !== "undefined" ? `<a href=${spell.href}>${name}</a>` : name;

      retStr += `<tr>`;
      retStr += `<td>${name}</td>`;
      retStr += `<td>${spell.castingTime}</td>`;
      retStr += `<td>${spell.mp}</td>`;
      retStr += `<td>${spell.sanity}</td>`;
      retStr += `<td>${spell.components}</td>`;
      retStr += `</tr>`;
    }

    tbody.innerHTML = retStr;
  } else {
    // ...then the page is over a specific spell

    var chosenSpell = null;
    for (let i = 0; i < spells.length; i++) {
      const spell = spells[i];
      chosenSpell = path == spell.href ? spell : chosenSpell;
    }

    let main = document.getElementById("main-section");

    if (chosenSpell != null) {

      main.innerHTML =
      `
        <a href="/demo/spells.html">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed">
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
          </svg>
        </a>
        <h2>${chosenSpell.name}</h2>
        <p>
          <b>Casting Time:</b> ${chosenSpell.castingTime}<br>
          <b>Magic Points:</b> ${chosenSpell.mp}<br>
          <b>Sanity Cost:</b> ${chosenSpell.sanity}<br>
          <b>Components:</b> ${chosenSpell.components}<br>
          <b>Dreamlands?</b> ${chosenSpell.dreamlands}<br>
        </p>
        <hr>
        <p>${chosenSpell.description}</p>
      `;
    } else {
      // ...then the spell page doesn't seem to even exist. uh oh!
      console.log("Spell page does not seem to exist. Redirecting to spells.html!");
      window.location.replace("spells.html");
    }

  }
});
