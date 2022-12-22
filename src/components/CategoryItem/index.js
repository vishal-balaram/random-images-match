import './index.css'

const category = props => {
  const {tabsList, updateTab, isActive} = props
  const {tabId, displayText} = tabsList

  const changeTab = () => {
    updateTab(tabId)
  }

  const activeTab = isActive
    ? 'category-button bottom-border'
    : 'category-button'

  return (
    <li className="list">
      <button onClick={changeTab} className="category-button" type="button">
        <h1 className={activeTab}>{displayText}</h1>
      </button>
    </li>
  )
}

export default category
