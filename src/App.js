import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {
    searchInput: ' ',
    latestHistoryList: initialHistoryList,
    isTrue: true,
  }

  deleteHistory = value => {
    const {latestHistoryList} = this.state
    const newHistoryList = latestHistoryList.filter(each => each.id !== value)
    if (newHistoryList.length === 0) {
      this.setState({latestHistoryList: newHistoryList, isTrue: false})
    } else {
      this.setState({latestHistoryList: newHistoryList, isTrue: true})
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, latestHistoryList} = this.state
    const {isTrue} = this.state
    const newHistoryList = latestHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="Contianer">
        <div className="history">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="img"
            alt="app logo"
          />
        </div>
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            className="icon"
            alt="search"
          />
          <input
            type="search"
            className="search"
            onChange={this.onChangeInput}
            placeholder="Search history"
          />
        </div>

        {isTrue ? (
          <ul className="historyContainer">
            {newHistoryList.map(each => (
              <li className="websiteContainer" key={each.id}>
                <p className="time">{each.timeAccessed}</p>

                <div className="ss">
                  <img src={each.logoUrl} alt="domain logo" />
                  <p>{each.title}</p>
                  <p className="wef">{each.domainUrl}</p>
                </div>
                <button
                  className="buttton"
                  data-testid="delete"
                  type="button"
                  onClick={() => this.deleteHistory(each.id)}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
                    alt="delete"
                    className="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no history to show</p>
        )}
      </div>
    )
  }
}

export default App
