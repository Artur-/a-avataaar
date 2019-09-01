import "../src/a-avataaar";
import { LitElement, html, css } from "lit-element";
import "j-elements";
import { repeat } from "lit-html/directives/repeat.js";

class VaadinTeam extends LitElement {
  static get styles() {
    return css`
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 164px;
        margin: 8px;
        padding: 8px;
      }
      .container {
        display: inline-block;
        font-size: 1.2rem;
        text-align: center;
      }
      a-avataaar {
        width: 124px;
      }
      .header-container {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
      h1 {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.15em;
        text-transform: uppercase;
      }
    `;
  }
  constructor() {
    super();
    this.names = [
      "Joonas Lehtinen",
      "Jurka Rahikkala",
      "Marc Englund",
      "Sami Ekblad",
      "Ville Ingman",
      "Mikael Vappula",
      "Tomi Virtanen",
      "Artur Signell",
      "Jouni Koivuviita",
      "Matti Tahvonen",
      "Hannu Salonen",
      "Henri Kerola",
      "Johannes Tuikkala",
      "Risto Yrjänä",
      "Kim Leppänen",
      "Jens Jansson",
      "Thomas Mattsson",
      "Teppo Kurki",
      "Peter Lehto",
      "Tomi Virkki",
      "Mikael Grankvist",
      "Petter Holmström",
      "Marcus Hellberg",
      "Petri Heinonen",
      "Anna Koskinen",
      "Johannes Häyry",
      "Leif Åstrand",
      "Samuli Penttilä",
      "Rolf Smeds",
      "Sami Viitanen",
      "Pekka Hyvönen",
      "Haijian Wang",
      "Mikołaj Olszewski",
      "Pekka Perälä",
      "Amir Al-Majdalawi",
      "Matti Hosio",
      "Joacim Päivärinne",
      "Artem Godin",
      "Minna Hohti",
      "Manuel Carrasco",
      "Jarmo Kemppainen",
      "Guillermo Alvarez",
      "Kari Kaitanen",
      "A.Mahdy AbdelAziz",
      "Murat Yamak",
      "Ville Saarinen",
      "Enver Haase",
      "Tatu Lund",
      "Alejandro Duarte",
      "Jürgen Treml",
      "Olli Tietäväinen",
      "Anton Platonov",
      "Kari Söderholm",
      "Shridhar Deshmukh",
      "Stepan Zolotarev",
      "Anssi Tuominen",
      "Vincent Tsai",
      "Wolfgang Fischlein",
      "Nikolai Gorokhov",
      "Jan Rucidlo",
      "Matthias Lottmann",
      "Sebastian Kühnau",
      "Eero Mäkelä",
      "Anna Emelyanova",
      "Paul Römer",
      "Vesa Nieminen",
      "Juha Seppänen",
      "Juuso Kantonen",
      "Riitta Pitkänen",
      "Ben Wilson",
      "Markus Lindfors",
      "Tien Nguyen",
      "Anastasia Smirnova",
      "Ibrahim Alkali",
      "Andrew Harvey",
      "Goran Atanasovski",
      "Seza Alkan",
      "Martin Vyšný",
      "Viktor Lukashov",
      "Rasmus Kuhlberg",
      "Ömer Tümer",
      "Susanna Laalo",
      "Sven Ruppert",
      "Mikko Inkinen",
      "Julia Toivonen",
      "Tim Hagström",
      "Gilberto Torrezan Filho",
      "Diego Cardoso",
      "Pekka Maanpää",
      "Sascha Merkel",
      "Sandy Doan",
      "Tan Bui",
      "Binh Bui",
      "Niko van Eeghen",
      "Erik Lumme",
      "Gerald Koch",
      "Klaudeta Mertiku",
      "Péter Török",
      "Ronny Edler",
      "Tulio Garcia",
      "Ville Salomäki",
      "Yuriy Yevstihnyeyev",
      "Zhe Sun",
      "Onur Idrisoglu",
      "Sergey Kulikov",
      "Päivi Soinio",
      "Stefan Uebe",
      "Milad Karbasizadeh",
      "Sohrab Taee",
      "Augustine Onubeze",
      "Mehdi Javan",
      "Ankurman Shrestha",
      "Ali Al Kaleedy",
      "Anne Koskinen-Kannisto",
      "Rasmus Peltonen",
      "Vladyslav Gutsul",
      "Nii Yeboah",
      "Aliia Kodzhoshalieva",
      "Ashish Dudeja",
      "Alexandru Chiuariu",
      "Katja Raita",
      "Dion Pramadhan",
      "Anna Männikkö",
      "Alexander Mikhaylov",
      "Lauri Airio",
      "Bogdan Udrescu",
      "Joni Uitto",
      "Shadi Khani",
      "Luis Gutierrez",
      "David Mullo",
      "Antti Lehtonen",
      "Burak Binzet",
      "Juho Piirainen",
      "Marta Olszewska",
      "Miia Bergström",
      "Nabiha Green",
      "Brian Gentile",
      "Patrik Hedelin",
      "Heli Ahlroos",
      "Jessica Mattsson",
      "Janne Holmia"
    ];
  }
  render() {
    return html`
      <div class="header-container">
        <h1>The people behind Vaadin</h1>
      </div>
      ${repeat(
        this.names,
        name => name,
        name => html`
          <div class="container">
            <div class="card">
              <a-avataaar identifier="${name}"></a-avataaar>
              <span>${name}</span>
            </div>
          </div>
        `
      )}
      <div>
        Created using <pre>&lt;a-avataaar identifier="Person Name"&gt;&lt;/a-avataaar&gt;</pre>
    `;
  }
}

customElements.define("vaadin-team", VaadinTeam);
