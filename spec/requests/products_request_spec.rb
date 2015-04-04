require "rails_helper"

describe "GET /v1/products" do
  it "returns the products" do
    product_one = create(:product, title: "First Product")
    _product_two = create(:product, title: "Second Product")

    get("/v1/products")

    # TODO: test other attributes
    # TODO: move to json schema
    expect(response_body[0]["title"]).to eq(product_one.title)
  end

  def response_body
    JSON.parse(response.body)
  end
end
