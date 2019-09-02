import { LitElement, css, svg } from "lit-element";
import Random from "./random.js";

class AAvataaar extends LitElement {
  static get topTypes() {
    return {
      NoHair: "src/assets/top/NoHair.svg",
      Eyepatch: "src/assets/top/Eyepatch.svg",
      Hat: "src/assets/top/Hat.svg",
      Hijab: "src/assets/top/Hijab.svg",
      Turban: "src/assets/top/Turban.svg",
      WinterHat1: "src/assets/top/WinterHat1.svg",
      WinterHat2: "src/assets/top/WinterHat2.svg",
      WinterHat3: "src/assets/top/WinterHat3.svg",
      WinterHat4: "src/assets/top/WinterHat4.svg",
      LongHairBigHair: "src/assets/top/LongHairBigHair.svg",
      LongHairBob: "src/assets/top/LongHairBob.svg",
      LongHairBun: "src/assets/top/LongHairBun.svg",
      LongHairCurly: "src/assets/top/LongHairCurly.svg",
      LongHairCurvy: "src/assets/top/LongHairCurvy.svg",
      LongHairDreads: "src/assets/top/LongHairDreads.svg",
      LongHairFrida: "src/assets/top/LongHairFrida.svg",
      LongHairFro: "src/assets/top/LongHairFro.svg",
      LongHairFroBand: "src/assets/top/LongHairFroBand.svg",
      LongHairNotTooLong: "src/assets/top/LongHairNotTooLong.svg",
      LongHairShavedSides: "src/assets/top/LongHairShavedSides.svg",
      LongHairMiaWallace: "src/assets/top/LongHairMiaWallace.svg",
      LongHairStraight: "src/assets/top/LongHairStraight.svg",
      LongHairStraight2: "src/assets/top/LongHairStraight2.svg",
      LongHairStraightStrand: "src/assets/top/LongHairStraightStrand.svg",
      ShortHairDreads01: "src/assets/top/ShortHairDreads01.svg",
      ShortHairDreads02: "src/assets/top/ShortHairDreads02.svg",
      ShortHairFrizzle: "src/assets/top/ShortHairFrizzle.svg",
      ShortHairShaggyMullet: "src/assets/top/ShortHairShaggyMullet.svg",
      ShortHairShortCurly: "src/assets/top/ShortHairShortCurly.svg",
      ShortHairShortFlat: "src/assets/top/ShortHairShortFlat.svg",
      ShortHairShortRound: "src/assets/top/ShortHairShortRound.svg",
      ShortHairShortWaved: "src/assets/top/ShortHairShortWaved.svg",
      ShortHairSides: "src/assets/top/ShortHairSides.svg",
      ShortHairTheCaesar: "src/assets/top/ShortHairTheCaesar.svg",
      ShortHairTheCaesarSidePart:
        "src/assets/top/ShortHairTheCaesarSidePart.svg"
    };
  }
  static get accessoriesTypes() {
    return {
      Blank: "src/assets/top/accessories/Blank.svg",
      Kurt: "src/assets/top/accessories/Kurt.svg",
      Prescription01: "src/assets/top/accessories/Prescription01.svg",
      Prescription02: "src/assets/top/accessories/Prescription02.svg",
      Round: "src/assets/top/accessories/Round.svg",
      Sunglasses: "src/assets/top/accessories/Sunglasses.svg",
      Wayfarers: "src/assets/top/accessories/Wayfarers.svg"
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
      Blank: "src/assets/top/facialHair/Blank.svg",
      BeardMedium: "src/assets/top/facialHair/BeardMedium.svg",
      BeardLight: "src/assets/top/facialHair/BeardLight.svg",
      BeardMajestic: "src/assets/top/facialHair/BeardMajestic.svg",
      MoustacheFancy: "src/assets/top/facialHair/MoustacheFancy.svg",
      MoustacheMagnum: "src/assets/top/facialHair/MoustacheMagnum.svg"
    };
  }
  static get clotheTypes() {
    return {
      BlazerShirt: "src/assets/clothes/BlazerShirt.svg",
      BlazerSweater: "src/assets/clothes/BlazerSweater.svg",
      CollarSweater: "src/assets/clothes/CollarSweater.svg",
      GraphicShirt: "src/assets/clothes/GraphicShirt.svg",
      Hoodie: "src/assets/clothes/Hoodie.svg",
      Overall: "src/assets/clothes/Overall.svg",
      ShirtCrewNeck: "src/assets/clothes/ShirtCrewNeck.svg",
      ShirtScoopNeck: "src/assets/clothes/ShirtScoopNeck.svg",
      ShirtVNeck: "src/assets/clothes/ShirtVNeck.svg"
    };
  }
  static get eyeTypes() {
    return {
      Close: "src/assets/eyes/Close.svg",
      Cry: "src/assets/eyes/Cry.svg",
      Default: "src/assets/eyes/Default.svg",
      Dizzy: "src/assets/eyes/Dizzy.svg",
      EyeRoll: "src/assets/eyes/EyeRoll.svg",
      Happy: "src/assets/eyes/Happy.svg",
      Hearts: "src/assets/eyes/Hearts.svg",
      Side: "src/assets/eyes/Side.svg",
      Squint: "src/assets/eyes/Squint.svg",
      Surprised: "src/assets/eyes/Surprised.svg",
      Wink: "src/assets/eyes/Wink.svg",
      WinkWacky: "src/assets/eyes/WinkWacky.svg"
    };
  }
  static get eyebrowTypes() {
    return {
      Angry: "src/assets/eyebrow/Angry.svg",
      AngryNatural: "src/assets/eyebrow/AngryNatural.svg",
      Default: "src/assets/eyebrow/Default.svg",
      DefaultNatural: "src/assets/eyebrow/DefaultNatural.svg",
      FlatNatural: "src/assets/eyebrow/FlatNatural.svg",
      FrownNatural: "src/assets/eyebrow/FrownNatural.svg",
      RaisedExcited: "src/assets/eyebrow/RaisedExcited.svg",
      RaisedExcitedNatural: "src/assets/eyebrow/RaisedExcitedNatural.svg",
      SadConcerned: "src/assets/eyebrow/SadConcerned.svg",
      SadConcernedNatural: "src/assets/eyebrow/SadConcernedNatural.svg",
      UnibrowNatural: "src/assets/eyebrow/UnibrowNatural.svg",
      UpDown: "src/assets/eyebrow/UpDown.svg",
      UpDownNatural: "src/assets/eyebrow/UpDownNatural.svg"
    };
  }
  static get mouthTypes() {
    return {
      Concerned: "src/assets/mouth/Concerned.svg",
      Default: "src/assets/mouth/Default.svg",
      Disbelief: "src/assets/mouth/Disbelief.svg",
      Eating: "src/assets/mouth/Eating.svg",
      Grimace: "src/assets/mouth/Grimace.svg",
      Sad: "src/assets/mouth/Sad.svg",
      ScreamOpen: "src/assets/mouth/ScreamOpen.svg",
      Serious: "src/assets/mouth/Serious.svg",
      Smile: "src/assets/mouth/Smile.svg",
      Tongue: "src/assets/mouth/Tongue.svg",
      Twinkle: "src/assets/mouth/Twinkle.svg",
      Vomit: "src/assets/mouth/Vomit.svg"
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

    this.noseType = "src/assets/nose/Default.svg";
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
