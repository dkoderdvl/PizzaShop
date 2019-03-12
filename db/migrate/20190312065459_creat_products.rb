class CreatProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string  :title
      t.text    :description
      t.text    :path_to_image
      t.decimal :price
      t.decimal :size
      t.boolean :is_spisy
      t.boolean :is_veg
      t.boolean :is_best_offer

      t.timestamps
    end
  end
end
