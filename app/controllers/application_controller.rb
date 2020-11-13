class ApplicationController < ActionController::Base
  before_action :cocktails_count
  private

  def cocktails_count
    @cocktail_length = Cocktail.all.size
  end
end
