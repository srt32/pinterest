require "rails_helper"

describe "GET /v1/products" do
  context "with no page parameter" do
    it "returns the first page of products" do
      product_one = create(:product, title: "First Product")
      create_list(:product, 20)

      get("/v1/products")

      expect(response_body.length).to eq(20)
      first_product = response_body[0]
      expect(first_product["author"]).to eq(product_one.author)
      expect(first_product["blurb"]).to eq(product_one.blurb)
      expect(first_product["details_url"]).to eq(product_one.details_url)
      expect(first_product["thumbnail_url"]).to eq(product_one.thumbnail_url)
      expect(first_product["title"]).to eq(product_one.title)
    end
  end

  context "given a page parameter" do
    it "returns the given page" do
      create_list(:product, 20)
      next_page_product = create(:product, title: "Next Page Product")

      get("/v1/products?page=1")

      expect(response_body[0]["title"]).to eq(next_page_product.title)
    end
  end

  def response_body
    JSON.parse(response.body)
  end
end
