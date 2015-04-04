require "rails_helper"

feature "Navigating to home page", js: true do
  scenario "the page loads with products" do
    first_product = create(:product, title: "First T Shirt")
    visit "/"

    expect(page).to have_content(first_product.title)
  end
end
