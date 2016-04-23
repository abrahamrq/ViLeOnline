Rails.application.routes.draw do
  root 'vile#index'
  post '/solve', to: 'vile#solve', as: :solve
end
