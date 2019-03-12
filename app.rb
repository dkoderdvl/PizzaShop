require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, 'sqlite3:pizzashop.db'

class Product < ActiveRecord::Base



end

get '/' do
  erb :index
end

get '/cart' do
  erb :cart
end

post '/cart' do
  order_cart = params[:order]

  arr = order_cart.split ','

  @hh = {}
  arr.each do |value|
    arr_value = value.split '='
    @hh[(arr_value[0].delete 'product_').to_i] = arr_value[1].to_i
  end


  erb :cart
end
