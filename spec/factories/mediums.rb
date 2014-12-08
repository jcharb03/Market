FactoryGirl.define do
  factory :Medium do |f|
    f.title "Halo"
    f.author "343"
    f.kind "game"
  end

	factory :book, class:Medium do
		title "Hunger Games"
		author "Suzzanne Collins"
		isbn "123456789"
		book true
	end

	factory :movie, class:Medium do
		title "Guardians of the Galaxy"
		year "2014"
		director "James Gunn"
		movie true
	end

	factory :game, class:Medium do
		title "Call of Duty"
		studio "Treyarch"
		platform "Playstation 4"
		game true
	end

 	factory :Media do |f|
    	f.title "Halo"
    	f.author "343"
    	f.kind "game"
  end
end