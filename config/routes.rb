Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :v1, defaults: {format: 'json'} do
    resources :coins
    resources :watchlists, only: [:index]
    resources :users, only: [:create,:show,:edit,:update]
    resource :session, only:[:create,:destroy]
  end
  
  #catching all my routes that are not api calls 
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end 
  root 'static#index'  
end
