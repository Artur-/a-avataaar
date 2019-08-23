import { LitElement, html } from 'lit-element';
import Random from './random.js'

class AAvataaar extends LitElement {
  static get topTypes() { return ["NoHair", "Eyepatch", "Hat", "Hijab", "Turban", "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4", "LongHairBigHair", "LongHairBob", "LongHairBun", "LongHairCurly", "LongHairCurvy", "LongHairDreads", "LongHairFrida", "LongHairFro", "LongHairFroBand", "LongHairNotTooLong", "LongHairShavedSides", "LongHairMiaWallace", "LongHairStraight", "LongHairStraight2", "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"] }
  static get accessoriesTypes() { return ["Blank", "Kurt", "Prescription01", "Prescription02", "Round", "Sunglasses", "Wayfarers"] }
  static get hairColors() { return ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "PastelPink", "Platinum", "Red", "SilverGray"] }
  static get facialHairTypes() { return ["Blank", "BeardMedium", "BeardLight", "BeardMagestic", "MoustacheFancy", "MoustacheMagnum"] }
  static get clotheTypes() { return ["BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt", "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"] }
  static get eyeTypes() { return ["Close", "Cry", "Default", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side", "Squint", "Surprised", "Wink", "WinkWacky"] }
  static get eyebrowTypes() { return ["Close", "Cry", "Default", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side", "Squint", "Surprised", "Wink", "WinkWacky"] }
  static get mouthTypes() { return ["Concerned", "Default", "Disbelief", "Eating", "Grimace", "Sad", "ScreamOpen", "Serious", "Smile", "Tongue", "Twinkle", "Vomit"] }
  static get skinColors() { return ["Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black"] }

  static get properties() {
    return {
      identifier: { type: String },
      topType: { type: String },
      accessoriesType: { type: String },
      hairColor: { type: String },
      facialHairType: { type: String },
      clotheType: { type: String },
      eyeType: { type: String },
      eyebrowType: { type: String },
      mouthType: { type: String },
      skinColor: { type: String }
    };
  }

  // from https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript/7616484#7616484
  hash(str) {
    const hash = str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
    return hash >= 0 ? hash : -hash;
  }

  randomOption(options) {
    const index = this.random.nextInt(0, options.length);
    return options[index];
  }

  set identifier(identifier) {
    this._identifier = identifier;
    const identifierSeed = this.hash(identifier);
    this.random = new Random(identifierSeed);

    this.topType = this.randomOption(AAvataaar.topTypes);
    this.accessoriesType = this.randomOption(AAvataaar.accessoriesTypes);
    this.hairColor = this.randomOption(AAvataaar.hairColors);
    this.facialHairType = this.randomOption(AAvataaar.facialHairTypes);
    this.clotheType = this.randomOption(AAvataaar.clotheTypes);
    this.eyeType = this.randomOption(AAvataaar.eyeTypes);
    this.eyebrowType = this.randomOption(AAvataaar.eyebrowTypes);
    this.mouthType = this.randomOption(AAvataaar.mouthTypes);
    this.skinColor = this.randomOption(AAvataaar.skinColors);
  }

  get identifier() {
    return this._identifier;
  }
  constructor() {
    super();
    // Initialize properties
    this.identifier = "";
  }

  render() {
    return html`
      <style>
        :host { 
          display: inline-block; 
          width: 64px;
          height: 64px;
          }
        img {
          height: 100%;
        }
      </style>
      <img src='https://avataaars.io/?avatarStyle=Circle&topType=${this.topType}&accessoriesType=${this.accessoriesType}&hairColor=${this.hairColor}&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' />
    `;
  }

}
// Register the element with the browser
customElements.define('a-avataaar', AAvataaar);
