Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, format: {default: :json} do
    resources :users, only: [:create, :index, :show, :update] do
       get "search", on: :collection
    end
    resource :session, only: [:create, :destroy]
    resources :friend_requests, only: [:index, :create, :update, :destroy]
    resources :friendships, only: [:destroy]
    resources :posts, only: [:create, :destroy, :update, :index]
    resources :comments, only: [:create, :destroy, :update]
    resources :likes, only: [:create, :destroy]
  end
end
