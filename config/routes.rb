Rails.application.routes.draw do
  root 'vile#welcome'
  post '/solve', to: 'vile#solve', as: :solve

  # Routes only without session
  scope constraints: ->(req) { req.session[:user_id].blank? } do
    get '/try', to: 'vile#try', as: :try
    get 'login', to: 'sessions#new', as: :new_login
    post 'login', to: 'sessions#create', as: :login
    resources :registrations, only: [:new, :create]
  end

  # Routes only with session
  scope constraints: ->(req) { !req.session[:user_id].blank? } do
    get 'logout', to: 'sessions#destroy', as: :logout
    get 'code', to: 'vile#code', as: :code
  end
end
