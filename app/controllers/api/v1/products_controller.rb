class Api::V1::ProductsController < ApplicationController
  DEFAULT_PRODUCT_COUNT = 20

  def index
    if page_number.present?
      products = Product.offset(offset)
    else
      products = Product.all
    end

    render json: products.limit(DEFAULT_PRODUCT_COUNT)
  end

  private

  def offset
    page_number.to_i * DEFAULT_PRODUCT_COUNT
  end

  def page_number
    params[:page]
  end
end
