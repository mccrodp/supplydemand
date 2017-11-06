import bookshelf from '../db/bookshelf'

const TechModel = bookshelf.Model.extend({
  tableName: 'tech'
})

module.exports = {
  TechModel
}
