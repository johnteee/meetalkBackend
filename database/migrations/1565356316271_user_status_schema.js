'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserStatusSchema extends Schema {
  up () {
    this.createExtensionIfNotExists('postgis')

    this.create('user_statuses', (table) => {
      table.increments()
      table.timestamps()

      table.specificType('coordinates', 'geometry(point, 4326)');
      table.string('status');
      table.string('user_id').unique();
    })
  }

  down () {
    this.drop('user_statuses')
  }
}

module.exports = UserStatusSchema
