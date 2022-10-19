const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
  // hide all tab panels
  // tabPanels.forEach(function(panel) {
  //   panel.hidden = true;
  // })
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    // anytime you see a dash on an html element you can access via camelCase
    //tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);

  });
  // mark clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  // find associated tab panel and show
  const {id} = e.currentTarget;
  /* METHOD 1
  const tabPanel = tabs.querySelector(`[aria-labeledby=${id}]`);
  console.log(tabPanel);
  tabPanel.hidden = false;
  */
  
  // Method 2: Find in the array of tab panels
  const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labeledby') === id);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick))