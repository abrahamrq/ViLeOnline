Rails.application.routes.draw do
  root 'vile#welcome'
  post '/solve', to: 'vile#solve', as: :solve
  post '/syntax_check', to: 'vile#syntax_check', as: :syntax_check
  post '/print_quadruplets', to: 'vile#print_quadruplets',
                             as: :print_quadruplets

  # Routes only without session
  scope constraints: ->(req) { req.session[:user_id].blank? } do
    get '/try', to: 'vile#try', as: :try
    get '/login', to: 'sessions#new', as: :new_login
    post '/login', to: 'sessions#create', as: :login
    resources :registrations, only: [:new, :create]
  end

  # Routes only with session
  scope constraints: ->(req) { !req.session[:user_id].blank? } do
    get '/logout', to: 'sessions#destroy', as: :logout
    get '/code(/:id)', to: 'vile#code', as: :code
    delete '/program/:id', to: 'vile#destroy', as: :delete_program
    post '/autosave', to: 'vile#autosave', as: :autosave
    post '/vile_program/update_hidden', to: 'vile#update_hidden',
                                       as: :update_hidden
    get '/my_profile', to: 'users#my_profile', as: :my_profile
  end
end
