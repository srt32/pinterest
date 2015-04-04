Rails.application.routes.draw do
  root "home#index"

  scope module: :api, defaults: { format: :json } do
    namespace :v1 do
      resources :products, only: [:index]
    end
  end
end
