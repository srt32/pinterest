# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

60.times do |i|
  Product.create!(
    title: "T-Shirt #{i}",
    blurb: "So much can be done with a #{i} shirt" * 10,
    author: "JCPenny",
    details_url: "http://google.com",
    thumbnail_url: "http://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/4/0/4001_102.jpg"
  )
end
