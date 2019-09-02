import { LitElement, css, svg } from "lit-element";
import Random from "./random.js";

const assetsFolder = "src/assets/";
class AAvataaar extends LitElement {
  static get topTypes() {
    return {
      NoHair: assetsFolder + "top/NoHair.svg",
      Eyepatch: assetsFolder + "top/Eyepatch.svg",
      Hat: assetsFolder + "top/Hat.svg",
      Hijab: assetsFolder + "top/Hijab.svg",
      Turban: assetsFolder + "top/Turban.svg",
      WinterHat1: assetsFolder + "top/WinterHat1.svg",
      WinterHat2: assetsFolder + "top/WinterHat2.svg",
      WinterHat3: assetsFolder + "top/WinterHat3.svg",
      WinterHat4: assetsFolder + "top/WinterHat4.svg",
      LongHairBigHair: assetsFolder + "top/LongHairBigHair.svg",
      LongHairBob: assetsFolder + "top/LongHairBob.svg",
      LongHairBun: assetsFolder + "top/LongHairBun.svg",
      LongHairCurly: assetsFolder + "top/LongHairCurly.svg",
      LongHairCurvy: assetsFolder + "top/LongHairCurvy.svg",
      LongHairDreads: assetsFolder + "top/LongHairDreads.svg",
      LongHairFrida: assetsFolder + "top/LongHairFrida.svg",
      LongHairFro: assetsFolder + "top/LongHairFro.svg",
      LongHairFroBand: assetsFolder + "top/LongHairFroBand.svg",
      LongHairNotTooLong: assetsFolder + "top/LongHairNotTooLong.svg",
      LongHairShavedSides: assetsFolder + "top/LongHairShavedSides.svg",
      LongHairMiaWallace: assetsFolder + "top/LongHairMiaWallace.svg",
      LongHairStraight: assetsFolder + "top/LongHairStraight.svg",
      LongHairStraight2: assetsFolder + "top/LongHairStraight2.svg",
      LongHairStraightStrand: assetsFolder + "top/LongHairStraightStrand.svg",
      ShortHairDreads01: assetsFolder + "top/ShortHairDreads01.svg",
      ShortHairDreads02: assetsFolder + "top/ShortHairDreads02.svg",
      ShortHairFrizzle: assetsFolder + "top/ShortHairFrizzle.svg",
      ShortHairShaggyMullet: assetsFolder + "top/ShortHairShaggyMullet.svg",
      ShortHairShortCurly: assetsFolder + "top/ShortHairShortCurly.svg",
      ShortHairShortFlat: assetsFolder + "top/ShortHairShortFlat.svg",
      ShortHairShortRound: assetsFolder + "top/ShortHairShortRound.svg",
      ShortHairShortWaved: assetsFolder + "top/ShortHairShortWaved.svg",
      ShortHairSides: assetsFolder + "top/ShortHairSides.svg",
      ShortHairTheCaesar: assetsFolder + "top/ShortHairTheCaesar.svg",
      ShortHairTheCaesarSidePart:
        assetsFolder + "top/ShortHairTheCaesarSidePart.svg"
    };
  }
  static get accessoriesTypes() {
    return {
      Blank: assetsFolder + "top/accessories/Blank.svg",
      Kurt: assetsFolder + "top/accessories/Kurt.svg",
      Prescription01: assetsFolder + "top/accessories/Prescription01.svg",
      Prescription02: assetsFolder + "top/accessories/Prescription02.svg",
      Round: assetsFolder + "top/accessories/Round.svg",
      Sunglasses: assetsFolder + "top/accessories/Sunglasses.svg",
      Wayfarers: assetsFolder + "top/accessories/Wayfarers.svg"
    };
  }
  static get hatColors() {
    return {
      Black: "#262E33",
      Blue01: "#65C9FF",
      Blue02: "#5199E4",
      Blue03: "#25557C",
      Gray01: "##E6E6E6",
      Gray02: "#929598",
      Heather: "#3C4F5C",
      PastelBlue: "#B1E2FF",
      PastelGreen: "#A7FFC4",
      PastelOrange: "#FFDEB5",
      PastelRed: "#FFAFB9",
      PastelYellow: "#FFFFB1",
      Pink: "#FF488E",
      Red: "#FF5C5C",
      White: "#FFFFFF"
    };
  }
  static get hairColors() {
    return {
      Auburn: "#A55728",
      Black: "#2C1B18",
      Blonde: "#B58143",
      BlondeGolden: "#D6B370",
      Brown: "#724133",
      BrownDark: "#4A312C",
      PastelPink: "#F59797",
      Platinum: "#ECDCBF",
      Red: "#C93305",
      SilverGray: "#E8E1E1"
    };
  }
  static get facialHairTypes() {
    return {
      Blank: assetsFolder + "top/facialHair/Blank.svg",
      BeardMedium: assetsFolder + "top/facialHair/BeardMedium.svg",
      BeardLight: assetsFolder + "top/facialHair/BeardLight.svg",
      BeardMajestic: assetsFolder + "top/facialHair/BeardMajestic.svg",
      MoustacheFancy: assetsFolder + "top/facialHair/MoustacheFancy.svg",
      MoustacheMagnum: assetsFolder + "top/facialHair/MoustacheMagnum.svg"
    };
  }
  static get clotheTypes() {
    return {
      BlazerShirt: assetsFolder + "clothes/BlazerShirt.svg",
      BlazerSweater: assetsFolder + "clothes/BlazerSweater.svg",
      CollarSweater: assetsFolder + "clothes/CollarSweater.svg",
      GraphicShirt: assetsFolder + "clothes/GraphicShirt.svg",
      Hoodie: assetsFolder + "clothes/Hoodie.svg",
      Overall: assetsFolder + "clothes/Overall.svg",
      ShirtCrewNeck: assetsFolder + "clothes/ShirtCrewNeck.svg",
      ShirtScoopNeck: assetsFolder + "clothes/ShirtScoopNeck.svg",
      ShirtVNeck: assetsFolder + "clothes/ShirtVNeck.svg"
    };
  }
  static get eyeTypes() {
    return {
      Close: assetsFolder + "eyes/Close.svg",
      Cry: assetsFolder + "eyes/Cry.svg",
      Default: assetsFolder + "eyes/Default.svg",
      Dizzy: assetsFolder + "eyes/Dizzy.svg",
      EyeRoll: assetsFolder + "eyes/EyeRoll.svg",
      Happy: assetsFolder + "eyes/Happy.svg",
      Hearts: assetsFolder + "eyes/Hearts.svg",
      Side: assetsFolder + "eyes/Side.svg",
      Squint: assetsFolder + "eyes/Squint.svg",
      Surprised: assetsFolder + "eyes/Surprised.svg",
      Wink: assetsFolder + "eyes/Wink.svg",
      WinkWacky: assetsFolder + "eyes/WinkWacky.svg"
    };
  }
  static get eyebrowTypes() {
    return {
      Angry: assetsFolder + "eyebrow/Angry.svg",
      AngryNatural: assetsFolder + "eyebrow/AngryNatural.svg",
      Default: assetsFolder + "eyebrow/Default.svg",
      DefaultNatural: assetsFolder + "eyebrow/DefaultNatural.svg",
      FlatNatural: assetsFolder + "eyebrow/FlatNatural.svg",
      FrownNatural: assetsFolder + "eyebrow/FrownNatural.svg",
      RaisedExcited: assetsFolder + "eyebrow/RaisedExcited.svg",
      RaisedExcitedNatural: assetsFolder + "eyebrow/RaisedExcitedNatural.svg",
      SadConcerned: assetsFolder + "eyebrow/SadConcerned.svg",
      SadConcernedNatural: assetsFolder + "eyebrow/SadConcernedNatural.svg",
      UnibrowNatural: assetsFolder + "eyebrow/UnibrowNatural.svg",
      UpDown: assetsFolder + "eyebrow/UpDown.svg",
      UpDownNatural: assetsFolder + "eyebrow/UpDownNatural.svg"
    };
  }
  static get mouthTypes() {
    return {
      Concerned: assetsFolder + "mouth/Concerned.svg",
      Default: assetsFolder + "mouth/Default.svg",
      Disbelief: assetsFolder + "mouth/Disbelief.svg",
      Eating: assetsFolder + "mouth/Eating.svg",
      Grimace: assetsFolder + "mouth/Grimace.svg",
      Sad: assetsFolder + "mouth/Sad.svg",
      ScreamOpen: assetsFolder + "mouth/ScreamOpen.svg",
      Serious: assetsFolder + "mouth/Serious.svg",
      Smile: assetsFolder + "mouth/Smile.svg",
      Tongue: assetsFolder + "mouth/Tongue.svg",
      Twinkle: assetsFolder + "mouth/Twinkle.svg",
      Vomit: assetsFolder + "mouth/Vomit.svg"
    };
  }
  static get skinColors() {
    return {
      Tanned: "#FD9841",
      Yellow: "#F8D25C",
      Pale: "#FFDBB4",
      Light: "#EDB98A",
      Brown: "#D08B5B",
      DarkBrown: "#AE5D29",
      Black: "#614335"
    };
  }

