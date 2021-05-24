import React, { Component } from 'react'
import { CatHeader } from './components/CatHeader'
import OctoCat from './components/OctoCat'

export class App extends Component {
  render() {
    return (
      <div>
        <main>
          <CatHeader />

          <section>
            <OctoCat
              artLink="https://octodex.github.com//octoasians/"
              img="https://octodex.github.com//images/OctoAsians_dex_Full.png"
              name=" OctoAsians"
              number="# 150"
              artistLink="https://github.com/cameronfoxly"
              artistImg="https://github.com/cameronfoxly.png"
              artistName="cameronfoxly"
            />

            <OctoCat
              artLink="https://octodex.github.com//octoqueer/"
              img="https://octodex.github.com//images/Octoqueer.png"
              name=" Octoqueer"
              number="# 149"
              artistLink="https://github.com/cameronfoxly"
              artistImg="https://github.com/cameronfoxly.png"
              artistName="cameronfoxly"
            />

            <OctoCat
              artLink="https://octodex.github.com//terracottocat/"
              img="https://octodex.github.com//images/Terracottocat_Single.png"
              name=" Terracottocat"
              number="# 148"
              artistLink="https://github.com/chubbmo"
              artistImg="https://github.com/chubbmo.png"
              artistName="chubbmo"
            />

            <OctoCat
              artLink="https://octodex.github.com//octogatos/"
              img="https://octodex.github.com//images/Octogatos.png"
              name=" Octogatos"
              number="# 147"
              artistLink="https://github.com/cameronfoxly"
              artistImg="https://github.com/cameronfoxly.png"
              artistName="cameronfoxly"
            />

            <OctoCat
              artLink="https://octodex.github.com//sentrytocat/"
              img="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
              name=" Sentrytocat"
              number="# 142"
              artistLink="https://github.com/cameronmcefee"
              artistImg="https://github.com/cameronmcefee.png"
              artistName="cameronfoxly"
            />

            <OctoCat
              artLink="https://octodex.github.com//boxertocat/"
              img="https://octodex.github.com//images/boxertocat_octodex.jpg"
              name=" Boxertocat"
              number="# 141"
              artistLink="https://github.com/rubyjazzy"
              artistImg="https://github.com/rubyjazzy.png"
              artistName="rubyjazzy"
            />

            <OctoCat
              artLink="https://octodex.github.com//suftocat/"
              img="https://octodex.github.com//images/surftocat.png"
              name=" Surftocat"
              number="# 140"
              artistLink="https://github.com/jeejkang"
              artistImg="https://github.com/jeejkang.png"
              artistName="jeejkang"
            />

            <OctoCat
              artLink="https://octodex.github.com//scubatocat/"
              img="https://octodex.github.com//images/scubatocat.png"
              name=" Scubatocat"
              number="# 139"
              artistLink="https://github.com/cameronfoxly"
              artistImg="https://github.com/cameronfoxly.png"
              artistName="cameronfoxly"
            />

            <OctoCat
              artLink="https://octodex.github.com//dinotocat/"
              img="https://octodex.github.com//images/dinotocat.png"
              name=" Dinotocat"
              number="# 129"
              artistLink="https://github.com/kimestoesta"
              artistImg="https://github.com/kimestoesta.png"
              artistName="kimestoesta"
            />

            <OctoCat
              artLink="https://octodex.github.com//Robotocat/"
              img="https://octodex.github.com//images/Robotocat.png"
              name=" Robotocat"
              number="# 92"
              artistLink="https://github.com/jeejkang"
              artistImg="https://github.com/jeejkang.png"
              artistName="jeejkang"
            />

            <OctoCat
              artLink="https://octodex.github.com//spidertocat/"
              img="https://octodex.github.com/images/spidertocat.png"
              name=" Spidertocat"
              number="# 87"
              artistLink="https://github.com/jeejkang"
              artistImg="https://github.com/jeejkang.png"
              artistName="jeejkang"
            />

            <OctoCat
              artLink="https://octodex.github.com//megacat-2/"
              img="https://octodex.github.com/images/megacat-2.png"
              name=" Megacatv2"
              number="# 86"
              artistLink="https://github.com/jeejkang"
              artistImg="https://github.com/jeejkang.png"
              artistName="jeejkang"
            />
          </section>
        </main>
        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}
