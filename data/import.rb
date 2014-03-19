#!/usr/bin/env ruby
# encoding: utf-8

Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8

require 'google_drive'

credentials = YAML.load_file('/tmp/credentials.yml')

file_id = "1L6Xt86a1yqGuNUimuy6NxFGYg-ppM6Pu62GPsM0JN3M"

# Logs in.
# You can also use OAuth. See document of
# GoogleDrive.login_with_oauth for details.
session = GoogleDrive.login(credentials[:google][:login], credentials[:google][:password])

# First worksheet of
# https://docs.google.com/spreadsheet/ccc?key=pz7XtlQC-PYx-jrVMJErTcg
ws = session.spreadsheet_by_key(file_id).worksheets[0]

p ws.cells


# Dumps all cells.
for row in 1..ws.num_rows
  for col in 1..ws.num_cols
    p ws[row, col]
  end
end