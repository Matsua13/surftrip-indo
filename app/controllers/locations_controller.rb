class LocationsController < ApplicationController
  def lombok
    render 'pages/lombok'  # Explicitly render the view from app/views/pages/lombok.html.erb
  end

  def medewi
    render 'pages/medewi'  # Explicitly render the view from app/views/pages/medewi.html.erb
  end

  def bukit_bali
    render 'pages/bukit_bali'  # Explicitly render the view from app/views/pages/bukit_bali.html.erb
  end

  def sumbawa
    render 'pages/sumbawa'  # Explicitly render the view from app/views/pages/sumbawa.html.erb
  end

  def arugam_bay
    render 'pages/arugam_bay'  # Explicitly render the view from app/views/pages/arugam_bay.html.erb
  end
end
