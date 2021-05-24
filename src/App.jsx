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

            {/* <OctoCat
              artLink=""
              img=""
              name=" "
              number="# "
              artistLink=""
              artistImg=""
              artistName=""
            /> */}

            <article>
              <a href="https://octodex.github.com//octoqueer/">
                <img
                  src="https://octodex.github.com//images/Octoqueer.png"
                  width="300"
                  height="300"
                  alt="Octoqueer"
                />
              </a>
              <ul>
                <li>
                  # 149:
                  <a href="https://octodex.github.com//octoqueer/">
                    <strong>Octoqueer</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronfoxly">
                    <img
                      src="https://github.com/cameronfoxly.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//terracottocat/">
                <img
                  src="https://octodex.github.com//images/Terracottocat_Single.png"
                  width="300"
                  height="300"
                  alt="Terracottocat"
                />
              </a>
              <ul>
                <li>
                  #148:
                  <a href="https://octodex.github.com//terracottocat/">
                    <strong>Terracottocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/chubbmo">
                    <img
                      src="https://github.com/chubbmo.png"
                      width="24px"
                      height="24px"
                      alt="chubbmo"
                    />
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <a href="https://octodex.github.com//octogatos/">
                <img
                  src="https://octodex.github.com//images/Octogatos.png"
                  width="300"
                  height="300"
                  alt="Octogatos"
                />
              </a>
              <ul>
                <li>
                  #147:
                  <a href="https://octodex.github.com//octogatos/">
                    <strong>Octogatos</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronfoxly">
                    <img
                      src="https://github.com/cameronfoxly.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//sentrytocat/">
                <img
                  src="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                  width="300"
                  height="300"
                  alt="Sentrytocat"
                />
              </a>
              <ul>
                <li>
                  #142:
                  <a href="https://octodex.github.com//sentrytocat/">
                    <strong>Sentrytocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronmcefee">
                    <img
                      src="https://github.com/cameronmcefee.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//boxertocat/">
                <img
                  src="https://octodex.github.com//images/boxertocat_octodex.jpg"
                  width="300"
                  height="300"
                  alt="Boxertocat"
                />
              </a>
              <ul>
                <li>
                  #141:
                  <a href="https://octodex.github.com//boxertocat/">
                    <strong>Boxertocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rubyjazzy">
                    <img
                      src="https://github.com/rubyjazzy.png"
                      width="24px"
                      height="24px"
                      alt="rubyjazzy"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//suftocat/">
                <img
                  src="https://octodex.github.com//images/surftocat.png"
                  width="300"
                  height="300"
                  alt="Surftocat"
                />
              </a>
              <ul>
                <li>
                  #140:
                  <a href="https://octodex.github.com//suftocat/">
                    <strong>Surftocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeejkang"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//scubatocat/">
                <img
                  src="https://octodex.github.com//images/scubatocat.png"
                  width="300"
                  height="300"
                  alt="Scubatocat"
                />
              </a>
              <ul>
                <li>
                  #139:
                  <a href="https://octodex.github.com//scubatocat/">
                    <strong>Scubatocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronfoxly">
                    <img
                      src="https://github.com/cameronfoxly.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//dinotocat/">
                <img
                  src="https://octodex.github.com//images/dinotocat.png"
                  width="300"
                  height="300"
                  alt="Dinotocat"
                />
              </a>
              <ul>
                <li>
                  #129:
                  <a href="https://octodex.github.com//dinotocat/">
                    <strong>Dinotocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/kimestoesta">
                    <img
                      src="https://github.com/kimestoesta.png"
                      width="24px"
                      height="24px"
                      alt="kimestoesta"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//Robotocat/">
                <img
                  src="https://octodex.github.com//images/Robotocat.png"
                  width="300"
                  height="300"
                  alt="Robotocat"
                />
              </a>
              <ul>
                <li>
                  #92:
                  <a href="https://octodex.github.com//Robotocat/">
                    <strong>Robotocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeejkang"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//spidertocat/">
                <img
                  src="https://octodex.github.com//images/spidertocat.png"
                  width="300"
                  height="300"
                  alt="Spidertocat"
                />
              </a>
              <ul>
                <li>
                  #87:
                  <a href="https://octodex.github.com//spidertocat/">
                    <strong>Spidertocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeejkang"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//megacat-2/">
                <img
                  src="https://octodex.github.com//images/megacat-2.png"
                  width="300"
                  height="300"
                  alt="Megacatv2"
                />
              </a>
              <ul>
                <li>
                  # 86:
                  <a href="https://octodex.github.com//megacat-2/">
                    <strong>Megacatv2</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeekang"
                    />
                  </a>
                </li>
              </ul>
            </article>
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
