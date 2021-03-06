module.exports = [{
  target: '#tags',
  title: 'tours.tags.TAGS_LABEL',
  content: 'tours.tags.TAG_DEFINITION_LABEL',
  params: {
    placement: 'bottom'
  }
}, {
  target: '#search-tag',
  content: 'tours.tags.SEARCH_LABEL',
  link: 'tours.tags.CREATE_TAG_LINK_LABEL',
  params: {
    placement: 'left',
    blockOnMiss: 'div.q-card.q-card--bordered',
    route: { name: 'members-activity' }
  }
}, {
  target: '#tag-sorter',
  title: 'tours.tags.SORT_LABEL',
  params: {
    placement: 'left',
    clickOn: '#tag-sorter',
    clickDelay: 500,
    clickOnNext: '#tag-sorter',
    clickOnPrevious: '#tag-sorter'
  }
}, {
  target: 'div.q-card.q-card--bordered',
  content: 'tours.tags.TAG_CARD_LABEL',
  params: {
    placement: 'right'
  }
}, {
  target: '#list-members',
  title: 'tours.tags.TAG_MEMBERS_LABEL',
  content: 'tours.tags.LIST_MEMBERS_LABEL',
  params: {
    placement: 'bottom'
  }
}, {
  target: '#edit-tag',
  content: 'tours.tags.UPDATE_TAG_LABEL',
  params: {
    placement: 'bottom'
  }
}]
