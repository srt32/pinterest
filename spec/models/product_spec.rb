require "rails_helper"

describe Product, type: :model do
  describe "Validations" do
    it { should validate_presence_of(:title) }
  end
end
