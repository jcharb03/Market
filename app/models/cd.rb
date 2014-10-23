class CD < Media
  alias_attribute :artist, :author
  alias_attribute :album, :secondary_info
end
