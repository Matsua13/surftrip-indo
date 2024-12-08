class HomeController < ApplicationController
  def index
    flash[:warning] = "This is a warning message" # Set your flash message here
    # Any other logic you need for the home page
  end
end
