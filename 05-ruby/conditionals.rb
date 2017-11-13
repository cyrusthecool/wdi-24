sum = 13

# Long form if statement:
# if sum > 10
#   puts "Yes sum is greater than 10"
# end

# Backwards or modifier form of if statement:
puts "Yes sum is greater than 10" if sum > 10

# If / else statements can't be written in one line form
if sum > 10
  puts "Yes"
else
  puts "No"
end

grade = 'B'

# If with elsif:
# if grade == 'A'
#   puts "You are killing it"
# elsif grade == 'B'
#   puts "You are coasting fine"
# elsif grade == 'C'
#   puts "Acceptable"
# else
#   puts "Please see me after class"
# end

# case (less typing than if/elsif/elsif):
puts case grade
when 'A'
  "You are killing it"
when 'B'
  "You are coasting fine"
when 'C'
  "Acceptable"
else
  "Please see me after class"
end

# Secret password
print "What is the password? " # print() prints without a trailing new line
password = gets.chomp # Chaining: chomp removes the trailing \n

# Long form of unless:
# unless password == 'swordfish'
#   puts "Wrong password"
# end

# Modifier or backwards form of unless:
puts "Wrong password" unless password == 'swordfish'
