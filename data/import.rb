#!/usr/bin/env ruby
# encoding: utf-8

Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8

require 'google_drive'
require 'json'

credentials = YAML.load_file('/tmp/credentials.yml')

file_id = "1L6Xt86a1yqGuNUimuy6NxFGYg-ppM6Pu62GPsM0JN3M"

# Logs in.
# You can also use OAuth. See document of
# GoogleDrive.login_with_oauth for details.
session = GoogleDrive.login(credentials[:google][:login], credentials[:google][:password])

# First worksheet of
# https://docs.google.com/spreadsheet/ccc?key=pz7XtlQC-PYx-jrVMJErTcg
ws = session.spreadsheet_by_key(file_id).worksheets[0]

data = []
theme = nil
question = nil
answers = nil


(2..172).each do |x|
	# data[x-1] = [] if data[x-1].nil?
	unless ws[x, 1] == ''
		# new theme
		theme = ws[x, 1]
		p "theme : #{theme}"
	end
	unless ws[x, 2] == ''
		# new question
		unless question.nil?
			data.push question
		end
		num = ws[x, 2]
		question = {theme: theme, text: ws[x, 3], answers: []}
		p "question ##{num} - #{question}"
	end
	unless ws[x, 4] == ''
		question[:answers].push({text: ws[x, 4], score: {nkm: ws[x, 5]=='', ah: ws[x, 6]==''}})
	end
end

p data

File.write('./data/data.json', data.to_json)


