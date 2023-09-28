import processContent from 'static-content-api'

processContent({
  parentDir: 'content',
  outputDir: 'static/content',
  jsonArgs: {
    spaces: 2,
  },
  mergeInfo: false,
  keyIndex: true,
})
