require "rails_helper"

feature "Navigating to home page", js: true do
  scenario "the page loads with products" do
    page.driver.block_unknown_urls
    first_product = create(:product, title: "First T Shirt")
    visit "/"

    expect(page).to have_content(first_product.title)
  end

  scenario "on scroll it loads more products", js: true do
    page.driver.block_unknown_urls
    create_list(:product, 20)
    second_page_product = create(:product, title: "Late Bloomer")
    visit("/")

    page.execute_script("window.scrollTo(0,100000)")

    expect(page).to have_content(second_page_product.title)
  end
end
