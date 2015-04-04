class Api::V1::ProductsController < ApplicationController
  def index
    # TODO: move to AMS
    render json: Product.limit(20)
  end
end
