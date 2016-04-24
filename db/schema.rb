# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160424173054) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string   "email",         limit: 255
    t.string   "name",          limit: 255
    t.string   "last_name",     limit: 255
    t.string   "user_name",     limit: 255
    t.string   "password_hash", limit: 255
    t.string   "password_salt", limit: 255
    t.datetime "deleted_at"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "users", ["deleted_at"], name: "index_users_on_deleted_at", using: :btree

  create_table "vile_programs", force: :cascade do |t|
    t.text     "code"
    t.text     "xml_blocks"
    t.boolean  "hidden",                 default: false
    t.string   "name",       limit: 255, default: "Untitled"
    t.integer  "user_id"
    t.datetime "deleted_at"
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
  end

  add_index "vile_programs", ["deleted_at"], name: "index_vile_programs_on_deleted_at", using: :btree
  add_index "vile_programs", ["user_id"], name: "index_vile_programs_on_user_id", using: :btree

end