  static get properties() {
    return {
      identifier: { type: String },
      topType: { type: String },
      accessoriesType: { type: String },
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

  randomOption(optionMap) {
    const options = Object.values(optionMap);
    const index = this.random.nextInt(0, options.length);
    return options[index];
  }
  randomArrayOption(options) {
    const index = this.random.nextInt(0, options.length);
    return options[index];
  }

  set identifier(identifier) {
    this._identifier = identifier;
    const identifierSeed = this.hash(identifier);
    this.random = new Random(identifierSeed);

    this.noseType = assetsFolder + "nose/Default.svg";
    this.topType = this.randomOption(AAvataaar.topTypes);
    this.accessoriesType = this.randomOption(AAvataaar.accessoriesTypes);
    this.style.setProperty(
      "--avataaar-hair-color",
      this.randomOption(AAvataaar.hairColors)
    );
    this.facialHairType = this.randomOption(AAvataaar.facialHairTypes);
    this.clotheType = this.randomOption(AAvataaar.clotheTypes);
    this.eyeType = this.randomOption(AAvataaar.eyeTypes);
    this.eyebrowType = this.randomOption(AAvataaar.eyebrowTypes);
    this.mouthType = this.randomOption(AAvataaar.mouthTypes);
    this.style.setProperty(
      "--avataaar-skin-color",
      this.randomOption(AAvataaar.skinColors)
    );
    this.style.setProperty(
      "--avataaar-facial-hair-color",
      this.randomOption(AAvataaar.hairColors)
    );
    this.style.setProperty(
      "--avataaar-hat-color",
      this.randomOption(AAvataaar.hatColors)
    );
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
      :host {
        display: inline-block;
        width: 64px;
        --avataaar-circle-color: #65c9ff;
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
                    fill='var(--avataaar-circle-color)'>
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
                  <use fill='var(--avataaar-skin-color)' xlink:href='#path-silhouette' />
                  <path
                    d='M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z'
                    id='Neck-Shadow'
                    fillOpacity='0.100000001'
                    fill='#000000'
                    mask='url(#mask-silhouette)'
                  />
                </g>
                <image width="280" height="280" href="${this.clotheType}" ></image>
                <image width="280" height="280" href="${this.eyebrowType}" ></image>
                <image width="280" height="280" href="${this.eyeType}" ></image>
                <image width="280" height="280" href="${this.mouthType}" ></image>
                <image width="280" height="280" href="${this.noseType}" ></image>
                <image width="280" height="280" href="${this.topType}" ></image>
                <image width="280" height="280" href="${this.accessoriesType}" ></image>
                <image width="280" height="280" href="${this.facialHairType}" ></image>
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
