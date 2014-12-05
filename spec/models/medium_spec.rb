require 'rails_helper'
require 'spec_helper'

describe "Medium" do
  it "has a valid factory" do
    FactoryGirl.create(:medium).should be_valid
  end
  it "is invalid without a title" do
    FactoryGirl.build(:medium, title: nil).should_not be_valid
  end
  it "is valid with only a title" do
    FactoryGirl.build(:medium, title: "Halo").should be_valid
  end
  it "is valid with all fields" do
    FactoryGirl.build(:medium, title: "Halo", author: "343 Studio").should be_valid
  end
  it "updates the database when a new item is created" do #sys2.1.1

  end
  it "has entries organized in the db by category" do #sys2.2.1

  end
  it "has author, isbn, and title fields assigned correctly for books" do #sys2.3.1

  end
  it "has artist, album, and title fields assigned correctly for cds" do #sys2.3.2

  end
  it "has title, year, and director fields assigned correctly for movies" do #sys2.3.3

  end
  it "has title, studio, and platform fields assigned correctly for video games" do #sys2.3.4

  end
  it "has a price field assigned when marked for sale" do #sys2.4.2

  end
  it "has tags filled in correctly when they are assigned" do #sys2.5.2

  end
  it "is removed from the database when it is deleted" do #sys2.6.1

  end
  it "is updated correctly if it is modified" do #sys2.7.1

  end
  
end
