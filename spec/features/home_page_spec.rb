require "rails_helper"

feature "Navigating to home page", js: true do
  scenario "the page loads" do
    visit "/"

    expect(page).to have_content("Name")
  end
end
