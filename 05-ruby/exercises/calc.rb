def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end

def prompt(message)
  print message
  gets.chomp # Implicit return
end

def basic_calculator
  puts "Basic calculator coming soon"
end

################################################################################

main_menu
menu_choice = prompt('Please enter your selection: ').downcase

until menu_choice == 'q'
  # Show the appropriate calculator
  case menu_choice
  when 'b'
    basic_calculator
  else
    puts "Invalid selection"
  end

  main_menu
  menu_choice = prompt('Please enter your selection: ').downcase
end

puts "Thank you for using this terrible calculator."
