require 'rails_helper'
require 'spec_helper'

describe "Medium" do
  it "has a valid factory" do
    FactoryGirl.create(:Medium).should be_valid
  end
  it "is invalid without a title" do
    FactoryGirl.build(:Medium, title: nil).should_not be_valid
  end
  it "is valid with only a title" do
    FactoryGirl.build(:Medium, title: "Halo").should be_valid
  end
  it "is valid with all fields" do
    FactoryGirl.build(:Medium, title: "Halo", author: "343 Studio").should be_valid
  end
  it "updates the database when a new item is created" do #sys2.1.1
    media = FactoryGirl.build(:Medium, title: "Halo", author: "343 Studio", kind: "game").should be_valid
    #expect(media).to exist
  end
  it "has entries organized in the db by category" do #sys2.2.1

  end
  it "has author and title fields assigned correctly for books" do #sys2.3.1
    book = FactoryGirl.build(:Medium, title: "Hunger Games", author: "Suzzanne Collins", kind:'book')
    expect(book.title).to eq('Hunger Games')
    expect(book.author).to eq('Suzzanne Collins')
    expect(book.kind).to eq('book')

  end 
  it "has author and title fields assigned correctly for cds" do #sys2.3.2
    cd = FactoryGirl.build(:Medium, title:'From under the Cork Tree', author:'Fall out Boy', kind:'cd')
    expect(cd.title).to eq('From under the Cork Tree')
    expect(cd.author).to eq('Fall out Boy')
    expect(cd.kind).to eq('cd')
  end
  it "has title field assigned correctly for movies" do #sys2.3.3
    dvd = FactoryGirl.build(:Medium, title:'Guardians of the Galaxy', kind:'movie')
    expect(dvd.title).to eq('Guardians of the Galaxy')
    expect(dvd.kind).to eq('movie')

  end
  it "has title and author fields assigned correctly for video games" do #sys2.3.4
    game = FactoryGirl.build(:Medium, title:'Call of Duty', author:'Treyarch', kind:'game')
    expect(game.title).to eq('Call of Duty')
    expect(game.author).to eq('Treyarch')
    expect(game.kind).to eq('game')

  end
  it "has a price field assigned when marked for sale" do #sys2.4.2

  end
  it "has tags filled in correctly when they are assigned" do #sys2.5.2

  end
  it "is removed from the database when it is deleted" do #sys2.6.1
    game = FactoryGirl.build(:Medium, title:'Call of Duty', author:'Treyarch', kind:'game')
    game.destroy
  end
  it "is updated correctly if it is modified" do #sys2.7.1
    game = FactoryGirl.build(:Medium, title:'Call of Duty', author:'Treyarch', kind:'game')
    game.author = 'Sledgehammer Games'
    expect(game.author).to eq('Sledgehammer Games')

  end
  
end
