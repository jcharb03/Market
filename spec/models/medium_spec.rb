require 'spec_helper'

describe "Medium" do
  it "has a valid factory" do
    Factory.create(:medium).should be_valid
  end
	it "is invalid without a title" do
    Factory.build(:medium, title: nil).should_not be_valid
  end
  it "is valid with only a title" do
    Factory.build(:medium, title: "Halo").should be_valid
  end
  it "is valid with all fields" do
    Factory.build(:medium, title: "Halo", author: "343 Studio")
  end
end
