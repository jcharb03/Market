# Single inheritance plan

class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.string :title
      t.string :author
      t.string :type
      t.string :secondary_info #plateform or album
      t.datetime :year_created
      t.timestamps
    end
  end
end
