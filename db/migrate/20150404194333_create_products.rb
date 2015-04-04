class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.timestamps null: false

      t.string :author
      t.text :blurb
      t.string :details_url, null: false, default: ""
      t.string :thumbnail_url, null: false, default: ""
      t.string :title, null: false
    end
  end
end
