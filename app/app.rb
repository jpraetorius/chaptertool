$LOAD_PATH << './lib'

require 'sinatra'
require 'entry'

get '/' do
	erb :index
end

post '/auphonic' do
	entries = get_entries(params)
	content_type :text
	erb :auphonic, :locals => {:entries => entries}
end

post '/shownotes' do
	entries = get_entries(params)
	content_type :text
	erb :shownotes, :locals => {:entries => entries}
end

def get_entries(params)
	entries = Hash.new
	params.each do |param|
		if (param[0].start_with? 'timecode_absolute_')
			id = param[0].sub(/timecode_absolute_/,'')
			entry = get_entry(entries,id)
			entry.timecode_absolute = param[1].strip
		elsif (param[0].start_with? 'timecode_')
			id = param[0].sub(/timecode_/,'')
			entry = get_entry(entries,id)
			entry.timecode_relative = param[1].strip
		elsif (param[0].start_with? 'text_')
			id = param[0].sub(/text_/,'')
			entry = get_entry(entries,id)
			entry.text = param[1].strip
		end
	end
	entries.values.sort
end

def get_entry(entries, id)
	if (entries[id].nil?)
		entry = Entry.new
		entries[id] = entry
	else
		entry = entries[id]
	end
	entry
end