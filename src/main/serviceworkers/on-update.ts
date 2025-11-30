import { withPackageCheck } from '../../utils/with-package-check'
import { PATH_CHANGE } from '../events/path-change'

const isPathChange = (
  changeInfo: chrome.tabs.OnUpdatedInfo,
  tab: chrome.tabs.Tab
) => {
  return changeInfo.status && changeInfo.status == 'complete' && tab.url
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (isPathChange(changeInfo, tab)) {
    withPackageCheck(() => {
      chrome.tabs.sendMessage(tabId, {
        message: PATH_CHANGE,
      })
    }, tab.url)
  }
})
