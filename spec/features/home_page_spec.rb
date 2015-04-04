require "rails_helper"

feature "Navigating to home page", js: true do
  scenario "the page loads with products" do
    visit "/"

    expect(page).to have_content("Prod 1")
  end
end
