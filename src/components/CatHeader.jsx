import React from 'react'

export class CatHeader extends React.Component {
  render() {
    return (
      <header>
        <nav className="left">
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
              </a>
            </li>

            <li className="octo">
              <a href="#">
                <div className="octo">Octodex</div>
              </a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
            <li>
              <a href="https://octodex.github.com/atom.xml">RSS</a>
            </li>
          </ul>
        </nav>
        <nav className="right">
          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">
                <div className="twitter">Follow us on Twitter</div>
              </a>
            </li>
            <li className="backto">
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
