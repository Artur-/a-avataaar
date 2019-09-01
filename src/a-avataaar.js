import { LitElement, css, svg } from "lit-element";
import Random from "./random.js";

class AAvataaar extends LitElement {
  static get topTypes() {
    return [
      "NoHair",
      "Eyepatch",
      "Hat",
      "Hijab",
      "Turban",
      "WinterHat1",
      "WinterHat2",
      "WinterHat3",
      "WinterHat4",
      "LongHairBigHair",
      "LongHairBob",
      "LongHairBun",
      "LongHairCurly",
      "LongHairCurvy",
      "LongHairDreads",
      "LongHairFrida",
      "LongHairFro",
      "LongHairFroBand",
      "LongHairNotTooLong",
      "LongHairShavedSides",
      "LongHairMiaWallace",
      "LongHairStraight",
      "LongHairStraight2",
      "LongHairStraightStrand",
      "ShortHairDreads01",
      "ShortHairDreads02",
      "ShortHairFrizzle",
      "ShortHairShaggyMullet",
      "ShortHairShortCurly",
      "ShortHairShortFlat",
      "ShortHairShortRound",
      "ShortHairShortWaved",
      "ShortHairSides",
      "ShortHairTheCaesar",
      "ShortHairTheCaesarSidePart"
    ];
  }
  static get accessoriesTypes() {
    return [
      "Blank",
      "Kurt",
      "Prescription01",
      "Prescription02",
      "Round",
      "Sunglasses",
      "Wayfarers"
    ];
  }
  static get hairColors() {
    return [
      "Auburn",
      "Black",
      "Blonde",
      "BlondeGolden",
      "Brown",
      "BrownDark",
      "PastelPink",
      "Platinum",
      "Red",
      "SilverGray"
    ];
  }
  static get facialHairTypes() {
    return [
      "Blank",
      "BeardMedium",
      "BeardLight",
      "BeardMajestic",
      "MoustacheFancy",
      "MoustacheMagnum"
    ];
  }
  static get clotheTypes() {
    return [
      "BlazerShirt",
      "BlazerSweater",
      "CollarSweater",
      "GraphicShirt",
      "Hoodie",
      "Overall",
      "ShirtCrewNeck",
      "ShirtScoopNeck",
      "ShirtVNeck"
    ];
  }
  static get eyeTypes() {
    return [
      "Close",
      "Cry",
      "Default",
      "Dizzy",
      "EyeRoll",
      "Happy",
      "Hearts",
      "Side",
      "Squint",
      "Surprised",
      "Wink",
      "WinkWacky"
    ];
  }
  static get eyebrowTypes() {
    return [
      "Angry",
      "AngryNatural",
      "Default",
      "DefaultNatural",
      "FlatNatural",
      "FrownNatural",
      "RaisedExcited",
      "RaisedExcitedNatural",
      "SadConcerned",
      "SadConcernedNatural",
      "UnibrowNatural",
      "UpDown",
      "UpDownNatural"
    ];
  }
  static get mouthTypes() {
    return [
      "Concerned",
      "Default",
      "Disbelief",
      "Eating",
      "Grimace",
      "Sad",
      "ScreamOpen",
      "Serious",
      "Smile",
      "Tongue",
      "Twinkle",
      "Vomit"
    ];
  }
  static get skinColors() {
    return ["Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black"];
  }

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
      skinColor: { type: String },
      noseType: { type: String }
    };
  }

  // from https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript/7616484#7616484
  hash(str) {
    const hash = str
      .split("")
      .reduce(
        (prevHash, currVal) =>
          ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
        0
      );
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

    this.noseType = "Default";
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
  static get styles() {
    return css`
      svg {
        width: 64px;
      }
    `;
  }

  render() {
    return svg`
          <svg
        viewBox='0 0 264 280'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlns:xlink='http://www.w3.org/1999/xlink'>
        <desc>Created with getavataaars.com</desc>
        <defs>
          <circle id='path-1' cx='120' cy='120' r='120' />
          <path
            d='M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z'
            id='path-2'
          />
          <path
            d='M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z'
            id='path-silhouette'
          />
        </defs>
        <g
          id='Avataaar'
          stroke='none'
          stroke-width='1'
          fill='none'
          fill-rule='evenodd'>
          <g
            transform='translate(-825.000000, -1100.000000)'
            id='Avataaar/Circle'>
            <g transform='translate(825.000000, 1100.000000)'>
                <g
                  id='Circle'
                  stroke-width='1'
                  fill-rule='evenodd'
                  transform='translate(12.000000, 40.000000)'>
                  <mask id='mask-1' fill='white'>
                    <use xlink:href='#path-1' />
                  </mask>
                  <use
                    id='Circle-Background'
                    fill='#E6E6E6'
                    xlink:href='#path-1'
                  />
                  <g
                    id='Color/Palette/Blue-01'
                    mask='url(#mask-1)'
                    fill='#65C9FF'>
                    <rect id='🖍Color' x='0' y='0' width='240' height='240' />
                  </g>
                </g>
                <mask id='mask-2' fill='white'>
                  <use xlink:href='#path-2' />
                </mask>
              <g id='Mask' />
              <g
                id='Avataaar'
                stroke-width='1'
                fill-rule='evenodd'
                mask='url(#mask-2)'>
                <g id='Body' transform='translate(32.000000, 36.000000)'>
                  <mask id='mask-silhouette' fill='white'>
                    <use xlink:href='#path-silhouette' />
                  </mask>
                  <use fill='#D0C6AC' xlink:href='#path-silhouette' />
                 <!-- <Skin maskID='mask-silhouette' />-->
                  <path
                    d='M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z'
                    id='Neck-Shadow'
                    fillOpacity='0.100000001'
                    fill='#000000'
                    mask='url(#mask-silhouette)'
                  />
                </g>
                <image href="src/assets/clothes/${this.clotheType}.svg" ></image>
                <image href="src/assets/eyebrow/${this.eyebrowType}.svg" ></image>
                <image href="src/assets/eyes/${this.eyeType}.svg" ></image>
                <image href="src/assets/mouth/${this.mouthType}.svg" ></image>
                <image href="src/assets/nose/${this.noseType}.svg" ></image>
                <image href="src/assets/top/${this.topType}.svg" ></image>
                <image href="src/assets/top/accessories/${this.accessoriesType}.svg" ></image>
                <image href="src/assets/top/facialHair/${this.facialHairType}.svg" ></image>
              </g>
            </g>
          </g>
        </g>
      </svg>
`;
  }
}
// Register the element with the browser
customElements.define("a-avataaar", AAvataaar);
